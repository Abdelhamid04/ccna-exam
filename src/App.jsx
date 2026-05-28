import { useMemo, useState } from "react";
import "./App.css";
import { ccnaPracticeQuestions } from "./data/ccnaPractice";

const RANDOM_TEST_SIZE = 60;
const normalize = (value) =>
  String(value)
    .normalize("NFKC")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .trim()
    .toLowerCase();
const getChoiceValue = (choice) => (typeof choice === "string" ? choice : choice.value);
const getChoiceLabel = (choice) => (typeof choice === "string" ? choice : choice.label ?? choice.value);
const getQuestionNumber = (id) => String(id).split("-")[0];
const hasAnswer = (answers, value) =>
  answers.some((answer) => normalize(answer) === normalize(value));

function shuffleItems(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function prepareQuestion(question, shouldShuffleAnswers) {
  if (!shouldShuffleAnswers) {
    return question;
  }

  return {
    ...question,
    choices: question.choices ? shuffleItems(question.choices) : question.choices,
    options: question.options ? shuffleItems(question.options) : question.options,
    pairs: question.pairs ? shuffleItems(question.pairs) : question.pairs,
  };
}

function sameAnswers(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const left = a.map(normalize).sort();
  const right = b.map(normalize).sort();
  return left.every((value, index) => value === right[index]);
}

function App() {
  const allQuestions = ccnaPracticeQuestions;
  const [session, setSession] = useState(null);
  const questions = useMemo(() => session?.questions ?? [], [session]);
  const logicalQuestionNumbers = useMemo(
    () => [...new Set(questions.map((item) => getQuestionNumber(item.id)))],
    [questions],
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersById, setAnswersById] = useState({});
  const [results, setResults] = useState([]);

  function startSession(mode) {
    const isRandomTest = mode === "random";
    const sourceQuestions = isRandomTest
      ? shuffleItems(allQuestions).slice(0, Math.min(RANDOM_TEST_SIZE, allQuestions.length))
      : allQuestions;

    setSession({
      mode,
      title: isRandomTest ? "Test random" : "Revision complete",
      questions: sourceQuestions.map((item) => prepareQuestion(item, isRandomTest)),
    });
    setCurrentIndex(0);
    setAnswersById({});
    setResults([]);
  }

  function backToMenu() {
    setSession(null);
    setCurrentIndex(0);
    setAnswersById({});
    setResults([]);
  }

  if (!session) {
    return (
      <main className="app-shell">
        <section className="quiz-header">
          <div>
            <p className="eyebrow">CCNA 1 ITN v7</p>
            <h1>Simulateur de revision</h1>
            <p className="intro">
              Choisis une revision complete des {allQuestions.length} questions ou
              un test de {Math.min(RANDOM_TEST_SIZE, allQuestions.length)} questions
              tirees au hasard.
            </p>
          </div>
        </section>

        <section className="mode-panel" aria-label="Choix du mode">
          <button className="mode-button" type="button" onClick={() => startSession("review")}>
            <span>Revision complete</span>
            <strong>{allQuestions.length} questions</strong>
          </button>

          <button className="mode-button accent" type="button" onClick={() => startSession("random")}>
            <span>Test random</span>
            <strong>{Math.min(RANDOM_TEST_SIZE, allQuestions.length)} questions</strong>
          </button>
        </section>
      </main>
    );
  }

  const question = questions[currentIndex];
  const currentQuestionNumber = getQuestionNumber(question.id);
  const currentLogicalIndex = session.mode === "random"
    ? currentIndex
    : logicalQuestionNumbers.indexOf(currentQuestionNumber);
  const logicalQuestionTotal = logicalQuestionNumbers.length;
  const isMultiple = question.type === "multiple";
  const isMatching = question.type === "matching";
  const hasImageChoices = question.choices?.some((choice) => typeof choice !== "string" && choice.image);
  const savedAnswer = answersById[question.id] ?? { selected: [], matches: {} };
  const selected = savedAnswer.selected;
  const matches = savedAnswer.matches;
  const checked = results.some((result) => result.id === question.id);

  const selectedAnswers = isMatching
    ? question.pairs.map((pair, index) => `${pair.term}:${matches[index] ?? ""}`)
    : selected;
  const correctAnswers = isMatching
    ? question.pairs.map((pair) => `${pair.term}:${pair.description}`)
    : question.answers;

  const isCorrect = sameAnswers(selectedAnswers, correctAnswers);
  const answered = isMatching
    ? question.pairs.every((_, index) => matches[index])
    : selected.length > 0;
  const score = results.filter((result) => result.correct).length;
  const finished = results.length === questions.length;
  const percentScore = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  function saveCurrentAnswer(nextAnswer) {
    setAnswersById((current) => ({
      ...current,
      [question.id]: {
        selected,
        matches,
        ...nextAnswer,
      },
    }));
  }

  function toggleChoice(choice) {
    if (checked) {
      return;
    }

    if (!isMultiple) {
      saveCurrentAnswer({ selected: [choice] });
      return;
    }

    const nextSelected = selected.includes(choice)
      ? selected.filter((item) => item !== choice)
      : [...selected, choice];

    saveCurrentAnswer({ selected: nextSelected });
  }

  function updateMatch(index, description) {
    if (checked) {
      return;
    }

    saveCurrentAnswer({
      matches: {
        ...matches,
        [index]: description,
      },
    });
  }

  function checkAnswer() {
    if (!answered || checked) {
      return;
    }

    setResults((current) => [
      ...current,
      {
        id: question.id,
        correct: isCorrect,
      },
    ]);
  }

  function goNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((current) => current + 1);
    }
  }

  function goBack() {
    if (currentIndex > 0) {
      setCurrentIndex((current) => current - 1);
    }
  }

  function restart() {
    setCurrentIndex(0);
    setAnswersById({});
    setResults([]);

    if (session.mode === "random") {
      setSession((current) => ({
        ...current,
        questions: shuffleItems(allQuestions)
          .slice(0, Math.min(RANDOM_TEST_SIZE, allQuestions.length))
          .map((item) => prepareQuestion(item, true)),
      }));
    }
  }

  return (
    <main className="app-shell">
      <section className="quiz-header">
        <div>
          <p className="eyebrow">CCNA 1 ITN v7</p>
          <h1>Simulateur de revision</h1>
          <p className="intro">
            {session.title} : {questions.length} questions.
            {session.mode === "random"
              ? " Les questions et les reponses sont melangees a chaque demarrage."
              : " Toutes les questions sont disponibles pour reviser dans l'ordre."}
          </p>
        </div>

        <div className="score-panel" aria-label="Progression">
          <span>{score}/{results.length}</span>
          <small>bonnes reponses</small>
        </div>
      </section>

      <section className="quiz-card" aria-live="polite">
        <div className="progress-row">
          <span>
            Question {session.mode === "random" ? currentIndex + 1 : currentQuestionNumber} / {logicalQuestionTotal}
          </span>
          <span>{question.category}</span>
        </div>
        <div className="progress-track">
          <span style={{ width: `${((currentLogicalIndex + 1) / logicalQuestionTotal) * 100}%` }} />
        </div>

        <div className="question-block">
          <p className="question-type">
            {isMatching
              ? "Relier les elements"
              : isMultiple
                ? "Plusieurs reponses possibles"
                : "Une seule reponse"}
          </p>
          <h2>{question.prompt}</h2>
        </div>

        {isMatching ? (
          <div className="matching-grid">
            {question.pairs.map((pair, index) => (
              <label key={`${pair.term}-${index}`} className="match-row">
                <span>{pair.term}</span>
                <select
                  value={matches[index] ?? ""}
                  onChange={(event) => updateMatch(index, event.target.value)}
                  disabled={checked}
                >
                  <option value="">Choisir une description</option>
                  {question.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        ) : (
          <div className={hasImageChoices ? "choices image-choices" : "choices"}>
            {question.choices.map((choice) => {
              const choiceValue = getChoiceValue(choice);
              const choiceLabel = getChoiceLabel(choice);
              const active = selected.includes(choiceValue);
              const isAnswer = hasAnswer(question.answers, choiceValue);
              const correct = checked && isAnswer;
              const wrong = checked && active && !isAnswer;

              return (
                <button
                  className={[
                    "choice",
                    active ? "selected" : "",
                    correct ? "correct" : "",
                    wrong ? "wrong" : "",
                  ].join(" ")}
                  key={choiceValue}
                  type="button"
                  onClick={() => toggleChoice(choiceValue)}
                  aria-pressed={active}
                  aria-label={choiceLabel}
                >
                  <span className="choice-marker">{isMultiple ? "OK" : "*"}</span>
                  {typeof choice === "string" ? (
                    choice
                  ) : (
                    <span className="image-choice">
                      <img src={choice.image} alt={choice.alt ?? choiceLabel} />
                      <span className="sr-only">{choiceLabel}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {checked && (
          <div className={isCorrect ? "feedback success" : "feedback error"}>
            <strong>{isCorrect ? "Correct" : "A revoir"}</strong>
            <p>{question.explanation}</p>
          </div>
        )}

        <div className="actions">
          <button className="ghost-button" type="button" onClick={goBack} disabled={currentIndex === 0}>
            Back
          </button>

          <button className="primary-button" type="button" onClick={checkAnswer} disabled={!answered || checked}>
            {checked ? "Validee" : "Valider"}
          </button>

          <button
            className="ghost-button"
            type="button"
            onClick={goNext}
            disabled={currentIndex + 1 === questions.length}
          >
            Next
          </button>

          <button className="ghost-button" type="button" onClick={restart}>
            Reinitialiser
          </button>

          <button className="ghost-button" type="button" onClick={backToMenu}>
            Menu
          </button>
        </div>
      </section>

      {finished && (
        <section className="summary">
          <h2>Resultat final</h2>
          <p>
            Score : <strong>{score} / {questions.length}</strong> ({percentScore}%).
            Reprends les questions manquees et refais le quiz jusqu'a stabiliser ton score.
          </p>
        </section>
      )}
    </main>
  );
}

export default App;
