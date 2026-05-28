const basePracticeQuestions = [
  {
  id: 1,
  type: "multiple",
  category: "Accès distant",
  prompt:
    "1. Un administrateur a défini un compte d’utilisateur local avec un mot de passe secret sur le routeur R1 pour être utiliser avec SSH. Quelles sont les trois étapes supplémentaires nécessaires pour configurer R1 pour accepter uniquement les connexions SSH chiffrées ? (Choisissez trois réponses.)",
  choices: [
    "Activez les sessions SSH entrantes à l’aide des commandes de ligne VTY.",
    "Configurer le nom de domaine IP.",
    "Générez des clés pré-partagées bidirectionnelles.",
    "Configurez DNS sur le routeur.",
    "Activez les sessions Telnet entrantes à l’aide des commandes de ligne VTY.",
    "Générer les clés SSH.",
  ],
  answers: [
    "Activez les sessions SSH entrantes à l’aide des commandes de ligne VTY.",
    "Configurer le nom de domaine IP.",
    "Générer les clés SSH.",
  ],
  explanation:
    "Pour activer SSH sur un routeur Cisco, il faut configurer un nom de domaine, générer les clés SSH et autoriser SSH sur les lignes VTY. Telnet n’est pas chiffré.",
},
{
  id: 2,
  type: "single",
  category: "Protocoles",
  prompt: "2. Que sont les protocoles propriétaires ?",
  choices: [
    "Des protocoles qui peuvent être librement utilisés par toute entreprise ou tout fournisseur",
    "Un ensemble de protocoles connus sous le nom de suite de protocoles TCP/IP",
    "Des protocoles développés par des entreprises qui contrôlent leur définition et leur fonctionnement",
    "Des protocoles développés par des organismes privés pour fonctionner avec du matériel provenant de tout fournisseur",
  ],
  answers: [
    "Des protocoles développés par des entreprises qui contrôlent leur définition et leur fonctionnement",
  ],
  explanation:
    "Un protocole propriétaire est développé et contrôlé par une entreprise spécifique. Son fonctionnement dépend des décisions du propriétaire.",
},
  {
  id: 3,
  type: "matching",
  category: "Communication réseau",
  prompt:
    "3. Reliez chaque description au terme correspondant. (Les options ne sont pas toutes utilisées.)",
  pairs: [
    {
      term: "Dimensionnement des messages",
      description:
        "Processus consistant à décomposer un message long en parties distinctes avant de les envoyer sur le réseau",
    },
    {
      term: "Encapsulation des messages",
      description:
        "Processus consistant à placer un format de message à l’intérieur d’un autre",
    },
    {
      term: "Codage des messages",
      description:
        "Processus permettant de convertir des informations dans un format acceptable pour la transmission",
    },
  ],
  options: [
    "Processus consistant à décomposer un message long en parties distinctes avant de les envoyer sur le réseau",
    "Processus consistant à placer un format de message à l’intérieur d’un autre",
    "Processus permettant de convertir des informations dans un format acceptable pour la transmission",
  ],
  explanation:
    "Avant la transmission sur le réseau, les messages peuvent être découpés, encapsulés et codés afin d’être correctement transportés entre les appareils.",
},
  {
  id: 4,
  type: "single",
  category: "Adressage IP",
  prompt:
    "4. Un administrateur réseau ajoute un nouveau réseau local à une filiale. Le nouveau réseau local doit prendre en charge 4 périphériques connectés. Quel est le plus petit masque réseau que l’administrateur réseau peut utiliser pour le nouveau réseau ?",
  choices: [
    "255.255.255.224",
    "255.255.255.248",
    "255.255.255.128",
    "255.255.255.192",
  ],
  answers: ["255.255.255.248"],
  explanation:
    "Le masque 255.255.255.248 (/29) fournit 6 adresses hôtes utilisables, ce qui suffit pour 4 périphériques.",
},
{
  id: 5,
  type: "single",
  category: "TCP",
  prompt: "5. À quoi sert le glissement de fenêtre TCP ?",
  choices: [
    "À mettre fin à une communication une fois la transmission des données complète",
    "À demander à une source de réduire la vitesse à laquelle elle transmet les données",
    "À informer une source qu’elle doit retransmettre les données à partir d’un point particulier",
    "À s’assurer que les segments parviennent à la destination dans l’ordre",
  ],
  answers: [
    "À demander à une source de réduire la vitesse à laquelle elle transmet les données",
  ],
  explanation:
    "Le mécanisme de fenêtre glissante TCP contrôle le flux des données afin d’éviter qu’un récepteur soit submergé.",
},
{
  id: 6,
  type: "multiple",
  category: "TCP et UDP",
  prompt:
    "6. Des données sont envoyées depuis un ordinateur source vers un serveur de destination. Quelles sont les trois affirmations qui décrivent la fonction TCP ou UDP dans cette situation ? (Choisissez trois réponses.)",
  choices: [
    "Le champ Port source identifie l’application ou le service actif qui traitera les données renvoyées à l’ordinateur.",
    "Le processus TCP exécuté sur l’ordinateur sélectionne le port de destination de façon aléatoire lors de l’établissement d’une session via le serveur.",
    "Des segments UDP sont encapsulés dans des paquets IP pour le transport via le réseau.",
    "Le numéro de port source TCP identifie l’hôte émetteur sur le réseau.",
    "Le numéro de port de destination UDP identifie l’application ou le service du serveur destiné au traitement des données.",
    "TCP est le protocole le plus adapté lorsqu’une fonction requiert une surcharge réseau plus faible.",
  ],
  answers: [
    "Le champ Port source identifie l’application ou le service actif qui traitera les données renvoyées à l’ordinateur.",
    "Des segments UDP sont encapsulés dans des paquets IP pour le transport via le réseau.",
    "Le numéro de port de destination UDP identifie l’application ou le service du serveur destiné au traitement des données.",
  ],
  explanation:
    "Les numéros de port identifient les applications source et destination. UDP et TCP utilisent IP pour transporter les données sur le réseau.",
},
{
  id: 7,
  type: "single",
  category: "Services réseau",
  prompt:
    "7. Un serveur reçoit un paquet client. Le numéro de port de destination du paquet est 69. Quelle application de service le client demande-t-il ?",
  choices: ["DNS", "SMTP", "TFTP", "DHCP"],
  answers: ["TFTP"],
  explanation:
    "Le protocole TFTP utilise le port UDP 69 pour le transfert simple de fichiers.",
},
{
  id: 8,
  type: "single",
  category: "Cybersécurité",
  prompt: "8. Quelle caractéristique décrit un cheval de Troie ?",
  choices: [
    "logiciel ou code malveillant s’exécutant sur un périphérique final",
    "l’utilisation d’informations d’identification volées pour accéder à des données privées",
    "une attaque qui ralentit ou bloque un périphérique ou un service réseau",
    "un périphérique réseau qui filtre l’accès et le trafic entrant dans un réseau",
  ],
  answers: [
    "logiciel ou code malveillant s’exécutant sur un périphérique final",
  ],
  explanation:
    "Un cheval de Troie est un logiciel malveillant qui se fait passer pour un programme légitime afin d’infecter un appareil.",
},
{
  id: 9,
  type: "multiple",
  category: "ARP",
  prompt:
    "9. Quels sont les deux problèmes qui peuvent être causés par un grand nombre de requêtes ARP et de messages de réponse ? (Choisissez deux réponses.)",
  choices: [
    "Les commutateurs sont surchargés car ils concentrent tout le trafic des sous-réseaux connectés.",
    "Tous les messages de requête ARP doivent être traités par tous les nœuds du réseau local.",
    "Le réseau peut être saturé car les messages de réponse ARP ont une charge utile très importante grâce à l’adresse MAC de 48 bits et à l’adresse IP de 32 bits qu’ils contiennent.",
    "La requête ARP est envoyée en tant que diffusion et inondera l’ensemble du sous-réseau.",
    "Un grand nombre de messages de requête et de réponse ARP peuvent ralentir le processus de commutation, ce qui conduit le commutateur à apporter de nombreuses modifications dans sa table MAC.",
  ],
  answers: [
    "Tous les messages de requête ARP doivent être traités par tous les nœuds du réseau local.",
    "La requête ARP est envoyée en tant que diffusion et inondera l’ensemble du sous-réseau.",
  ],
  explanation:
    "Les requêtes ARP sont des diffusions que tous les appareils du réseau local doivent traiter, ce qui peut augmenter le trafic inutilement.",
},
{
  id: 10,
  type: "single",
  category: "Commandes Windows",
  prompt:
    "10. Quelle commande peut être utilisée sur un PC Windows pour afficher la configuration IP de cet ordinateur ?",
  choices: [
    "ipconfig",
    "ping",
    "show ip interface brief",
    "show interfaces",
  ],
  answers: ["ipconfig"],
  explanation:
    "La commande ipconfig affiche la configuration IP d’un ordinateur Windows.",
},
{
  id: 11,
  type: "single",
  category: "Sécurité Cisco",
  prompt:
    "11. Comment la commande service password-encryption améliore-t-elle la sécurité des mots de passe sur des routeurs et des commutateurs Cisco ?",
  choices: [
    "Elle demande à l’utilisateur d’entrer des mots de passe chiffrés pour obtenir un accès à la console sur un routeur ou un commutateur.",
    "Elle nécessite que des mots de passe soient utilisés lors d’une connexion distante à un routeur ou à un commutateur avec Telnet.",
    "Elle chiffre les mots de passe qui sont stockés dans des fichiers de configuration de routeur et de commutateur.",
    "Elle chiffre les mots de passe lorsqu’ils sont transmis sur le réseau.",
  ],
  answers: [
    "Elle chiffre les mots de passe qui sont stockés dans des fichiers de configuration de routeur et de commutateur.",
  ],
  explanation:
    "La commande service password-encryption chiffre les mots de passe en clair présents dans la configuration Cisco.",
},
  {
  id: 12,
  type: "single",
  category: "IPv4",
  prompt:
    "12. Quel mécanisme est utilisé par un routeur pour empêcher un paquet IPv4 reçu de voyager sans fin sur un réseau ?",
  choices: [
    "Il décrémente la valeur du champ TTL de 1 et si le résultat est 0, il rejette le paquet et envoie un message « Time Exceeded » à l’hôte source.",
    "Il vérifie la valeur du champ TTL et si elle est égale à 0, il rejette le paquet et envoie un message « Destination Unreachable » à l’hôte source.",
    "Il incrémente la valeur du champ TTL de 1 et si le résultat est 100, il rejette le paquet et envoie un message « Parameter Problem » à l’hôte source.",
    "Il vérifie la valeur du champ TTL et si elle est égale à 100, il rejette le paquet et envoie un message « Destination Unreachable » à l’hôte source.",
  ],
  answers: [
    "Il décrémente la valeur du champ TTL de 1 et si le résultat est 0, il rejette le paquet et envoie un message « Time Exceeded » à l’hôte source.",
  ],
  explanation:
    "Chaque routeur réduit la valeur TTL. Lorsque TTL atteint 0, le paquet est supprimé afin d’éviter les boucles infinies.",
},
{
  id: 13,
  type: "single",
  category: "Services Web",
  prompt: "13. Quel service est fourni par HTTPS ?",
  choices: [
    "Utilise le cryptage pour sécuriser l’échange de texte, d’images graphiques, de sons et de vidéos sur le Web.",
    "Traduit des noms de domaines (par exemple, cisco.com) en adresses IP",
    "Permet l’accès à distance aux périphériques et serveurs réseau.",
    "Utilise le chiffrement pour fournir un accès distant sécurisé aux périphériques et serveurs réseau.",
  ],
  answers: [
    "Utilise le cryptage pour sécuriser l’échange de texte, d’images graphiques, de sons et de vidéos sur le Web.",
  ],
  explanation:
    "HTTPS sécurise les communications Web grâce au chiffrement SSL/TLS.",
},
{
  id: 14,
  type: "multiple",
  category: "Routage IPv4",
  prompt:
    "14. Quelles sont les deux déclarations qui décrivent les caractéristiques d’une table de routage IPv4 sur un routeur ? (Choisissez deux réponses.)",
  choices: [
    "La table de routage répertorie les adresses MAC de chaque interface active.",
    "Il stocke des informations sur les chemins dérivés des interfaces de routeur actives.",
    "Si une route statique par défaut est configurée sur le routeur, une entrée sera incluse dans la table de routage avec le code source S .",
    "S’il existe deux ou plusieurs chemins possibles vers la même destination, le chemin associé à la valeur métrique la plus élevée est inclus dans le tableau d’acheminement.",
    "Les interfaces connectées directement ont deux codes d’origine dans la table de routage: C et S .",
    "La commande netstat -r permettent d’afficher la table de routage de l’hôte.​",
  ],
  answers: [
    "Il stocke des informations sur les chemins dérivés des interfaces de routeur actives.",
    "Si une route statique par défaut est configurée sur le routeur, une entrée sera incluse dans la table de routage avec le code source S .",
  ],
  explanation:
    "La table de routage contient les chemins réseau connus. Les routes statiques apparaissent avec le code S dans la table.",
},
{
  id: 15,
  type: "single",
  category: "En-tête IPv4",
  prompt:
    "15. Quelle valeur, qui se trouve dans un champ d’en-tête IPv4, est diminuée par chaque routeur qui reçoit un paquet ?",
  choices: [
    "Décalage du fragment",
    "Time To Live (durée de vie)",
    "Longueur d’en-tête",
    "Services différenciés",
  ],
  answers: ["Time To Live (durée de vie)"],
  explanation:
    "Le champ TTL est diminué par chaque routeur afin d’empêcher les paquets de circuler indéfiniment sur le réseau.",
},
{
  id: 16,
  type: "single",
  category: "Passerelle par défaut",
  prompt:
    "16. Reportez-vous à l’illustration. Quelle interface dont l’adresse IP de périphérique doit être utilisée comme paramètre de passerelle par défaut de l’hôte H1 ?",
  choices: [
    "R2: S0/0/1",
    "R1: S0/0/0",
    "R1: G0/0",
    "R2: S0/0/0",
  ],
  answers: [
    "R1: G0/0",
  ],
  explanation:
    "La passerelle par défaut d’un hôte doit être l’interface du routeur connectée au même réseau local que cet hôte. Dans ce cas, l’interface R1 G0/0 est connectée au LAN de H1.",
},
{
  id: 17,
  type: "single",
  category: "Commutateur Cisco",
  prompt:
    "17. La commande de configuration globale ip default-gateway 172.16.100.1 est appliquée sur un commutateur. Quel est l’effet de cette commande ?",
  choices: [
    "Le commutateur est limité à l’envoi et à la réception de trames vers et depuis la passerelle 172.16.100.1.",
    "Le commutateur aura une interface de gestion avec l’adresse 172.16.100.1.",
    "Le commutateur peut communiquer avec d’autres hôtes du réseau 172.16.100.0.",
    "Le commutateur peut être géré à distance à partir d’un hôte sur un autre réseau.",
  ],
  answers: [
    "Le commutateur peut être géré à distance à partir d’un hôte sur un autre réseau.",
  ],
  explanation:
    "La commande ip default-gateway configure la passerelle utilisée par le commutateur pour communiquer avec des réseaux distants.",
},
{
  id: 18,
  type: "single",
  category: "Cisco IOS",
  prompt:
    "18. Un nouvel administrateur de réseau a été invité à saisir un message de bannière sur un appareil Cisco. Quel est le moyen le plus rapide pour un administrateur de réseau de vérifier si la bannière est correctement configurée ?",
  choices: [
    "Quittez le mode d’exécution privilégié et appuyez sur Enter .",
    "Quittez le mode de configuration globale.",
    "Éteignez le téléphone puis rallumez-le.",
    "Redémarrez l’appareil.",
    "Saisissez CTRL-Z à l’invite de mode privilégié.",
  ],
  answers: [
    "Quittez le mode d’exécution privilégié et appuyez sur Enter .",
  ],
  explanation:
    "La bannière MOTD s’affiche lorsqu’un utilisateur accède à l’appareil. Quitter puis revenir à l’invite permet de la vérifier rapidement.",
},
  {
  id: 19,
  type: "single",
  category: "Réseaux sans fil",
  prompt:
    "19. Quelle méthode est utilisée pour gérer l’accès avec gestion des conflits sur un réseau sans fil ?",
  choices: [
    "Classement des priorités",
    "CSMA/CD",
    "Passage de jeton",
    "CSMA/CA",
  ],
  answers: ["CSMA/CA"],
  explanation:
    "Les réseaux sans fil utilisent CSMA/CA afin d’éviter les collisions avant la transmission des données.",
},
{
  id: 20,
  type: "multiple",
  category: "CSMA/CD",
  prompt:
    "20. Parmi les caractéristiques suivantes, lesquelles sont des caractéristiques du processus CSMA/CD ? (Choisissez trois réponses.)",
  choices: [
    "Un signal d’encombrement indique que la collision de paquets a été résolue et que le support n’est plus occupé.",
    "Tous les périphériques d’un segment ont accès aux données transitant par le support réseau.",
    "Les périphériques peuvent se voir attribuer une priorité de transmission supérieure.",
    "Suite à la détection d’une collision, les hôtes peuvent tenter de reprendre leur transmission après un délai aléatoire.",
    "Le périphérique doté d’un jeton électronique est le seul autorisé à transmettre des données après une collision.",
    "Un périphérique est à l’écoute du support et attend qu’il ne soit plus occupé pour pouvoir transmettre ses données.",
  ],
  answers: [
    "Tous les périphériques d’un segment ont accès aux données transitant par le support réseau.",
    "Suite à la détection d’une collision, les hôtes peuvent tenter de reprendre leur transmission après un délai aléatoire.",
    "Un périphérique est à l’écoute du support et attend qu’il ne soit plus occupé pour pouvoir transmettre ses données.",
  ],
  explanation:
    "CSMA/CD écoute le média avant transmission, détecte les collisions et attend un délai aléatoire avant une nouvelle tentative.",
},
{
  id: 21,
  type: "single",
  category: "Trames réseau",
  prompt:
    "21. Quel champ de trame est créé par un nœud source et utilisé par un nœud de destination pour s’assurer qu’un signal de données transmis n’a pas été modifié par interférence, distorsion ou perte de signal ?",
  choices: [
    "Champ Séquence de contrôle de trame",
    "champ de processus de correction d’erreur",
    "Protocole UDP (User Datagram Protocol)",
    "Champ de contrôle de flux",
    "champ de vérification des erreurs de couche de transport",
  ],
  answers: ["Champ Séquence de contrôle de trame"],
  explanation:
    "Le champ FCS (Frame Check Sequence) permet de détecter les erreurs dans une trame Ethernet.",
},
{
  id: 22,
  type: "single",
  category: "Technologies sans fil",
  prompt:
    "22. Quelle technologie sans fil a des besoins en termes de consommation d’énergie et de débit des données qui la rendent populaire dans les applications domotiques ?",
  choices: [
    "Wi-Fi",
    "LoRaWAN",
    "5 G",
    "ZigBee",
  ],
  answers: ["ZigBee"],
  explanation:
    "ZigBee est conçu pour les appareils à faible consommation et faible débit, très utilisé dans la domotique.",
},
{
  id: 23,
  type: "single",
  category: "Câblage réseau",
  prompt:
    "23. Examinez l’illustration. Quel est le problème avec le raccordement affiché ?",
  choices: [
    "La longueur détorsadée de chaque fil est trop longue.",
    "Les câbles sont trop épais pour le connecteur utilisé.",
    "Le mauvais type de connecteur est utilisé.",
    "Le treillis de cuivre n’aurait pas dû être retiré.",
  ],
  answers: [
    "La longueur détorsadée de chaque fil est trop longue.",
  ],
  explanation:
    "Les paires torsadées doivent rester torsadées le plus près possible du connecteur afin de réduire les interférences.",
},

{
  id: 24,
  type: "multiple",
  category: "Conception WLAN",
  prompt:
    "24. Un administrateur réseau conçoit la structure d’un nouveau réseau sans fil. Quels points problématiques doivent être pris en compte lors de la conception d’un réseau sans fil ? (Choisissez trois réponses.)",
  choices: [
    "Câblage étendu",
    "Collision de paquet",
    "Options de mobilité",
    "Zone de couverture",
    "Perturbation",
    "Sécurité",
  ],
  answers: [
    "Zone de couverture",
    "Perturbation",
    "Sécurité",
  ],
  explanation:
    "Lors de la conception d’un réseau sans fil, il faut prendre en compte la portée du signal, les interférences et la sécurité du réseau.",
},

{
  id: 25,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "25. Examinez l’illustration. Une société utilise le bloc d’adresses de 128.107.0.0/16 pour son réseau. Quel masque de sous-réseau peut fournir un maximum de sous-réseaux de taille égale tout en fournissant suffisamment d’adresses d’hôte pour chaque sous-réseau dans l’illustration ?",
  choices: [
    "255.255.255.240",
    "255.255.255.224",
    "255.255.255.0",
    "255.255.255.192",
    "255.255.255.128",
  ],
  answers: [
    "255.255.255.128",
  ],
  explanation:
    "Le plus grand réseau doit supporter 100 hôtes. Un masque /25 (255.255.255.128) fournit 126 adresses hôtes utilisables, ce qui est suffisant tout en maximisant le nombre de sous-réseaux.",
},


{
  id: 26,
  type: "single",
  category: "VLSM",
  prompt:
    "26. Un administrateur réseau souhaite avoir le même masque de sous-réseau pour tous les réseaux d’un petit site. Le site a les réseaux et numéros de périphérique suivants : Téléphones IP – 22 adresses, PC – 20 adresses, Imprimantes – 2 adresses, Scanners – 2 adresses.L’administrateur réseau juge que 192.168.10.0/24 doit être le réseau utilisé sur ce site. Quel masque de sous-réseau permettrait d’utiliser de manière optimale les adresses disponibles pour les quatre sous-réseaux ?",
  choices: [
    "255.255.255.224",
    "255.255.255.252",
    "255.255.255.248",
    "255.255.255.192",
    "255.255.255.0",
    "255.255.255.240",
  ],
  answers: ["255.255.255.224"],
  explanation:
    "Le plus grand réseau nécessite 22 hôtes. Un masque /27 fournit 30 adresses utilisables et permet d’utiliser le même masque pour tous les sous-réseaux.",
},
  {
  id: 27,
  type: "matching",
  category: "Adressage IP",
  prompt:
    "27. Examinez l’illustration. Associez les réseaux aux adresses IP et aux préfixes capables de répondre aux exigences d’adressage d’hôte utilisable pour chaque réseau. (Les options ne doivent pas être toutes utilisées.)",
  pairs: [
    {
      term: "Réseau A",
      description: "192.168.0.0 /25",
    },
    {
      term: "Réseau B",
      description: "192.168.0.128 /26",
    },
    {
      term: "Réseau D",
      description: "192.168.0.224 /30",
    },
    {
      term: "Réseau C",
      description: "192.168.0.192 /27",
    },
  ],
  options: [
    "192.168.0.0 /25",
    "192.168.0.128 /26",
    "192.168.0.192 /27",
    "192.168.0.224 /30",
  ],
  explanation:
    "Chaque réseau reçoit un sous-réseau adapté au nombre d’hôtes nécessaires. Les plus grands réseaux utilisent des préfixes plus petits (/25), tandis que les liens point à point utilisent généralement un /30.",
},
 {
  id: 28,
  type: "multiple",
  category: "Couche liaison de donnees",
  prompt:
    "28. Cas 1 : Quelles sont les deux fonctions d'execution sur la sous-couche MAC de la couche de liaison de donnees OSI pour faciliter la communication Ethernet ? (Choisissez deux reponses.)",
  choices: [
    "applique la delimitation des champs de trames Ethernet pour synchroniser la communication entre les noeuds",
    "ajoute des informations de controle Ethernet aux donnees du protocole reseau",
    "Met en oeuvre la queue de bande avec la sequence de verification de trame pour la detection des erreurs",
    "Place les informations dans la trame qui indique le protocole de couche reseau encapsule pour la trame.",
    "gere la communication entre le logiciel de mise en reseau de la couche superieure et le materiel de carte reseau Ethernet",
  ],
  answers: [
    "applique la delimitation des champs de trames Ethernet pour synchroniser la communication entre les noeuds",
    "Met en oeuvre la queue de bande avec la sequence de verification de trame pour la detection des erreurs",
  ],
  explanation:
    "La sous-couche MAC gere l'acces au media, la structure des trames Ethernet et la detection des erreurs.",
},
{
  id: "28-2",
  type: "multiple",
  category: "Couche liaison de donnees",
  prompt:
    "28. Cas 2 : Quelles sont les deux fonctions d'execution sur la sous-couche MAC de la couche de liaison de donnees OSI pour faciliter la communication Ethernet ? (Choisissez deux reponses.)",
  choices: [
    "ajoute des informations de controle Ethernet aux donnees du protocole reseau",
    "met en oeuvre CSMA/CD sur un support semi-duplex partage herite",
    "gere la communication entre le logiciel de mise en reseau de la couche superieure et le materiel de carte reseau Ethernet",
    "integre des flux de couche 2 entre 10 Gigabit Ethernet sur fibre et 1 Gigabit Ethernet sur cuivre",
    "permet a IPv4 et IPv6 d'utiliser le meme support physique",
  ],
  answers: [
    "met en oeuvre CSMA/CD sur un support semi-duplex partage herite",
    "integre des flux de couche 2 entre 10 Gigabit Ethernet sur fibre et 1 Gigabit Ethernet sur cuivre",
  ],
  explanation:
    "La sous-couche MAC gere l'acces au media, notamment CSMA/CD sur les anciens liens semi-duplex, et l'integration Ethernet de couche 2.",
},
{
  id: "28-3",
  type: "multiple",
  category: "Couche liaison de donnees",
  prompt:
    "28. Cas 3 : Quelles sont les deux fonctions d'execution sur la sous-couche MAC de la couche de liaison de donnees OSI pour faciliter la communication Ethernet ? (Choisissez deux reponses.)",
  choices: [
    "place les informations dans l'Ethernettrame qui identifie quel protocole de couche reseau est encapsule par la trame",
    "ajoute des informations de controle Ethernet aux donnees de protocole reseau",
    "responsable de la structure interne de la trame Ethernet",
    "permet a IPv4 et IPv6 d'utiliser le meme support physique",
    "implemente une bande-annonce avec sequence de controle de trame pour la detection d'erreurs",
  ],
  answers: [
    "responsable de la structure interne de la trame Ethernet",
    "implemente une bande-annonce avec sequence de controle de trame pour la detection d'erreurs",
  ],
  explanation:
    "La sous-couche MAC definit la structure interne de la trame Ethernet et ajoute la sequence FCS utilisee pour detecter les erreurs.",
},
{
  id: "28-4",
  type: "multiple",
  category: "Couche liaison de donnees",
  prompt:
    "28. Cas 4 : Quelles sont les deux fonctions d'execution sur la sous-couche MAC de la couche de liaison de donnees OSI pour faciliter la communication Ethernet ? (Choisissez deux reponses.)",
  choices: [
    "integre les flux de couche 2 entre 10 Gigabit Ethernet sur fibre et 1 Gigabit Ethernet sur cuivre",
    "permet a IPv4 et IPv6 d'utiliser le meme support physique",
    "gere la communication entre le logiciel de mise en reseau de la couche superieure et le materiel de carte reseau Ethernet",
    "ajoute des informations de controle Ethernet aux donnees de protocole reseau",
    "implemente CSMA/CD sur les medias semi-duplex partages herites",
  ],
  answers: [
    "integre les flux de couche 2 entre 10 Gigabit Ethernet sur fibre et 1 Gigabit Ethernet sur cuivre",
    "implemente CSMA/CD sur les medias semi-duplex partages herites",
  ],
  explanation:
    "La sous-couche MAC gere l'acces au media, notamment CSMA/CD, et l'integration des technologies Ethernet de couche 2.",
},
{
  id: "28-5",
  type: "multiple",
  category: "Couche liaison de donnees",
  prompt:
    "28. Cas 5 : Quelles sont les deux fonctions d'execution sur la sous-couche MAC de la couche de liaison de donnees OSI pour faciliter la communication Ethernet ? (Choisissez deux reponses.)",
  choices: [
    "applique la delimitation des champs de trames Ethernet pour synchroniser la communication entre les noeuds",
    "ajoute des informations de controle Ethernet aux donnees du protocole reseau",
    "Place les informations dans la trame qui indique le protocole de couche reseau encapsule pour la trame.",
    "applique les adresses MAC source et destination a la trame Ethernet",
    "gere la communication entre le logiciel de mise en reseau de la couche superieure et le materiel de carte reseau Ethernet",
  ],
  answers: [
    "applique la delimitation des champs de trames Ethernet pour synchroniser la communication entre les noeuds",
    "applique les adresses MAC source et destination a la trame Ethernet",
  ],
  explanation:
    "La sous-couche MAC applique l'adressage MAC et la delimitation des trames pour permettre la communication Ethernet.",
},
{
  id: 29,
  type: "single",
  category: "Surveillance réseau",
  prompt:
    "29. Les utilisateurs se plaignent de délais allongés lors de l’authentification et de l’accès aux ressources réseau à certains moments de la semaine. Quel type d’information les ingénieurs réseau doivent-ils vérifier pour savoir si cette situation s’inscrit dans un comportement normal du réseau ?",
  choices: [
    "Les enregistrements et messages syslog",
    "Le résultat de la commande debug et les captures de paquets",
    "Les performances de référence du réseau",
    "Les fichiers de configuration réseau",
  ],
  answers: ["Les performances de référence du réseau"],
  explanation:
    "Les performances de référence permettent de comparer le comportement actuel du réseau avec son fonctionnement normal.",
},
{
  id: 30,
  type: "multiple",
  category: "Outils Windows",
  prompt:
    "30. Un groupe de PC Windows se trouvant sur un nouveau sous-réseau a été ajouté à un réseau Ethernet. Lors de tests de connectivité, un technicien découvre que ces ordinateurs peuvent accéder aux ressources du réseau local, mais pas à celles d’Internet. Quels sont les trois utilitaires et commandes Windows qui fourniront les informations nécessaires ? (Choisissez trois réponses.)",
  choices: [
    "telnet",
    "ipconfig",
    "tracert",
    "netsh interface ipv6 show neighbor",
    "ping",
    "arp -a",
    "nslookup",
  ],
  answers: [
    "ipconfig",
    "ping",
    "nslookup",
  ],
  explanation:
    "ipconfig affiche les paramètres IP, ping teste la connectivité et nslookup permet de vérifier la résolution DNS.",
},
{
  id: 31,
  type: "single",
  category: "Serveurs réseau",
  prompt:
    "31. Quel type de serveur s’appuie sur des types d’enregistrements tels que A, NS, AAAA et MX pour fournir des services ?",
  choices: [
    "DNS",
    "Web",
    "fichier",
    "les e-mails",
  ],
  answers: ["DNS"],
  explanation:
    "Les enregistrements A, AAAA, NS et MX sont des types d’enregistrements DNS utilisés pour la résolution de noms et les services réseau.",
},
{
  id: 32,
  type: "single",
  category: "Diagnostic réseau",
  prompt:
    "32. Un technicien réussit à envoyer une requête ping pour l’adresse IP du serveur d’une entreprise distante, mais pas pour l’adresse URL de ce même serveur web. Quelle commande doit-il exécuter pour diagnostiquer ce problème ?",
  choices: [
    "tracert",
    "nslookup",
    "ipconfig",
    "netstat",
  ],
 answers: ["nslookup"],
  explanation:
    "Si l’adresse IP fonctionne mais pas le nom de domaine, le problème vient probablement de la résolution DNS. La commande nslookup permet de vérifier cela.",
},
  {
  id: 33,
  type: "matching",
  category: "Commutation Ethernet",
  prompt:
    "33. Associez les caractéristiques aux méthodes de transmission correspondantes. (Les options ne doivent pas être toutes utilisées.)",
  pairs: [
    {
      term: "cut-through",
      description: "A une faible latence",
    },
    {
      term: "cut-through",
      description: "Peut transférer des trames incomplètes",
    },
    {
      term: "cut-through",
      description:
        "Démarre la transmission lorsque l'adresse de destination est reçue",
    },
    {
      term: "store-and-forward",
      description: "Stocke toujours la trame entière",
    },
    {
      term: "store-and-forward",
      description:
        "Vérifie le CRC avant d'effectuer la transmission",
    },
    {
      term: "store-and-forward",
      description:
        "Vérifie la longueur de la trame avant d'effectuer la transmission",
    },
  ],
  options: [
    "Stocke toujours la trame entière",
    "Vérifie le CRC avant d'effectuer la transmission",
    "Vérifie la longueur de la trame avant d'effectuer la transmission",
    "Ne transmet pas les diffusions",
    "A une faible latence",
    "Peut transférer des trames incomplètes",
    "Démarre la transmission lorsque l'adresse de destination est reçue",
  ],
  explanation:
    "La méthode cut-through transmet rapidement les trames sans attendre la réception complète, tandis que store-and-forward vérifie les erreurs avant la transmission.",
},
  {
  id: 34,
  type: "multiple",
  category: "Adressage IP et MAC",
  prompt:
    "34. Quelles propositions relatives aux adresses IP et MAC dans le cadre de la transmission des données si NAT n’est pas impliquée sont exactes ? (Choisissez deux réponses.)",
  choices: [
    "Chaque fois qu’une trame est encapsulée avec une nouvelle adresse MAC de destination, une nouvelle adresse IP de destination est nécessaire.",
    "Les adresses MAC de destination ne changent jamais dans une trame qui traverse sept routeurs.",
    "Un paquet qui a traversé quatre routeurs a modifié l’adresse IP de destination quatre fois.",
    "Les adresses IP de destination d’un en-tête de paquet restent les mêmes tout au long du chemin vers un hôte cible.",
    "Les adresses MAC source et de destination ont une signification locale et changent chaque fois qu’une trame passe d’un réseau local à un autre.",
  ],
  answers: [
    "Les adresses IP de destination d’un en-tête de paquet restent les mêmes tout au long du chemin vers un hôte cible.",
    "Les adresses MAC source et de destination ont une signification locale et changent chaque fois qu’une trame passe d’un réseau local à un autre.",
  ],
  explanation:
    "Les adresses IP restent identiques de bout en bout, tandis que les adresses MAC changent à chaque saut entre réseaux locaux.",
},
{
  id: 35,
  type: "matching",
  category: "Adresses réseau",
  prompt:
    "35. Associez les fonctionnalités aux catégories. (Les propositions ne doivent pas être toutes utilisées.)",
  pairs: [
    {
      term: "Adresse IP",
      description: "contenu dans l'en-tête de couche 3",
    },
    {
      term: "Adresse IP",
      description:
        "séparés en une partie réseau et un identifiant unique",
    },
    {
      term: "Adresse IP",
      description: "32 ou 128 bits",
    },
    {
      term: "Adresse MAC",
      description: "contenu dans l'en-tête de couche 2",
    },
    {
      term: "Adresse MAC",
      description: "séparés en OUI et un identifiant unique",
    },
    {
      term: "Adresse MAC",
      description: "48 bits",
    },
  ],
  options: [
    "contenu dans l'en-tête de couche 3",
    "contenu dans l'en-tête de couche 2",
    "séparés en OUI et un identifiant unique",
    "séparés en une partie réseau et un identifiant unique",
    "32 ou 128 bits",
    "48 bits",
    "64 bits",
  ],
  explanation:
    "Les adresses IP fonctionnent à la couche 3 et peuvent être IPv4 ou IPv6, tandis que les adresses MAC appartiennent à la couche 2 et utilisent généralement 48 bits.",
},
  {
  id: 36,
  type: "single",
  category: "Cloud Computing",
  prompt:
    "36. Quel avantage présente l’utilisation du cloud computing dans les réseaux ?",
  choices: [
    "Les utilisateurs finaux sont libres d’utiliser leurs propres outils pour accéder aux informations de l’entreprise et communiquer au sein de leur réseau.",
    "Les technologies sont intégrées à des appareils que l’on utilise tous les jours pour qu’ils puissent se connecter à d’autres terminaux, ce qui les rend plus intelligents ou automatisés.",
    "L’entreprise améliore les capacités de son réseau sans investissement supplémentaire dans une infrastructure, du personnel ou des logiciels.",
    "Un réseau domestique utilise le câblage électrique existant pour se connecter aux terminaux du réseau à partir d’une simple prise de courant, ce qui permet d’économiser sur les coûts d’installation de câbles de données.",
  ],
  answers: [
    "L’entreprise améliore les capacités de son réseau sans investissement supplémentaire dans une infrastructure, du personnel ou des logiciels.",
  ],
  explanation:
    "Le cloud computing permet d’étendre les ressources et services réseau sans devoir investir dans une infrastructure locale coûteuse.",
},
{
  id: 37,
  type: "multiple",
  category: "ARP",
  prompt:
    "37. Quelles sont les fonctions d’ARP ? (Choisissez deux réponses.)",
  choices: [
    "Lorsqu’un hôte encapsule un paquet dans une trame, il fait référence à la table des adresses MAC pour déterminer le mappage des adresses IP en adresses MAC.",
    "Si le périphérique qui reçoit une requête ARP dispose d’une adresse IPv4 de destination, il renvoie une réponse ARP.",
    "Si un hôte est prêt à envoyer un paquet à un périphérique de destination locale et qu’il dispose de l’adresse IP mais pas l’adresse MAC de la destination, il génère une diffusion ARP.",
    "Si aucun périphérique ne répond à la requête ARP, le noeud d’origine diffuse le paquet de données à tous les périphériques du segment de réseau.",
    "Une requête ARP est envoyée à tous les périphériques du réseau local Ethernet et contient l’adresse IP de l’hôte de destination et son adresse MAC de multidiffusion.",
  ],
  answers: [
    "Si le périphérique qui reçoit une requête ARP dispose d’une adresse IPv4 de destination, il renvoie une réponse ARP.",
    "Si un hôte est prêt à envoyer un paquet à un périphérique de destination locale et qu’il dispose de l’adresse IP mais pas l’adresse MAC de la destination, il génère une diffusion ARP.",
  ],
  explanation:
    "ARP est utilisé pour associer une adresse IPv4 à une adresse MAC sur un réseau local.",
},
{
  id: 38,
  type: "multiple",
  category: "Modèles réseau",
  prompt:
    "38. Quelles couches du modèle OSI équivalent à la couche application du modèle TCP/IP ? (Choisissez trois propositions.)",
  choices: [
    "réseau",
    "application",
    "transport",
    "session",
    "présentation",
    "liaison de données",
  ],
  answers: [
    "application",
    "session",
    "présentation",
  ],
  explanation:
    "La couche application du modèle TCP/IP regroupe les couches application, présentation et session du modèle OSI.",
},
{
  id: 39,
  type: "single",
  category: "Routage",
  prompt:
    "39. Reportez-vous à l’illustration. Si PC1 envoie un paquet à PC2 et que le routage a été configuré entre les deux routeurs, que fait R1 de l’en-tête de trame Ethernet intégré par PC1 ?",
  choices: [
    "Rien, puisque le routeur est associé à une route vers le réseau de destination",
    "Ouvrir l’en-tête et l’utiliser pour déterminer si les données sont à envoyer ou non à S0/0/0",
    "Supprimer l’en-tête Ethernet et configurer un nouvel en-tête de couche 2 avant de l’envoyer à S0/0/0",
    "Ouvrir l’en-tête et remplacer l’adresse MAC de destination par une nouvelle adresse",
  ],
  answers: [
    "Supprimer l’en-tête Ethernet et configurer un nouvel en-tête de couche 2 avant de l’envoyer à S0/0/0",
  ],
  explanation:
    "Un routeur retire l’en-tête de couche 2 reçu puis crée un nouvel en-tête adapté à l’interface de sortie.",
},
{
  id: 40,
  type: "single",
  category: "Applications réseau",
  prompt:
    "40. Quel service est fourni par Internet Messenger ?",
  choices: [
    "Traduit des noms de domaines (par exemple, cisco.com) en adresses IP",
    "Utilise le chiffrement pour fournir un accès distant sécurisé aux périphériques et serveurs réseau.",
    "Une application qui permet les discussions en ligne en temps réel entre les utilisateurs distants.",
    "Permet l’accès à distance aux périphériques et serveurs réseau.",
  ],
  answers: [
    "Une application qui permet les discussions en ligne en temps réel entre les utilisateurs distants.",
  ],
  explanation:
    "Internet Messenger permet la communication instantanée et les discussions en temps réel entre utilisateurs.",
},
{
  id: 41,
  type: "multiple",
  category: "Commandes Windows",
  prompt:
    "41. Quelles commandes peuvent être utilisées sur un hôte Windows pour afficher la table de routage ? (Choisissez deux réponses.)",
  choices: [
    "netstat -r",
    "show ip route",
    "route print",
    "tracert",
    "netstat -s",
  ],
  answers: [
    "netstat -r",
    "route print",
  ],
  explanation:
    "Sous Windows, les commandes netstat -r et route print affichent la table de routage locale.",
},
{
  id: 42,
  type: "matching",
  category: "Adressage IPv4",
  prompt:
    "42. Associez les descriptions aux adresses IP correspondantes. (Les options ne sont pas toutes utilisées.)",
  pairs: [
    {
      term: "Adresse de bouclage",
      description: "169.254.1.5",
    },
    {
      term: "Adresse expérimentale",
      description: "240.2.6.255",
    },
    {
      term: "À une adresse publique",
      description: "198.133.219.2",
    },
    {
      term: "Adresse link-local",
      description: "127.0.0.1",
    },
  ],
  options: [
    "198.133.219.2",
    "169.254.1.5",
    "127.0.0.1",
    "240.2.6.255",
  ],
  explanation:
    "127.0.0.1 est une adresse de bouclage, 169.254.x.x est une adresse link-local APIPA, 240.x.x.x est réservé à l’expérimentation et 198.133.219.2 est une adresse publique.",
},
  {
  id: 43,
  type: "single",
  category: "Couche transport",
  prompt:
    "43. Quel scénario décrit une fonction fournie par la couche transport ?",
  choices: [
    "Un employé d’une entreprise accède à un serveur Web situé sur un réseau d’entreprise. La couche transport formate l’écran afin que la page Web s’affiche correctement quel que soit le périphérique utilisé pour accéder au site Web.",
    "Un étudiant regarde un petit film sur le Web avec le son activé. Le film et le son sont codés dans l’en-tête de la couche transport.",
    "Un étudiant a deux fenêtres de navigateur Web ouvertes pour accéder à deux sites Web. La couche transport s’assure que la page Web appropriée est envoyée vers la fenêtre de navigateur appropriée.",
    "Un étudiant utilise un téléphone VoIP d’une salle de classe pour appeler chez lui. L’identifiant unique stocké dans le téléphone est une adresse de couche transport utilisée pour contacter un autre périphérique réseau sur le même réseau.",
  ],
  answers: [
    "Un étudiant a deux fenêtres de navigateur Web ouvertes pour accéder à deux sites Web. La couche transport s’assure que la page Web appropriée est envoyée vers la fenêtre de navigateur appropriée.",
  ],
  explanation:
    "La couche transport utilise les numéros de port pour différencier les différentes communications et applications.",
},
{
  id: 44,
  type: "single",
  category: "Supports réseau",
  prompt:
    "44. Que signifie le terme « atténuation » dans la communication de données ?",
  choices: [
    "temps pour qu’un signal atteigne sa destination",
    "fuite de signaux d’une paire de câbles à une autre",
    "renforcement d’un signal par un dispositif de mise en réseau",
    "perte de puissance du signal à mesure que la distance augmente",
  ],
  answers: [
    "perte de puissance du signal à mesure que la distance augmente",
  ],
  explanation:
    "L’atténuation correspond à l’affaiblissement du signal lorsqu’il parcourt une certaine distance.",
},
{
  id: 45,
  type: "single",
  category: "Passerelle par défaut",
  prompt:
    "45. Que se passe-t-il si l’adresse de la passerelle par défaut n’est pas correctement configurée sur un hôte ?",
  choices: [
    "Le commutateur ne transfère pas les paquets initiés par l’hôte.",
    "L’hôte ne peut pas communiquer avec les autres hôtes du réseau local.",
    "L’hôte doit utiliser le protocole ARP pour déterminer l’adresse de la passerelle par défaut.",
    "Une requête ping exécutée par l’hôte vers 127.0.0.1 échoue.",
    "L’hôte ne peut pas communiquer avec les hôtes situés sur d’autres réseaux.",
  ],
  answers: [
    "L’hôte ne peut pas communiquer avec les hôtes situés sur d’autres réseaux.",
  ],
  explanation:
    "La passerelle par défaut est nécessaire pour envoyer des paquets vers des réseaux distants.",
},
{
  id: 46,
  type: "single",
  category: "Malwares",
  prompt:
    "46. Les utilisateurs signalent que l’accès réseau est lent. Après avoir questionné les employés, l’administrateur réseau a découvert que l’un d’eux a téléchargé un programme de numérisation tiers pour l’imprimante. Quel type de malware peut ralentir les performances du réseau ?",
  choices: [
    "phishing",
    "ver",
    "virus",
    "courrier indésirable",
  ],
  answers: ["ver"],
  explanation:
    "Un ver se propage automatiquement sur le réseau et peut consommer beaucoup de bande passante.",
},
{
  id: 47,
  type: "single",
  category: "IPv6",
  prompt:
    "47. Quelle est la conséquence de la configuration d’un routeur avec la commande de configuration globale ipv6 unicast-routing ?",
  choices: [
    "Les interfaces de routeur activées IPv6 commencent à envoyer des messages d’annonces de routeur ICMPv6.",
    "Il crée statiquement une adresse monodiffusion globale sur ce routeur.​",
    "Toutes les interfaces du routeur seront automatiquement activées.",
    "Chaque interface de routeur génère une adresse link-local IPv6.",
  ],
  answers: [
    "Les interfaces de routeur activées IPv6 commencent à envoyer des messages d’annonces de routeur ICMPv6.",
  ],
  explanation:
    "La commande ipv6 unicast-routing active le routage IPv6 et permet l’envoi des Router Advertisements ICMPv6.",
},
{
  id: 48,
  type: "single",
  category: "Encapsulation",
  prompt:
    "48. Reportez-vous à l’illustration. Hôte B sur le sous-réseau Enseignants transmet un paquet à l’hôte D sur le sous-réseau Students. Quelles adresses de couche 2 et de couche 3 sont contenues dans les PDU qui sont transmises de l’hôte B au routeur ?",
  choices: [
    "Adresse de destination de la couche 2 = 00-00-0c-94-36-ab Adresse source de la couche 2 = 00-00-0c-94-36-bb Adresse de destination de la couche 3 = 172.16.20.200 Adresse source de la couche 3 = 172.16.10.200",
    "Adresse de destination de la couche 2 = 00-00-0c-94-36-cd Adresse source de la couche 2 = 00-00-0c-94-36-bb Adresse de destination de la couche 3 = 172.16.20.99 Adresse source de la couche 3 = 172.16.10.200",
    "Adresse de destination de la couche 2 = 00-00-0c-94-36-dd Adresse source de la couche 2 = 00-00-0c-94-36-bb Adresse de destination de la couche 3 = 172.16.20.200 Adresse source de la couche 3 = 172.16.10.200",
    "Adresse de destination de la couche 2 = 00-00-0c-94-36-ab Adresse source de la couche 2 = 00-00-0c-94-36-bb Adresse de destination de la couche 3 = 172.16.20.200 Adresse source de la couche 3 = 172.16.100.200",
  ],
  answers: [
    "Adresse de destination de la couche 2 = 00-00-0c-94-36-ab Adresse source de la couche 2 = 00-00-0c-94-36-bb Adresse de destination de la couche 3 = 172.16.20.200 Adresse source de la couche 3 = 172.16.10.200",
  ],
  explanation:
    "Les adresses IP restent de bout en bout, tandis que les adresses MAC correspondent au prochain saut.",
},
{
  id: 49,
  type: "multiple",
  category: "Caractéristiques réseau",
  prompt:
    "49. Un employé d’une grande entreprise se connecte à distance à l’entreprise en utilisant le nom d’utilisateur et le mot de passe appropriés. L’employé assiste à une vidéoconférence importante avec un client concernant une grande vente. Il est important que la qualité vidéo soit excellente pendant la réunion. L’employé ne sait pas qu’après une connexion efficace, la connexion au fournisseur d’accès Internet (FAI) de l’entreprise a échoué. La connexion secondaire, cependant, s’est activée en quelques secondes. La perturbation n’a pas été remarquée par l’employé ou les autres employés. Quelles sont les trois caractéristiques du réseau décrites dans ce scénario ? (Choisissez trois réponses.)",
  choices: [
    "Intégrité",
    "Qualité de service",
    "Réseau sur courant électrique",
    "tolérance aux pannes",
    "évolutivité",
    "Sécurité",
  ],
  answers: [
    "Qualité de service",
    "tolérance aux pannes",
    "Sécurité",
  ],
  explanation:
    "Le scénario montre une connexion sécurisée, une continuité de service grâce à la redondance et une bonne qualité vidéo.",
},

{
  id: 50,
  type: "single",
  category: "AAA",
  prompt:
    "50.Une société possède un serveur de fichiers qui partage un dossier appelé Public. La stratégie de sécurité du réseau stipule que toute personne qui se connecte au serveur se voit attribuer des droits en lecture seule au dossier Public, tandis que les droits de modification ne sont attribués qu’au groupe d’administrateurs réseau. Quel composant est repris dans la structure de services réseau AAA ?",
  choices: [
    "autorisation",
    "automatisation",
    "authentification",
    "traçabilité",
  ],
  answers: [
    "autorisation",
  ],
  explanation:
    "L’autorisation définit les droits accordés à un utilisateur authentifié, par exemple lecture seule ou modification.",
},

{
  id: 51,
  type: "single",
  category: "Cisco IOS",
  prompt:
    "51. Examinez l’illustration. Un administrateur tente de configurer le commutateur mais reçoit le message d’erreur affiché sur l’illustration. Quel est le problème ?",
  choices: [
    "L’administrateur doit d’abord passer en mode d’exécution privilégié avant d’exécuter la commande.",
    "L’administrateur doit se connecter via le port de console pour accéder au mode de configuration globale.",
    "L’administrateur est déjà en mode de configuration globale.",
    "La commande complète, configure terminal , doit être utilisée.",
  ],
  answers: [
    "L’administrateur doit d’abord passer en mode d’exécution privilégié avant d’exécuter la commande.",
  ],
  explanation:
    "La commande configure terminal nécessite d’être en mode EXEC privilégié.",
},
{
  id: 52,
  type: "multiple",
  category: "Protocoles réseau",
  prompt:
    "52. Les protocoles utilisés dans la communication réseau pour transmettre des messages sur un réseau définissent trois conditions de transmission précises. Lesquelles ? (Choisissez trois propositions.)",
  choices: [
    "Le codage des messages",
    "L’installation du périphérique terminal",
    "Les caractéristiques des connecteurs",
    "Les options de remise du message",
    "La taille du message",
    "La sélection des supports",
  ],
  answers: [
    "Le codage des messages",
    "Les options de remise du message",
    "La taille du message",
  ],
  explanation:
    "Les protocoles définissent comment les messages sont codés, transmis et dimensionnés.",
},
{
  id: 53,
  type: "multiple",
  category: "Câblage UTP",
  prompt:
    "53. Quelles sont les deux causes courantes de dégradation du signal lors de l’utilisation du câblage UTP ? (Choisissez deux réponses.)",
  choices: [
    "résiliation abusive",
    "blindage de mauvaise qualité dans le câble",
    "installation de câbles dans le conduit",
    "Câble ou connecteurs de mauvaise qualité",
    "perte de lumière sur de longues distances",
  ],
  answers: [
    "résiliation abusive",
    "Câble ou connecteurs de mauvaise qualité",
  ],
  explanation:
    "Une mauvaise terminaison ou des câbles/connecteurs défectueux dégradent la qualité du signal UTP.",
},
{
  id: 54,
  type: "multiple",
  category: "TCP/IP",
  prompt:
    "54. Quels sont les deux protocoles qui interviennent sur la couche supérieure de la pile de protocoles TCP/IP ? (Choisissez deux réponses.)",
  choices: [
    "POP",
    "DNS",
    "TCP",
    "Ethernet",
    "UDP",
    "IP",
  ],
  answers: [
    "POP",
    "DNS",
  ],
  explanation:
    "POP et DNS sont des protocoles de couche application dans le modèle TCP/IP.",
},
{
  id: 55,
  type: "multiple",
  category: "IP",
  prompt:
    "55. Quelles sont deux caractéristiques du protocole IP ? (Choisissez deux propositions.)",
  choices: [
    "Fonctionne indépendamment des supports réseau.",
    "Ne nécessite pas de connexion dédiée de bout en bout.",
    "Reconstitue dans le bon ordre les segments désordonnés côté destination.",
    "Retransmet les paquets en cas d’erreur.",
    "Garantit la remise des paquets.",
  ],
  answers: [
    "Fonctionne indépendamment des supports réseau.",
    "Ne nécessite pas de connexion dédiée de bout en bout.",
  ],
  explanation:
    "IP est un protocole sans connexion qui fonctionne sur différents types de médias.",
},
{
  id: 56,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "56. Quel sous-réseau comprend l’adresse 192.168.1.96 en tant qu’adresse d’hôte utilisable ?",
  choices: [
    "192.168.1.64/26",
    "192.168.1.64/29",
    "192.168.1.32/27",
    "192.168.1.32/28",
  ],
  answers: ["192.168.1.64/26"],
  explanation:
    "Le sous-réseau 192.168.1.64/26 couvre les adresses de 192.168.1.65 à 192.168.1.126.",
},
{
  id: 57,
  type: "multiple",
  category: "Analyse réseau",
  prompt:
    "57. Parmi les propositions suivantes, deux expliquent comment évaluer les modèles de flux de trafic et les types de trafic réseau à l’aide d’un analyseur de protocole. Lesquelles ? (Choisissez deux propositions.)",
  choices: [
    "Capturer uniquement le trafic WAN puisque le trafic web contribue le plus à la quantité de trafic sur un réseau",
    "Capturer uniquement le trafic des zones du réseau qui reçoivent la plus grande quantité de trafic, comme le data center",
    "Capturer le trafic pendant les périodes de pointe pour obtenir une représentation juste des différents types de trafic",
    "Capturer le trafic les weekends lorsque les employés n’utilisent pas le réseau",
    "Capturer le trafic sur plusieurs segments du réseau",
  ],
  answers: [
    "Capturer le trafic pendant les périodes de pointe pour obtenir une représentation juste des différents types de trafic",
    "Capturer le trafic sur plusieurs segments du réseau",
  ],
  explanation:
    "L’analyse du trafic doit être représentative des périodes d’utilisation et des différentes zones du réseau.",
},

{
  id: 58,
  type: "multiple",
  category: "Connectivité réseau",
  prompt:
    "58. Examinez l’illustration. D’après le résultat de la commande, quelles affirmations sur la connectivité réseau sont correctes ? (Choisissez deux propositions.)",
  choices: [
    "Il existe 4 sauts entre ce périphérique et le périphérique situé à l’adresse 192.168.100.1.",
    "La durée moyenne de transmission entre les deux hôtes est de 2 millisecondes.",
    "La connectivité entre ces deux hôtes permet les vidéoconférences.",
    "Une connectivité est établie entre ce périphérique et le périphérique situé à l’adresse 192.168.100.1.",
    "Aucune passerelle par défaut n’est configurée sur cet hôte.",
  ],
  answers: [
    "Il existe 4 sauts entre ce périphérique et le périphérique situé à l’adresse 192.168.100.1.",
    "Une connectivité est établie entre ce périphérique et le périphérique situé à l’adresse 192.168.100.1.",
  ],
  explanation:
    "Le résultat montre une connectivité fonctionnelle vers 192.168.100.1 et indique 4 sauts jusqu’à cette destination.",
},

{
  id: 59,
  type: "single",
  category: "IPv6",
  prompt:
    "59. Quel serait l’ID d’interface d’une interface compatible IPv6 avec une adresse MAC de 1C-6F-65-C2-BD-F8 lorsque l’ID d’interface est généré à l’aide du processus EUI-64 ?",
  choices: [
    "1E6F:65FF:FEC2:BDF8",
    "0C6F:65FF:FEC2:BDF8",
    "C16F:65FF:FEC2:BDF8",
    "106F:65FF:FEC2:BDF8",
  ],
  answers: [
    "1E6F:65FF:FEC2:BDF8",
  ],
  explanation:
    "Le processus EUI-64 insère FFFE au milieu de l’adresse MAC et inverse le 7e bit.",
},
{
  id: 60,
  type: "single",
  category: "IPv6 Multicast",
  prompt:
    "60. Un périphérique IPv6 envoie un paquet de données avec l’adresse de destination FF02::2. Quelle est la cible de ce paquet ?",
  choices: [
    "Tous les périphériques IPv6 sur le réseau",
    "Tous les périphériques IPv6 sur la liaison locale",
    "Tous les serveurs DHCP IPv6",
    "Tous les routeurs IPv6 configurés sur la liaison locale",
  ],
  answers: [
    "Tous les routeurs IPv6 configurés sur la liaison locale",
  ],
  explanation:
    "FF02::2 est l’adresse multicast IPv6 réservée à tous les routeurs sur le lien local.",
},
{
  id: 61,
  type: "single",
  category: "SLAAC",
  prompt:
    "61. Un client utilise la méthode SLAAC pour obtenir une adresse IPv6 pour son interface. Une fois qu’une adresse a été générée et appliquée à l’interface, que doit faire le client avant de pouvoir commencer à utiliser cette adresse IPv6 ?",
  choices: [
    "Il doit envoyer un message de sollicitation de voisin ICMPv6 pour s’assurer que l’adresse n’est pas déjà utilisée sur le réseau.",
    "Il doit envoyer un message DHCPv6 REQUEST au serveur DHCPv6 pour demander l’autorisation d’utiliser cette adresse.",
    "Il doit envoyer un message de sollicitation de routeur ICMPv6 pour déterminer la passerelle par défaut à utiliser.",
    "Il doit envoyer un message DHCPv6 INFORMATION-REQUEST pour obtenir l’adresse du serveur de noms de domaine (DNS).",
  ],
  answers: [
    "Il doit envoyer un message de sollicitation de voisin ICMPv6 pour s’assurer que l’adresse n’est pas déjà utilisée sur le réseau.",
  ],
  explanation:
    "Le client effectue une détection d’adresse dupliquée (DAD) avant d’utiliser l’adresse IPv6.",
},
{
  id: 62,
  type: "single",
  category: "Cybersécurité",
  prompt:
    "62. Un employé mécontent utilise des outils de réseau sans fil gratuits pour déterminer des informations sur les réseaux sans fil de l’entreprise. Cette personne entend utiliser ces informations pour pirater le réseau sans fil. De quel type d’attaque s’agit-il?",
  choices: [
    "accès",
    "cheval de Troie",
    "Reconnaissance",
    "DoS",
  ],
  answers: ["Reconnaissance"],
  explanation:
    "Une attaque de reconnaissance collecte des informations sur le réseau avant une intrusion.",
},
{
  id: 63,
  type: "single",
  category: "Cisco IOS",
  prompt:
    "63. Quelles informations la commande show startup-config affiche-t-elle ?",
  choices: [
    "Le programme bootstrap de la mémoire morte",
    "L’image IOS copiée dans la mémoire vive",
    "Le contenu du fichier de configuration en cours dans la mémoire vive",
    "Le contenu du fichier de configuration enregistré dans la mémoire vive non volatile",
  ],
  answers: [
    "Le contenu du fichier de configuration enregistré dans la mémoire vive non volatile",
  ],
  explanation:
    "show startup-config affiche la configuration sauvegardée dans la NVRAM.",
},
{
  id: 64,
  type: "multiple",
  category: "VLSM",
  prompt:
    "64. Examinez l’illustration. Quelles deux adresses réseau peuvent être attribuées au réseau accueillant 10 hôtes ? Dans votre réponse, vous devez gaspiller le moins d’adresses possible, ne pas réutiliser des adresses déjà attribuées et rester dans la plage d’adresses 10.18.10.0/24. (Choisissez deux propositions.)",
  choices: [
    "10.18.10.224/28",
    "10.18.10.224/27",
    "10.18.10.208/28",
    "10.18.10.200/28",
    "10.18.10.240/27",
    "10.18.10.200/27",
  ],
  answers: [
    "10.18.10.208/28",
    "10.18.10.224/28",
  ],
  explanation:
    "Un sous-réseau /28 fournit 14 hôtes utilisables, suffisant pour 10 hôtes avec peu de gaspillage.",
},
{
  id: 65,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "65. Un administrateur réseau souhaite avoir le même masque de sous-réseau pour trois sous-réseaux sur un petit site.Le site a les réseaux et numéros de périphérique suivants : Sous-réseau A : téléphones IP – 10 adressess, Sous-réseau B : PC – 8 adresses, Sous-réseau C: Imprimantes – 2 adresses . Quel masque de sous-réseau faudrait-il utiliser pour ces trois sous-réseaux ?",
  choices: [
    "255.255.255.248",
    "255.255.255.252",
    "255.255.255.240",
    "255.255.255.0",
  ],
  answers: [
    "255.255.255.240",
  ],
  explanation:
    "Le masque /28 fournit 14 adresses utilisables, suffisant pour le plus grand sous-réseau nécessitant 10 hôtes.",
},
{
  id: 66,
  type: "multiple",
  category: "Câblage réseau",
  prompt:
    "66. Quelles sont les trois normes couramment suivies pour la construction et l’installation de câblage ? (Choisissez trois réponses.)",
  choices: [
    "brochage",
    "longueur des câbles",
    "couleur du connecteur",
    "types de connecteurs",
    "coût par mètre (pied)",
    "résistance à la traction de l’isolant en plastique",
  ],
  answers: [
    "brochage",
    "longueur des câbles",
    "types de connecteurs",
  ],
  explanation:
    "Les normes de câblage définissent notamment les brochages, les longueurs maximales et les connecteurs utilisés.",
},
{
  id: 67,
  type: "single",
  category: "Câblage Ethernet",
  prompt:
    "67. Quel connecteur est utilisé avec le câblage à paires torsadées dans un réseau local Ethernet ?",
  choices: [
  {
    value: "Connecteur BNC",
    image: "/connectors/bnc.png",
    alt: "Connecteur BNC",
  },
  {
    value: "Connecteur fibre LC",
    image: "/connectors/fiber-lc.png",
    alt: "Connecteur fibre LC",
  },
  {
    value: "RJ-11",
    image: "/connectors/rj11.png",
    alt: "Connecteur RJ-11",
  },
  {
    value: "Connecteur fibre SC",
    image: "/connectors/fiber-sc.png",
    alt: "Connecteur fibre SC",
  },
  {
    value: "RJ-45",
    image: "/connectors/rj45.png",
    alt: "Connecteur RJ-45",
  },
],
answers: [
  "RJ-45",
],
  explanation:
    "Les réseaux Ethernet sur câble à paires torsadées utilisent généralement un connecteur RJ-45.",
},
{
  id: 68,
  type: "single",
  category: "Câblage UTP",
  prompt:
    "68. Quelle technique utilise-t-on avec un câble à paires torsadées non blindées pour isoler les signaux des interférences issues d’une diaphonie ?",
  choices: [
    "Envelopper les paires de fils d’un blindage métallique",
    "Placer le câble à l’intérieur d’une gaine plastique souple",
    "Enrouler les brins en hélice pour former des paires torsadées",
    "Insérer des connecteurs reliés à la terre sur les extrémités du câble",
  ],
  answers: [
    "Enrouler les brins en hélice pour former des paires torsadées",
  ],
  explanation:
    "Le torsadage des fils réduit les interférences électromagnétiques et la diaphonie.",
},
{
  id: 69,
  type: "multiple",
  category: "Interférences",
  prompt:
    "69.  Un administrateur réseau remarque qu’un câblage Ethernet nouvellement installé transporte des signaux de données déformés et altérés. Le nouveau câblage a été installé dans le plafond près des éclairages fluorescents et de l’équipement électrique. Quels facteurs peuvent interférer avec le câblage en cuivre et provoquer une distorsion des signaux et une corruption des données ? (Choisissez deux réponses.)",
  choices: [
    "EMI",
    "Interférences",
    "RFI",
    "Longueur étendue du câblage",
    "Atténuation du signal",
  ],
  answers: [
    "EMI",
    "RFI",
  ],
  explanation:
    "Les interférences électromagnétiques et radiofréquences peuvent perturber les signaux dans les câbles cuivre.",
},
{
  id: 70,
  type: "single",
  category: "DNS",
  prompt: "70. Quel service est fourni par DNS ?",
  choices: [
    "permet de transférer des données entre un client et un serveur.",
    "Utilise le cryptage pour sécuriser l’échange de texte, d’images graphiques, de sons et de vidéos sur le Web.",
    "Traduit des noms de domaines (par exemple, cisco.com) en adresses IP",
    "Ensemble de règles permettant d’échanger du texte, des graphiques, des sons, des vidéos et autres fichiers multimédia sur le web.",
  ],
  answers: [
    "Traduit des noms de domaines (par exemple, cisco.com) en adresses IP",
  ],
  explanation:
    "DNS convertit les noms de domaine en adresses IP.",
},
{
  id: 71,
  type: "single",
  category: "ARP",
  prompt:
    "71. Quels hôtes de réseau recevront la requête ARP envoyée par l’hôte A ?",
  choices: [
    "Uniquement les hôtes A, B et C",
    "Uniquement les hôtes B et C",
    "Uniquement les hôtes B, C et le routeur R1",
    "Le routeur R1 uniquement",
    "L’hôte D uniquement",
    "Uniquement les hôtes A, B, C et D",
  ],
  answers: [
    "Uniquement les hôtes B, C et le routeur R1",
  ],
  explanation:
    "Une requête ARP est une diffusion limitée au réseau local.",
},
{
  id: 72,
  type: "multiple",
  category: "Couche réseau",
  prompt:
    "72. Quelles sont les fonctions fournies par la couche réseau ? (Choisissez deux réponses.)",
  choices: [
    "Fournir des connexions de bout en bout dédiées",
    "Diriger les paquets de données vers les hôtes de destination sur d’autres réseaux",
    "Placer des données sur le support réseau",
    "Fournir des périphériques finaux dotés d’un identificateur de réseau unique",
    "Transport de données entre des processus s’exécutant sur les hôtes source et de destination",
  ],
  answers: [
    "Diriger les paquets de données vers les hôtes de destination sur d’autres réseaux",
    "Fournir des périphériques finaux dotés d’un identificateur de réseau unique",
  ],
  explanation:
    "La couche réseau assure l’adressage logique et le routage.",
},
{
  id: 73,
  type: "multiple",
  category: "IPv4 et IPv6",
  prompt:
    "73. Quelles propositions sont correctes dans le cadre de la comparaison des en-têtes de paquet IPv4 et IPv6 ? (Choisissez deux réponses.)",
  choices: [
    "Le champ Durée de vie d’IPv4 a été remplacé par le champ Limite de nombre de sauts dans IPv6.",
    "Le nom du champ Somme de contrôle d’en-tête d’IPv4 est conservé dans IPv6.",
    "Le champ Version d’IPv4 n’est pas conservé dans IPv6.",
    "Le champ Adresse de destination est une nouveauté d’IPv6.",
    "Le nom du champ Adresse source d’IPv4 est conservé dans IPv6.",
  ],
  answers: [
    "Le champ Durée de vie d’IPv4 a été remplacé par le champ Limite de nombre de sauts dans IPv6.",
    "Le nom du champ Adresse source d’IPv4 est conservé dans IPv6.",
  ],
  explanation:
    "IPv6 conserve plusieurs champs IPv4 mais simplifie l’en-tête.",
},
{
  id: 74,
  type: "single",
  category: "Malwares",
  prompt: "74. Quelle caractéristique décrit un virus ?",
  choices: [
    "logiciel sur un routeur qui filtre le trafic en fonction des adresses IP ou des applications",
    "un protocole de tunnel qui fournit aux utilisateurs distants un accès sécurisé au réseau d’une organisation",
    "un périphérique réseau qui filtre l’accès et le trafic entrant dans un réseau",
    "logiciel qui identifie les menaces qui se propagent rapidement",
  ],
  answers: [
    "logiciel qui identifie les menaces qui se propagent rapidement",
  ],
  explanation:
    "Un virus est un logiciel malveillant capable de se propager et d’infecter des systèmes.",
},
{
  id: 75,
  type: "single",
  category: "QoS",
  prompt:
    "75.Trois employés de banque utilisent le réseau d’entreprise. Le premier employé utilise un navigateur Web pour afficher une page Web de la société afin de lire des annonces. Le deuxième employé accède à la base de données d’entreprise pour effectuer des transactions financières. Le troisième employé participe à une importante conférence audio en direct avec d’autres responsables de l’entreprise basés dans les filiales. Si la qualité de service est implémentée sur ce réseau, quelles seront les priorités, des plus importantes au moins importantes, des différents types de données ?",
  choices: [
    "conférence audio, transactions financières, page Web",
    "transactions financières, page Web, conférence audio",
    "conférence audio, page Web, transactions financières",
    "transactions financières, conférence audio, page Web",
  ],
  answers: [
    "conférence audio, transactions financières, page Web",
  ],
  explanation:
    "Les applications temps réel comme la voix nécessitent la priorité la plus élevée.",
},
{
  id: 76,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "76. Le nouveau réseau local doit prendre en charge 200 périphériques connectés. Quel est le plus petit masque réseau que l’administrateur réseau peut utiliser ?",
  choices: [
    "255.255.255.192",
    "255.255.255.0",
    "255.255.255.224",
    "255.255.255.240",
  ],
  answers: [
    "255.255.255.0",
  ],
  explanation:
    "Un masque /24 fournit 254 adresses utilisables, suffisant pour 200 hôtes.",
},
{
  id: 77,
  type: "single",
  category: "Liaison de données",
  prompt:
    "77. Qu’est-ce qu’une fonction de la couche de liaison de données ?",
  choices: [
    "fournit des données entre deux applications",
    "fournit une livraison de bout en bout de données entre les hôtes",
    "prévoit l’échange de trames sur un média local commun",
    "fournit la mise en forme des données",
  ],
  answers: [
    "prévoit l’échange de trames sur un média local commun",
  ],
  explanation:
    "La couche liaison de données gère les trames et l’accès au média local.",
},
{
  id: 78,
  type: "single",
  category: "ARP",
  prompt:
    "78. Un hôte tente d’envoyer un paquet à un périphérique sur un segment du réseau local distant, mais il n’y a actuellement aucun mappage dans son cache ARP. Comment le périphérique obtient-il une adresse MAC de destination ?",
  choices: [
    "Il envoie la trame avec une adresse MAC de diffusion.",
    "Il envoie une requête au serveur DNS pour l’adresse MAC de destination.",
    "Il envoie une requête ARP pour l’adresse MAC de la passerelle par défaut.",
    "Il envoie la trame et utilise sa propre adresse MAC comme destination.",
    "Il envoie une requête ARP pour l’adresse MAC du périphérique de destination.",
  ],
  answers: [
    "Il envoie une requête ARP pour l’adresse MAC de la passerelle par défaut.",
  ],
  explanation:
    "Pour joindre un réseau distant, l’hôte utilise l’adresse MAC de la passerelle par défaut.",
},
{
  id: 79,
  type: "single",
  category: "Commutation",
  prompt:
    "79. Quelle méthode de commutation supprime les trames qui ne passent pas avec succès le contrôle FCS ?",
  choices: [
    "commutation « cut-through »",
    "commutation sans frontières",
    "mise en mémoire tampon des ports d’entrée",
    "commutation par « stockage et retransmission »",
  ],
  answers: [
    "commutation par « stockage et retransmission »",
  ],
  explanation:
    "La méthode store-and-forward vérifie le FCS avant de transmettre une trame.",
},
{
  id: 80,
  type: "matching",
  category: "Modèle OSI",
  prompt:
    "80. Faites correspondre le champ d’en-tête avec la couche appropriée du modèle OSI. (Toutes les options ne doivent pas être utilisées.)",
  pairs: [
    {
      term: "Couche 2",
      description: "En-tête 802.2",
    },
    {
      term: "Couche 2",
      description: "Séquence de contrôle de trame (FCS)",
    },
    {
      term: "Couche 2",
      description: "Adresse MAC de destination",
    },
    {
      term: "Couche 3",
      description: "TTL",
    },
    {
      term: "Couche 3",
      description: "Adresse IP source",
    },
    {
      term: "Couche 4",
      description: "Numéro d’accusé de réception",
    },
    {
      term: "Couche 4",
      description: "Numéro du port de destination",
    },
  ],
  options: [
    "Adresse IP source",
    "Numéro du port de destination",
    "Options de destination",
    "Séquence de contrôle de trame (FCS)",
    "En-tête 802.2",
    "TTL",
    "Numéro d’accusé de réception",
    "Adresse MAC de destination",
  ],
  explanation:
    "Les champs MAC et FCS appartiennent à la couche 2, les adresses IP et TTL à la couche 3, et les ports TCP/UDP à la couche 4.",
},
{
  id: 81,
  type: "single",
  category: "Messagerie",
  prompt:
    "81. Quel est l’avantage pour les petites entreprises d’adopter IMAP au lieu de POP ?",
  choices: [
    "IMAP envoie et récupère les e-mails, tandis que POP récupère uniquement les e-mails.",
    "Les messages sont stockés sur les serveurs de messagerie jusqu’à ce qu’ils soient manuellement supprimés sur le client de messagerie.",
    "Lorsque l’utilisateur se connecte à un serveur POP, des copies des messages sont conservées dans le serveur de messagerie pendant une courte période, mais IMAP les conserve pendant une longue période.",
    "POP permet uniquement au client de stocker les messages de façon centralisée, tandis qu’IMAP permet un stockage distribué.",
  ],
  answers: [
    "Les messages sont stockés sur les serveurs de messagerie jusqu’à ce qu’ils soient manuellement supprimés sur le client de messagerie.",
  ],
  explanation:
    "IMAP conserve les messages sur le serveur et permet la synchronisation entre plusieurs appareils.",
},
{
  id: 82,
  type: "matching",
  category: "Réseaux peer-to-peer",
  prompt:
    "82. Associez les affirmations suivantes aux modèles de réseau correspondants. (Les options ne sont pas toutes utilisées.)",
  pairs: [
    {
      term: "réseau peer to peer",
      description: "Aucun serveur dédié n'est requis",
    },
    {
      term: "réseau peer to peer",
      description:
        "Les rôles de client et de serveur sont définis en fonction de chaque requête",
    },
    {
      term: "Application peer-to-peer",
      description: "Nécessite une interface utilisateur spécifique",
    },
    {
      term: "Application peer-to-peer",
      description: "Un service en tâche de fond est requis",
    },
  ],
  options: [
    "Nécessite une interface utilisateur spécifique",
    "Aucun serveur dédié n'est requis",
    "Un service en tâche de fond est requis",
    "Les rôles de client et de serveur sont définis en fonction de chaque requête",
    "Les périphériques ne peuvent avoir qu'un rôle à la fois",
  ],
  explanation:
    "Les réseaux peer-to-peer ne nécessitent pas de serveur dédié, tandis que les applications P2P utilisent souvent des services en arrière-plan.",
},
{
  id: 83,
  type: "single",
  category: "TCP/IP",
  prompt:
    "83.Examinez l’illustration. Si Hôte1 doit transférer un fichier au serveur, quelles couches du modèle TCP/IP faut-il utiliser ?",
  choices: [
    "Uniquement les couches application, Internet et accès réseau",
    "Uniquement les couches application, transport, réseau, liaison de données et physiques",
    "Uniquement les couches d’accès réseau",
    "Couches application, transport, Internet et accès réseau.",
    "Uniquement les couches application et Internet",
    "Couches application, session, transport, réseau, liaison de données et physiques",
  ],
  answers: [
    "Couches application, transport, Internet et accès réseau.",
  ],
  explanation:
    "Le modèle TCP/IP comporte quatre couches : application, transport, Internet et accès réseau.",
},
{
  id: 84,
  type: "single",
  category: "Dépannage réseau",
  prompt:
    "84. Un utilisateur se plaint qu’une page Web externe prend plus de temps que la normale pour se charger. La page Web finit par se charger sur la machine utilisateur. Quel outil le technicien doit-il utiliser avec les privilèges d’administrateur pour localiser le problème dans le réseau ?",
  choices: [
    "nslookup",
    "ping",
    "tracert",
    "ipconfig /displaydns",
  ],
  answers: [
    "tracert",
  ],
  explanation:
    "tracert permet d’identifier où les délais apparaissent sur le chemin réseau.",
},
{
  id: 85,
  type: "single",
  category: "IPv6",
  prompt:
    "85. Quelle plage d’adresses link-local peut être attribuée à une interface IPv6 ?",
  choices: [
    "FEC0::/10​",
    "FF00::/8​",
    "FE80::/10",
    "FDEE::/7​",
  ],
  answers: [
    "FE80::/10",
  ],
  explanation:
    "Les adresses link-local IPv6 utilisent le préfixe FE80::/10.",
},
{
  id: 86,
  type: "matching",
  category: "Adressage IPv6",
  prompt:
    "86. Associez les descriptions aux composants d’adressage IPv6 correspondants.",
  pairs: [
    {
      term: "ID d’interface",
      description:
        "Cette partie de l’adresse est l’équivalent de la partie hôte d’une adresse IPv4.",
    },
    {
      term: "Préfixe de routage global",
      description:
        "Cette partie réseau de l’adresse est attribuée par le fournisseur d’accès Internet.",
    },
    {
      term: "ID de sous-réseau",
      description:
        "Cette partie de l’adresse est utilisée par une entreprise pour identifier les sous-réseaux.",
    },
  ],
  options: [
    "Cette partie de l’adresse est l’équivalent de la partie hôte d’une adresse IPv4.",
    "Cette partie réseau de l’adresse est attribuée par le fournisseur d’accès Internet.",
    "Cette partie de l’adresse est utilisée par une entreprise pour identifier les sous-réseaux.",
  ],
  explanation:
    "Une adresse IPv6 comprend un préfixe global, un ID de sous-réseau et un ID d’interface.",
},
{
  id: 87,
  type: "single",
  category: "Ports réseau",
  prompt:
    "87. Un serveur reçoit un paquet client. Le numéro de port de destination du paquet est 22. Quelle application de service le client demande-t-il ?",
  choices: [
    "TFTP",
    "SSH",
    "DHCP",
    "DNS",
  ],
  answers: [
    "SSH",
  ],
  explanation:
    "SSH utilise le port TCP 22.",
},
{
  id: 88,
  type: "multiple",
  category: "Sous-couche LLC",
  prompt:
    "88. Quelles sont les deux fonctions d’exécution sur la sous-couche LLC de la couche de liaison de données OSI pour faciliter la communication Ethernet ? (Choisissez deux réponses.)",
  choices: [
    "Place les informations dans la trame qui indique le protocole de couche réseau encapsulé pour la trame.",
    "intègre des flux de couche 2 entre 10 Gigabit Ethernet sur fibre et 1 Gigabit Ethernet sur cuivre",
    "met en oeuvre CSMA/CD sur un support semi-duplex partagé hérité",
    "Met en œuvre un processus de délimitation des champs dans une trame Ethernet 2",
    "permet à IPv4 et IPv6 d’utiliser le même support physique",
  ],
  answers: [
    "Place les informations dans la trame qui indique le protocole de couche réseau encapsulé pour la trame.",
    "permet à IPv4 et IPv6 d’utiliser le même support physique",
  ],
  explanation:
    "La sous-couche LLC identifie le protocole de couche réseau et permet l’utilisation du même média par plusieurs protocoles.",
},
{
  id: 89,
  type: "multiple",
  category: "TCP et UDP",
  prompt:
    "89. Citez deux caractéristiques communes aux protocoles TCP et UDP. (Choisissez deux propositions.)",
  choices: [
    "La numérotation des ports",
    "Connexion en trois étapes",
    "L’utilisation de sommes de contrôle",
    "La possibilité de transmette des données voix numérisées",
    "Une communication sans connexion",
    "La taille de la fenêtre par défaut",
  ],
  answers: [
    "La numérotation des ports",
    "L’utilisation de sommes de contrôle",
  ],
  explanation:
    "TCP et UDP utilisent des numéros de ports et des mécanismes de contrôle d’erreur via checksum.",
},
{
  id: 90,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "90. Un administrateur réseau ajoute un nouveau réseau local à une filiale. Le nouveau réseau local doit prendre en charge 61 périphériques connectés. Quel est le plus petit masque réseau que l’administrateur réseau peut utiliser pour le nouveau réseau?",
  choices: [
    "255.255.255.192",
    "255.255.255.224",
    "255.255.255.128",
    "255.255.255.0",
  ],
  answers: [
    "255.255.255.192",
  ],
  explanation:
    "Un masque /26 fournit 62 adresses utilisables, suffisant pour 61 hôtes.",
},
{
  id: 91,
  type: "multiple",
  category: "Configuration réseau",
  prompt:
    "91. Quelles sont les deux valeurs de configuration à définir sur l’hôte pour autoriser l’accès à http://www.cisco.com/.Quelles sont les deux valeurs de configuration à définir sur l’hôte pour autoriser cet accès ? (Choisissez deux propositions.)",
  choices: [
    "Adresse MAC d’origine",
    "Serveur DNS",
    "Numéro du port source",
    "Serveur HTTP",
    "Passerelle par défaut",
  ],
  answers: [
    "Serveur DNS",
    "Passerelle par défaut",
  ],
  explanation:
    "Le DNS résout le nom de domaine et la passerelle permet l’accès aux réseaux distants.",
},
{
  id: 92,
  type: "single",
  category: "DHCP",
  prompt:
    "92. Quel service est fourni par DHCP ?",
  choices: [
    "Une application qui permet les discussions en ligne en temps réel entre les utilisateurs distants.",
    "Permet l’accès à distance aux périphériques et serveurs réseau.",
    "Utilise le chiffrement pour fournir un accès distant sécurisé aux périphériques et serveurs réseau.",
    "Affecte dynamiquement des adresses IP aux périphériques terminaux et intermédiaires.",
  ],
  answers: [
    "Affecte dynamiquement des adresses IP aux périphériques terminaux et intermédiaires.",
  ],
  explanation:
    "DHCP attribue automatiquement des adresses IP et d’autres paramètres réseau.",
},
{
  id: 93,
  type: "single",
  category: "IPv6",
  prompt:
    "93. Le bloc d’adresses IPv6 2001:db8:0:ca00::/56 est attribué à une organisation. Combien de sous-réseaux peuvent être créés sans utiliser de bits dans l’espace d’ID d’interface ?",
  choices: [
    "512",
    "256",
    "4 096",
    "1 024",
  ],
  answers: [
    "256",
  ],
  explanation:
    "Avec un préfixe /56 et des sous-réseaux /64, il reste 8 bits pour créer 256 sous-réseaux.",
},
{
  id: 94,
  type: "single",
  category: "Transport",
  prompt:
    "94. Un technicien utilise plusieurs applications sur un ordinateur connecté à Internet. Comment l’ordinateur peut-il suivre le flux de données entre plusieurs sessions d’application et faire en sorte que chaque application reçoit les flux de paquets qu’elle doit recevoir ?",
  choices: [
    "Le suivi du flux de données se fait selon le numéro de port source utilisé par chaque application.",
    "Le suivi du flux de données se fait selon l’adresse MAC de destination utilisée par l’ordinateur du technicien.",
    "Le suivi du flux de données se fait selon l’adresse IP de destination utilisée par l’ordinateur du technicien.",
    "Le suivi du flux de données se fait selon l’adresse IP source utilisée par l’ordinateur du technicien.",
  ],
  answers: [
    "Le suivi du flux de données se fait selon le numéro de port source utilisé par chaque application.",
  ],
  explanation:
    "Les numéros de port permettent d’identifier les sessions applicatives.",
},
{
  id: 95,
  type: "single",
  category: "Commutateur",
  prompt:
    "95. Pourquoi un commutateur de couche 2 nécessite-t-il une adresse IP ?",
  choices: [
    "Pour permettre au commutateur d’être géré à distance",
    "Pour permettre au commutateur d’envoyer des trames de diffusion vers des PC connectés",
    "Pour permettre au commutateur de fonctionner en tant que passerelle par défaut",
    "Pour permettre au commutateur de recevoir des trames provenant de PC connectés",
  ],
  answers: [
    "Pour permettre au commutateur d’être géré à distance",
  ],
  explanation:
    "L’adresse IP sert uniquement à la gestion distante d’un switch couche 2.",
},
{
  id: 96,
  type: "single",
  category: "Cybersécurité",
  prompt:
    "96. De quel type de menace à la sécurité parle-t-on lorsqu’un tableur exécuté en tant que logiciel complémentaire désactive le pare-feu logiciel local ?",
  choices: [
    "dépassement de mémoire tampon",
    "DoS",
    "attaques en force",
    "cheval de Troie",
  ],
  answers: [
    "cheval de Troie",
  ],
  explanation:
    "Un cheval de Troie se présente comme un logiciel légitime mais exécute des actions malveillantes.",
},
{
  id: 97,
  type: "matching",
  category: "Topologies réseau",
  prompt:
    "97. Associez les éléments ci-dessous aux types de topologie correspondants. (Les options ne sont pas toutes utilisées.)",
  pairs: [
    {
      term: "Diagramme de topologie physique",
      description:
        "Emplacement d'un ordinateur de bureau dans une salle de classe",
    },
    {
      term: "Diagramme de topologie physique",
      description:
        "Chemin de câbles reliant les salles aux armoires de câblage",
    },
    {
      term: "Diagramme de la topologie logique",
      description: "Adresse IP d'un serveur",
    },
  ],
  options: [
    "Adresse IP d'un serveur",
    "Emplacement d'un ordinateur de bureau dans une salle de classe",
    "Port USB d'un ordinateur dans une salle de classe",
    "Chemin de câbles reliant les salles aux armoires de câblage",
  ],
  explanation:
    "La topologie physique décrit l’emplacement et le câblage, tandis que la topologie logique décrit l’adressage et les flux réseau.",
},
{
  id: 98,
  type: "single",
  category: "Liaison de données",
  prompt:
    "98. Quelle est l’une des principales caractéristiques de la couche de liaison de données ?",
  choices: [
    "Il convertit un flux de bits de données en un code prédéfini.",
    "Il empêche le protocole de couche supérieure de connaître le support physique à utiliser dans la communication.",
    "Il accepte les paquets de la couche 3 et décide du chemin par lequel le paquet doit être transmis à un réseau distant.",
    "La couche physique doit générer les signaux électriques, optiques ou sans fil qui représentent le 1 et le 0 sur le support.",
  ],
  answers: [
    "Il empêche le protocole de couche supérieure de connaître le support physique à utiliser dans la communication.",
  ],
  explanation:
    "La couche liaison de données masque les détails du média physique aux couches supérieures.",
},
{
  id: 99,
  type: "single",
  category: "NIC",
  prompt:
    "99. Quel est le caractère d’un NIC qui le mettrait au niveau de la couche de liaison de données du modèle OSI ?",
  choices: [
    "Raccordez le câble Ethernet.",
    "La pile de protocoles TCP/IP",
    "Adresse MAC",
    "Adresse IP",
    "Port RJ-45",
  ],
  answers: [
    "Adresse MAC",
  ],
  explanation:
    "L’adresse MAC est une caractéristique de la couche liaison de données.",
},
{
  id: 100,
  type: "single",
  category: "ICMP",
  prompt:
    "100. Deux requêtes ping ont été exécutées depuis un hôte sur un réseau local...",
  choices: [
    "La passerelle par défaut est configurée avec une adresse IP incorrecte.",
    "Des règles de sécurité sont appliquées à la passerelle par défaut, ce qui l’empêche de traiter les requêtes ping.",
    "La passerelle par défaut n’est pas opérationnelle.",
    "La pile TCP/IP sur la passerelle par défaut ne fonctionne pas correctement.",
  ],
  answers: [
    "Des règles de sécurité sont appliquées à la passerelle par défaut, ce qui l’empêche de traiter les requêtes ping.",
  ],
  explanation:
    "Si le ping externe fonctionne, la passerelle fonctionne correctement mais peut bloquer ICMP.",
},
{
  id: 101,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "101. Reportez-vous à l’illustration. L’administrateur réseau a attribué au réseau local de LBMISS une plage d’adresses de 192.168.10.0. Cette plage d’adresses a été sous-réseau à l’aide d’un préfixe /29. Afin d’accueillir un nouveau bâtiment, le technicien a décidé d’utiliser le cinquième sous-réseau pour configurer le nouveau réseau (le sous-réseau zéro est le premier sous-réseau). Par les stratégies d’entreprise, l’interface du routeur reçoit toujours la première adresse d’hôte utilisable et le serveur de groupe de travail reçoit la dernière adresse d’hôte utilisable. Quelle configuration doit être entrée dans les propriétés du serveur de groupe de travail pour permettre la connectivité à Internet?",
  choices: [
    "Adresse IP: 192.168.10.38 masque de sous-réseau: 255.255.255.248, passerelle par défaut: 192.168.10.33",
    "Adresse IP: 192.168.10.65 masque de sous-réseau: 255.255.255.240, passerelle par défaut: 192.168.10.76",
    "Adresse IP: 192.168.10.38 masque de sous-réseau: 255.255.255.240, passerelle par défaut: 192.168.10.33",
    "Adresse IP: 192.168.1.3, masque de sous-réseau: 255.255.255.0, passerelle par défaut: 192.168.1.1",
    "Adresse IP: 192.168.10.41 masque de sous-réseau: 255.255.255.248, passerelle par défaut: 192.168.10.46",
  ],
  answers: [
    "Adresse IP: 192.168.10.38 masque de sous-réseau: 255.255.255.248, passerelle par défaut: 192.168.10.33",
  ],
  explanation:
    "Le cinquième sous-réseau /29 commence à 192.168.10.32 avec des hôtes utilisables de .33 à .38.",
},
{
  id: 102,
  type: "multiple",
  category: "Fibre optique",
  prompt:
    "102. Un technicien en réseau étudie l’utilisation du câblage à fibre optique dans un nouveau centre technologique. Quels deux problèmes devraient être pris en compte avant de mettre en œuvre des supports à fibres optiques? (Choisissez deux réponses.)",
  choices: [
    "La fibre optique fournit une capacité de données plus élevée mais est plus coûteuse que le câblage en cuivre.",
    "Le câble à fibre optique est capable de résister à une manipulation rugueuse.",
    "Le câblage à fibre optique est sensible à la perte de signal grâce au RFI.",
    "Le câblage à fibre optique nécessite une mise à la terre spécifique pour être immunisé contre les EMI.",
    "Le câblage à fibres optiques nécessite une expertise différente en matière de terminaison et d’épissage de ce que nécessite le câblage en cuivre.",
  ],
  answers: [
    "La fibre optique fournit une capacité de données plus élevée mais est plus coûteuse que le câblage en cuivre.",
    "Le câblage à fibres optiques nécessite une expertise différente en matière de terminaison et d’épissage de ce que nécessite le câblage en cuivre.",
  ],
  explanation:
    "La fibre offre de hautes performances mais nécessite un coût et des compétences spécifiques.",
},
{
  id: 103,
  type: "single",
  category: "SSH",
  prompt:
    "103. Que se passe-t-il lorsque la commande transport input ssh est entrée sur les lignes vty du switch?",
  choices: [
    "Le commutateur nécessite une combinaison nom d’utilisateur/mot de passe pour l’accès à distance.",
    "Le client SSH sur le commutateur est activé.",
    "La communication entre le commutateur et les utilisateurs distants est cryptée.",
    "Le commutateur nécessite des connexions à distance via un logiciel client propriétaire.",
  ],
  answers: [
    "La communication entre le commutateur et les utilisateurs distants est cryptée.",
  ],
  explanation:
    "La commande force l’utilisation de SSH pour les accès distants sécurisés.",
},
{
  id: 104,
  type: "single",
  category: "Adressage MAC",
  prompt:
    "104. Si l’hôte A envoie un paquet IP à l’hôte B. Quelle est l’adresse de destination de la trame lorsqu’il quitte l’hôte A ?",
  choices: [
    "DD:DD:DD:DD:DD:DD",
    "AA:AA:AA:AA:AA:AA",
    "CC:CC:CC:CC:CC:CC",
    "BB:BB:BB:BB:BB:BB",
    "172.168.10.65",
    "172.168.10.99",
  ],
  answers: [
    "BB:BB:BB:BB:BB:BB",
  ],
  explanation:
    "La trame Ethernet utilise l’adresse MAC du prochain saut, généralement la passerelle.",
},
{
  id: 105,
  type: "single",
  category: "Commutation",
  prompt:
    "105. Lorsque la configuration d’un commutateur comprend un seuil d’erreur défini par l’utilisateur pour chaque port, à quelle méthode de commutation le commutateur revient-il si le seuil est atteint ?",
  choices: [
    "fragment-free",
    "cut-through",
    "store-and-forward",
    "fast-forward",
  ],
  answers: [
    "store-and-forward",
  ],
  explanation:
    "Le switch passe à store-and-forward pour vérifier les erreurs lorsque le seuil est dépassé.",
},
{
  id: 106,
  type: "multiple",
  category: "RTP",
  prompt:
    "106. Quels sont les deux types de trafic qui utilisent le protocole RTP (Real-Time Transport Protocol)? (Choisissez deux réponses.)",
  choices: [
    "Voix",
    "P2P (peer-to-peer)",
    "transfert de fichier",
    "Web",
    "Vidéo",
  ],
  answers: [
    "Voix",
    "Vidéo",
  ],
  explanation:
    "RTP est utilisé pour les communications temps réel comme la voix et la vidéo.",
},
{
  id: 107,
  type: "multiple",
  category: "ICMPv6",
  prompt:
    "107. Quels sont les deux messages ICMPv6 qui ne sont pas présents dans ICMP pour IPv4? (Choisissez deux réponses.)",
  choices: [
    "Sollicitation de voisin",
    "Destination injoignable",
    "Confirmation de l’hôte",
    "Redirection de la route",
    "Annonce de routeur",
    "Dépassement du délai",
  ],
  answers: [
    "Sollicitation de voisin",
    "Annonce de routeur",
  ],
  explanation:
    "ICMPv6 introduit de nouveaux messages utilisés par Neighbor Discovery.",
},
{
  id: 108,
  type: "single",
  category: "SMTP",
  prompt:
    "108. Quel service est fourni par SMTP?",
  choices: [
    "Permet l’accès à distance aux périphériques et serveurs réseau.",
    "Une application qui permet les discussions en ligne en temps réel entre les utilisateurs distants.",
    "Permet aux clients d’envoyer des courriels à un serveur de messagerie et aux serveurs d’envoyer des courriels à d’autres serveurs.",
    "Utilise le chiffrement pour fournir un accès distant sécurisé aux périphériques et serveurs réseau.",
  ],
  answers: [
    "Permet aux clients d’envoyer des courriels à un serveur de messagerie et aux serveurs d’envoyer des courriels à d’autres serveurs.",
  ],
  explanation:
    "SMTP est le protocole utilisé pour l’envoi des e-mails.",
},
{
  id: 109,
  type: "multiple",
  category: "ICMPv6",
  prompt:
    "109. Quels sont les deux types de messages ICMPv6 qui doivent être autorisés par les listes de contrôle d’accès IPv6 pour permettre la résolution des adresses de couche 3 en adresses MAC de couche 2 ?",
  choices: [
    "Sollicitation de voisin",
    "une requête d’écho",
    "une réponse d’écho",
    "Annonce de routeur",
    "Annonce de voisin",
    "Sollicitation de routeur",
  ],
  answers: [
    "Sollicitation de voisin",
    "Annonce de voisin",
  ],
  explanation:
    "Neighbor Solicitation et Neighbor Advertisement remplacent ARP en IPv6.",
},
{
  id: 110,
  type: "single",
  category: "Accès distant",
  prompt:
    "110. Quel est le mode d’accès le plus approprié pour préserver la confidentialité lors d’une connexion distante CLI ?",
  choices: [
    "SSH",
    "AUX",
    "Console",
    "Telnet",
  ],
  answers: [
    "SSH",
  ],
  explanation:
    "SSH chiffre les communications distantes.",
},
{
  id: 111,
  type: "single",
  category: "Ports réseau",
  prompt:
    "111. Un serveur reçoit un paquet client. Le numéro de port de destination du paquet est 110. Quelle application de service le client demande-t-il?",
  choices: [
    "SMTP",
    "DHCP",
    "POP3",
    "DNS",
  ],
  answers: [
    "POP3",
  ],
  explanation:
    "POP3 utilise le port TCP 110.",
},
{
  id: 112,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "112. Reportez-vous à l’illustration. Un ingénieur réseau a reçu l’adresse réseau 192.168.99.0 et un masque de sous-réseau 255.255.255.192 pour le sous-réseau sur les quatre réseaux indiqués. Combien d’adresses hôtes au total sont inutilisées sur les quatre sous-réseaux?",
  choices: [
    "72",
    "88",
    "158",
    "200",
    "224",
  ],
  answers: [
    "200",
  ],
  explanation:
    "Le calcul des sous-réseaux et des hôtes inutilisés donne un total de 88 adresses non utilisées.",
},
{
  id: 113,
  type: "matching",
  category: "TCP",
  prompt:
    "113. Associez les descriptions aux mecanismes TCP correspondants. (Les options ne doivent pas etre toutes utilisees.)",
  pairs: [
    {
      term: "Nombre d'octets qu'un peripherique de destination peut accepter et traiter en une seule fois",
      description: "taille de fenetre",
    },
    {
      term: "Recu par un expediteur avant de transmettre plus de segments dans une session",
      description: "acknowledgment",
    },
    {
      term: "Methode de gestion des segments de donnees perdus",
      description: "retransmission",
    },
    {
      term: "Utilise pour identifier les segments de donnees manquants",
      description: "numeros d'ordre",
    },
  ],
  options: [
    "taille de fenetre",
    "retransmission",
    "numeros d'ordre",
    "acknowledgment",
  ],
  explanation:
    "TCP utilise les accuses de reception, les numeros d'ordre et la retransmission pour assurer la fiabilite.",
},
{
  id: 114,
  type: "multiple",
  category: "Sous-couche LLC",
  prompt:
    "114. Quelles sont les deux fonctions exécutées sur la sous-couche LLC de la couche de liaison de données OSI pour faciliter la communication Ethernet ? (Choisissez deux propositions.)",
  choices: [
    "applique les adresses MAC source et destination à la trame Ethernet",
    "implémente CSMA/CD sur un support semi-duplex partagé hérité",
    "Place les informations dans la trame qui indique le protocole de couche réseau encapsulé pour la trame.",
    "intègre des flux de couche 2 entre 10 Gigabit Ethernet sur fibre et 1 Gigabit Ethernet sur cuivre",
    "ajoute des informations de contrôle Ethernet aux données du protocole réseau",
  ],
  answers: [
    "Place les informations dans la trame qui indique le protocole de couche réseau encapsulé pour la trame.",
    "ajoute des informations de contrôle Ethernet aux données du protocole réseau",
  ],
  explanation:
    "La sous-couche LLC identifie le protocole réseau encapsulé et ajoute des informations de contrôle.",
},
{
  id: 115,
  type: "multiple",
  category: "Sécurité",
  prompt:
    "115. Quelles sont les deux méthodes les plus efficaces pour la protection contre les programmes malveillants ? (Choisissez deux réponses.)",
  choices: [
    "Installer et mettre à jour un logiciel antivirus",
    "Implémenter RAID",
    "Implémenter des mots de passe forts",
    "Implémenter des pare-feu réseau",
    "Implémenter un VPN",
    "Mettre à jour le système d’exploitation et d’autres logiciels d’application",
  ],
  answers: [
    "Installer et mettre à jour un logiciel antivirus",
    "Mettre à jour le système d’exploitation et d’autres logiciels d’application",
  ],
  explanation:
    "Les antivirus et les mises à jour régulières réduisent les vulnérabilités exploitées par les malwares.",
},
{
  id: 116,
  type: "matching",
  category: "Protocoles de transport",
  prompt:
    "116. Associez les protocoles d’application aux protocoles de transport corrects.",
  pairs: [
    {
      term: "TCP",
      description: "FTP",
    },
    {
      term: "TCP",
      description: "HTTP",
    },
    {
      term: "TCP",
      description: "SMTP",
    },
    {
      term: "UDP",
      description: "DHCP",
    },
    {
      term: "UDP",
      description: "TFTP",
    },
  ],
  options: [
    "FTP",
    "HTTP",
    "SMTP",
    "DHCP",
    "TFTP",
  ],
  explanation:
    "FTP, HTTP et SMTP utilisent TCP tandis que DHCP et TFTP utilisent UDP.",
},
{
  id: 117,
  type: "matching",
  category: "Pare-feu",
  prompt:
    "117. Faire correspondre la fonction du pare-feu au type de protection contre les menaces qu’il fournit au réseau.",
  pairs: [
    {
      term: "filtrage des paquets",
      description: "empêche l'accès selon l'adresse IP ou MAC",
    },
    {
      term: "Filtrage des URL",
      description: "empêche l'accès aux sites Web",
    },
    {
      term: "Filtrage dynamique de paquets (SPI)",
      description: "empêche les sessions entrantes non sollicitées",
    },
    {
      term: "Filtrage des applications",
      description: "empêche l'accès par numéro de port",
    },
  ],
  options: [
    "empêche l'accès par numéro de port",
    "empêche l'accès selon l'adresse IP ou MAC",
    "empêche les sessions entrantes non sollicitées",
    "empêche l'accès aux sites Web",
  ],
  explanation:
    "Chaque type de pare-feu applique un filtrage spécifique selon les adresses, les ports ou les sessions.",
},
{
  id: 118,
  type: "single",
  category: "Encapsulation",
  prompt:
    "118. Pendant l’encapsulation d’une requête HTTP vers un réseau distant, quelles informations sont ajoutées au champ d’adresse d’une trame pour indiquer la destination ?",
  choices: [
    "L’adresse MAC de l’hôte de destination",
    "L’adresse MAC de la passerelle par défaut",
    "Le domaine réseau de l’hôte de destination",
    "L’adresse IP de la passerelle par défaut",
  ],
  answers: [
    "L’adresse MAC de la passerelle par défaut",
  ],
  explanation:
    "Pour un réseau distant, la trame utilise l’adresse MAC de la passerelle par défaut.",
},
{
  id: 119,
  type: "multiple",
  category: "show ip interface brief",
  prompt:
    "119. Quels trois éléments factuels peut-on déduire du résultat de la commande show ip interface brief ? (Choisissez trois propositions.)",
  choices: [
    "Le commutateur peut être géré à distance.",
    "Un terminal est connecté à une interface physique.",
    "Deux terminaux sont connectés au commutateur.",
    "Les mots de passe ont été configurés sur le commutateur.",
    "Deux interfaces physiques ont été configurées.",
    "L’interface SVI par défaut a été configurée.",
  ],
  answers: [
    "Le commutateur peut être géré à distance.",
    "Un terminal est connecté à une interface physique.",
    "L’interface SVI par défaut a été configurée.",
  ],
  explanation:
    "La commande montre l’état des interfaces et la configuration IP des interfaces VLAN.",
},
{
  id: 120,
  type: "single",
  category: "Ports réseau",
  prompt:
    "120. Un serveur reçoit un paquet client. Le numéro de port de destination du paquet est 21. Quelle application de service le client demande-t-il?",
  choices: [
    "DHCP",
    "SSH",
    "FTP",
    "TFTP",
  ],
  answers: [
    "FTP",
  ],
  explanation:
    "FTP utilise le port TCP 21.",
},
{
  id: 121,
  type: "single",
  category: "POP3",
  prompt:
    "121. Quel service est fourni par POP3 ?",
  choices: [
    "Une application qui permet de chatter en temps réel entre utilisateurs distants.",
    "Utilise le chiffrement pour fournir un accès distant sécurisé aux périphériques et serveurs réseau.",
    "Récupère le courrier électronique à partir du serveur en téléchargeant le courrier électronique vers l’application de messagerie locale du client.",
    "Permet l’accès à distance aux périphériques et serveurs réseau.",
  ],
  answers: [
    "Récupère le courrier électronique à partir du serveur en téléchargeant le courrier électronique vers l’application de messagerie locale du client.",
  ],
  explanation:
    "POP3 télécharge les e-mails du serveur vers le client.",
},
{
  id: 122,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "122. Quel masque de sous-réseau faut-il utiliser si un réseau IPv4 comporte 40 terminaux nécessitant des adresses IP et que l’on veut éviter de gaspiller l’espace d’adressage ?",
  choices: [
    "255.255.255.0",
    "255.255.255.240",
    "255.255.255.128",
    "255.255.255.192",
    "255.255.255.224",
  ],
  answers: [
    "255.255.255.192",
  ],
  explanation:
    "Un masque /26 fournit 62 adresses utilisables, suffisant pour 40 hôtes.",
},
{
  id: 123,
  type: "single",
  category: "Ports réseau",
  prompt:
    "123. Un serveur reçoit un paquet client. Le numéro de port de destination du paquet est 80. Quelle application de service le client demande-t-il?",
  choices: [
    "SMTP",
    "DNS",
    "HTTP",
    "DHCP",
  ],
  answers: [
    "HTTP",
  ],
  explanation:
    "HTTP utilise le port TCP 80.",
},
{
  id: 124,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "124. Un administrateur réseau ajoute un nouveau réseau local à une filiale. Le nouveau réseau local doit prendre en charge 10 périphériques connectés. Quel est le plus petit masque réseau que l’administrateur réseau peut utiliser ?",
  choices: [
    "255.255.255.248",
    "255.255.255.240",
    "255.255.255.224",
    "255.255.255.192",
  ],
  answers: [
    "255.255.255.240",
  ],
  explanation:
    "Un masque /28 fournit 14 adresses utilisables, suffisant pour 10 hôtes.",
},
{
  id: 125,
  type: "single",
  category: "ARP",
  prompt:
    "125. Reportez-vous à l’illustration.  Quel protocole était responsable de la construction de la table qui est illustrée?",
  choices: [
    "DHCP",
    "ICMP",
    "DNS",
    "ARP",
  ],
  answers: [
    "ARP",
  ],
  explanation:
    "ARP construit la table associant adresses IP et adresses MAC.",
},
{
  id: 126,
  type: "single",
  category: "ARP",
  prompt:
    "126. Le PC1 envoie une requête ARP car il doit envoyer un paquet au PC2. Dans ce scénario, que se passe-t-il ensuite ?",
  choices: [
    "Le PC2 envoie une réponse ARP contenant son adresse MAC.",
    "Le SW1 envoie une réponse ARP contenant son adresse MAC Fa0/1.",
    "Le RT1 envoie une réponse ARP contenant son adresse Fa0/0.",
    "Le RT1 envoie une réponse ARP contenant son adresse MAC PC2.",
    "Le SW1 envoie une réponse ARP contenant son adresse MAC PC2.",
  ],
  answers: [
    "Le PC2 envoie une réponse ARP contenant son adresse MAC.",
  ],
  explanation:
    "Pour joindre un réseau distant, PC1 résout l’adresse MAC de sa passerelle par défaut.",
},
{
  id: 127,
  type: "matching",
  category: "Trames",
  prompt:
    "127. Faites correspondre chaque type de champ de trame a sa fonction. (Les options ne sont pas toutes utilisees.)",
  pairs: [
    {
      term: "Adressage",
      description: "Ce champ permet de diriger la trame vers sa destination.",
    },
    {
      term: "Detection des erreurs",
      description: "Ce champ verifie si la trame a ete endommagee pendant la transmission.",
    },
    {
      term: "type",
      description: "Ce champ permet d'identifier le protocole de couche 3 grace a la procedure LLC.",
    },
    {
      term: "Debut de trame",
      description: "Ce champ indique le debut d'une trame.",
    },
  ],
  options: [
    "Ce champ verifie si la trame a ete endommagee pendant la transmission.",
    "Ce champ permet d'identifier les services de controle de flux specifiques.",
    "Ce champ permet de diriger la trame vers sa destination.",
    "Ce champ indique le debut d'une trame.",
    "Ce champ permet d'identifier le protocole de couche 3 grace a la procedure LLC.",
  ],
  explanation:
    "Les champs de trame permettent l'identification, l'adressage et la verification des donnees.",
},
{
  id: 128,
  type: "single",
  category: "Normes ouvertes",
  prompt:
    "128. Quel avantage présente l’utilisation d’un protocole défini par une norme ouverte ?",
  choices: [
    "Une entreprise peut avoir le monopole sur le marché.",
    "Un protocole à norme ouverte n’est ni contrôlé ni régulé par des organismes de normalisation.",
    "Il favorise la compétitivité et permet de choisir.",
    "Le protocole peut être exécuté uniquement sur un équipement d’un fournisseur particulier.",
  ],
  answers: [
    "Il favorise la compétitivité et permet de choisir.",
  ],
  explanation:
    "Les normes ouvertes garantissent l’interopérabilité entre plusieurs fournisseurs.",
},
{
  id: 129,
  type: "multiple",
  category: "Sous-couche MAC",
  prompt:
    "129. Quelles sont les deux principales responsabilités de la sous-couche MAC Ethernet? (Choisissez deux réponses.)",
  choices: [
    "Délimitation des trames",
    "accès aux supports",
    "Adressage logique",
    "Détection des erreurs",
    "L’encapsulation de données",
  ],
  answers: [
    "L’encapsulation de données",
    "accès aux supports",
  ],
  explanation:
    "La sous-couche MAC gère l’accès au média et la structure des trames Ethernet.",
},
{
  id: 130,
  type: "single",
  category: "Réseaux P2P",
  prompt:
    "130. Une imprimante laser filaire est connectée à un ordinateur domestique et partagée avec d’autres ordinateurs du réseau domestique. Quel est le modèle de réseau suivi ?",
  choices: [
    "Peer-to-peer (P2P)",
    "Basé sur un client",
    "Maître-esclave",
    "Point à point",
  ],
  answers: [
    "Peer-to-peer (P2P)",
  ],
  explanation:
    "Dans un réseau P2P, les périphériques partagent directement leurs ressources.",
},
{
  id: 131,
  type: "single",
  category: "Routage",
  prompt:
    "131. Au cours du processus de transfert du trafic, que fait le routeur immédiatement après avoir fait correspondre l’adresse IP de destination à un réseau dans une entrée de table de routage connectée directement ?",
  choices: [
    "Ignorer le trafic après avoir consulté la table de routage",
    "Rechercher l’adresse de tronçon suivant pour le paquet",
    "Commuter le paquet vers l’interface directement connectée",
    "Analyser l’adresse IP de destination",
  ],
  answers: [
    "Commuter le paquet vers l’interface directement connectée",
  ],
  explanation:
    "Si le réseau est directement connecté, le routeur envoie le paquet directement sur cette interface.",
},
{
  id: 132,
  type: "multiple",
  category: "IPv6",
  prompt:
    "132. Quelles sont les trois parties d’une adresse de monodiffusion globale IPv6 ? (Choisissez trois réponses.)",
  choices: [
    "ID de sous-réseau",
    "masque de sous-réseau",
    "adresse de diffusion",
    "préfixe de routage global",
    "ID d’interface",
  ],
  answers: [
    "ID de sous-réseau",
    "préfixe de routage global",
    "ID d’interface",
  ],
  explanation:
    "Une adresse IPv6 globale contient un préfixe global, un ID de sous-réseau et un ID d’interface.",
},
{
  id: 133,
  type: "single",
  category: "TCP/IP",
  prompt:
    "133. Quelle couche du modèle TCP/IP fournit un chemin pour transférer des messages via un interréseau ?",
  choices: [
    "application",
    "transport",
    "accès réseau",
    "internet",
  ],
  answers: [
    "internet",
  ],
  explanation:
    "La couche Internet du modèle TCP/IP assure le routage entre réseaux.",
},
{
  id: 134,
  type: "single",
  category: "Sécurité",
  prompt:
    "134. Quelle caractéristique décrit le vol d’identité ?",
  choices: [
    "l’utilisation d’identifiants volés pour accéder à des données privées",
    "logiciel sur un routeur qui filtre le trafic en fonction des adresses IP ou des applications",
    "logiciel qui identifie les menaces à propagation rapide",
    "un protocole de tunneling qui fournit aux utilisateurs distants un accès sécurisé au réseau d’une organisation",
  ],
  answers: [
    "l’utilisation d’identifiants volés pour accéder à des données privées",
  ],
  explanation:
    "Le vol d’identité consiste à utiliser des informations ou identifiants volés pour accéder à des données privées ou se faire passer pour une autre personne.",
},
{
  id: 135,
  type: "matching",
  category: "Topologies réseau",
  prompt:
    "135. Faites correspondre chaque élément au type de diagramme de topologie sur lequel il est généralement identifié. (Toutes les options ne sont pas utilisées.)",
  pairs: [
    {
      term: "physical topology diagram",
      description: "location of a desktop PC in a classroom",
    },
    {
      term: "physical topology diagram",
      description: "path of cables that connect rooms to wiring closets",
    },
    {
      term: "logical topology diagram",
      description: "IP address of a server",
    },
  ],
  options: [
    "IP address of a server",
    "location of a desktop PC in a classroom",
    "USB port on a desktop PC in a classroom",
    "path of cables that connect rooms to wiring closets",
  ],
  explanation:
    "Un diagramme physique montre l’emplacement des équipements et les chemins de câblage. Un diagramme logique montre les informations comme les adresses IP.",
},
{
  id: 136,
  type: "multiple",
  category: "Cisco IOS",
  prompt:
    "136. Quelles sont les deux informations affichées dans la sortie de la commande show ip interface brief ? (Choisissez deux réponses.)",
  choices: [
    "Adresses IP",
    "description des interfaces",
    "Adresses MAC",
    "adresses de saut suivant",
    "Statuts de la couche 1",
    "Paramètres de vitesse et de duplex",
  ],
  answers: [
    "Adresses IP",
    "Statuts de la couche 1",
  ],
  explanation:
    "La commande show ip interface brief affiche notamment l’adresse IP de chaque interface et son état Status/Protocol.",
},
{
  id: 137,
  type: "single",
  category: "Sous-réseautage",
  prompt:
    "137. Un administrateur réseau ajoute un nouveau réseau local à une succursale. Le nouveau LAN doit prendre en charge 90 appareils connectés. Quel est le plus petit masque de réseau que l’administrateur réseau peut utiliser pour le nouveau réseau ?",
  choices: [
    "255.255.255.128",
    "255.255.255.240",
    "255.255.255.248",
    "255.255.255.224",
  ],
  answers: ["255.255.255.128"],
  explanation:
    "Pour 90 hôtes, il faut au moins 7 bits hôtes. Un masque /25, soit 255.255.255.128, fournit 126 adresses utilisables.",
},
{
  id: 138,
  type: "matching",
  category: "Sécurité physique",
  prompt:
    "138. Associez le type de menace à la cause. (Toutes les options ne sont pas utilisées.)",
  pairs: [
    {
      term: "hardware threats",
      description: "physical damage to servers, routers, switches, cabling plant, and workstations",
    },
    {
      term: "environmental threats",
      description: "temperature extremes (too hot or too cold) or humidity extremes (too wet or too dry)",
    },
    {
      term: "electrical threats",
      description: "voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss",
    },
    {
      term: "maintenance threats",
      description: "poor handling of key electrical components (electrostatic discharge), lack of critical spare parts, poor cabling, and poor labeling",
    },
  ],
  options: [
    "poor handling of key electrical components (electrostatic discharge), lack of critical spare parts, poor cabling, and poor labeling",
    "unauthorized access resulting in loss of data",
    "temperature extremes (too hot or too cold) or humidity extremes (too wet or too dry)",
    "physical damage to servers, routers, switches, cabling plant, and workstations",
    "voltage spikes, insufficient supply voltage (brownouts), unconditioned power (noise), and total power loss",
  ],
  explanation:
    "Les menaces physiques se classent notamment en menaces matérielles, environnementales, électriques et de maintenance.",
},
{
  id: 139,
  type: "single",
  category: "HTTP",
  prompt:
    "139. Quel service est fourni par HTTP ?",
  choices: [
    "Utilise le cryptage pour sécuriser l’échange de texte, d’images graphiques, de sons et de vidéos sur le Web.",
    "Permet les transferts de données entre un client et un serveur de fichiers.",
    "Une application qui permet de discuter en temps réel entre utilisateurs distants.",
    "Un ensemble de règles de base pour l’échange de texte, d’images graphiques, de sons, de vidéos et d’autres fichiers multimédias sur le Web.",
  ],
  answers: [
    "Un ensemble de règles de base pour l’échange de texte, d’images graphiques, de sons, de vidéos et d’autres fichiers multimédias sur le Web.",
  ],
  explanation:
    "HTTP définit les règles de communication pour le Web.",
},
{
  id: 140,
  type: "single",
  category: "Ports réseau",
  prompt:
    "140. Un paquet client est reçu par un serveur. Le paquet a un numéro de port de destination de 67. Quel service le client demande-t-il ?",
  choices: [
    "FTP",
    "DHCP",
    "Telnet",
    "SSH",
  ],
  answers: [
    "DHCP",
  ],
  explanation:
    "DHCP utilise le port UDP 67 côté serveur.",
},
{
  id: 141,
  type: "single",
  category: "Sécurité",
  prompt:
    "141. Quelle caractéristique décrit l’antispyware ?",
  choices: [
    "applications qui protègent les terminaux contre l’infection par des logiciels malveillants",
    "un appareil réseau qui filtre l’accès et le trafic entrant dans un réseau",
    "logiciel sur un routeur qui filtre le trafic en fonction des adresses IP ou des applications",
    "un protocole de tunneling qui fournit aux utilisateurs distants un accès sécurisé au réseau d’une organisation",
  ],
  answers: [
    "applications qui protègent les terminaux contre l’infection par des logiciels malveillants",
  ],
  explanation:
    "Les logiciels antispyware détectent et suppriment les logiciels espions.",
},
{
  id: 142,
  type: "multiple",
  category: "Sécurité entreprise",
  prompt:
    "142. Quelles sont les deux solutions de sécurité les plus susceptibles d’être utilisées uniquement dans un environnement d’entreprise ? (Choisissez deux réponses.)",
  choices: [
    "antispyware",
    "réseaux privés virtuels",
    "systèmes de prévention des intrusions",
    "mots de passe forts",
    "logiciel antivirus",
  ],
  answers: [
    "réseaux privés virtuels",
    "systèmes de prévention des intrusions",
  ],
  explanation:
    "Les VPN et les IPS sont surtout utilisés dans les réseaux d’entreprise.",
},
{
  id: 143,
  type: "single",
  category: "Antivirus",
  prompt:
    "143. Quelle caractéristique décrit un logiciel antivirus ?",
  choices: [
    "applications qui protègent les terminaux contre l’infection par des logiciels malveillants",
    "un appareil réseau qui filtre l’accès et le trafic entrant dans un réseau",
    "un protocole de tunneling qui fournit aux utilisateurs distants un accès sécurisé au réseau d’une organisation",
    "logiciel sur un routeur qui filtre le trafic en fonction des adresses IP ou des applications",
  ],
  answers: [
    "applications qui protègent les terminaux contre l’infection par des logiciels malveillants",
  ],
  explanation:
    "Les logiciels antivirus protègent les appareils contre les programmes malveillants.",
},
{
  id: 144,
  type: "single",
  category: "Spyware",
  prompt:
    "144. Quelle caractéristique décrit un logiciel espion ?",
  choices: [
    "un appareil réseau qui filtre l’accès et le trafic entrant dans un réseau",
    "logiciel installé sur l’appareil de l’utilisateur et collectant des informations sur l’utilisateur",
    "une attaque qui ralentit ou bloque un appareil ou un service réseau",
    "l’utilisation d’identifiants volés pour accéder à des données privées",
  ],
  answers: [
    "logiciel installé sur l’appareil de l’utilisateur et collectant des informations sur l’utilisateur",
  ],
  explanation:
    "Les spywares collectent discrètement des informations utilisateur.",
},
{
  id: 145,
  type: "single",
  category: "FTP",
  prompt:
    "145. Quel service est fourni par FTP ?",
  choices: [
    "Un ensemble de règles de base pour l’échange de texte, d’images graphiques, de sons, de vidéos et d’autres fichiers multimédias sur le Web.",
    "Une application qui permet de discuter en temps réel entre utilisateurs distants.",
    "Permet les transferts de données entre un client et un serveur de fichiers.",
    "Utilise le cryptage pour sécuriser l’échange de texte, d’images graphiques, de sons et de vidéos sur le Web.",
  ],
  answers: [
    "Permet les transferts de données entre un client et un serveur de fichiers.",
  ],
  explanation:
    "FTP est utilisé pour transférer des fichiers entre un client et un serveur.",
},
{
  id: 146,
  type: "multiple",
  category: "NAT",
  prompt:
    "146. Quels sont les deux déclarations qui décrivent avec précision un avantage ou un inconvénient lors du déploiement de la NAT pour IPv4 dans un réseau ? (Choisissez deux réponses.)",
  choices: [
    "NAT introduit des problèmes pour certaines applications nécessitant une connectivité de bout en bout.",
    "NAT fournit une solution pour ralentir l’épuisement des adresses IPv4.",
    "Le NAT aura un impact négatif sur les performances des commutateurs.",
    "NAT améliore le traitement des paquets.",
    "NAT permet aux tables de routage d’inclure plus d’informations.",
    "NAT ajoute une capacité d’authentification à IPv4.",
  ],
  answers: [
    "NAT introduit des problèmes pour certaines applications nécessitant une connectivité de bout en bout.",
    "NAT fournit une solution pour ralentir l’épuisement des adresses IPv4.",
  ],
  explanation:
    "NAT économise les adresses IPv4 mais peut compliquer certaines connexions.",
},
{
  id: 147,
  type: "single",
  category: "BOOTP",
  prompt:
    "147. Quel service est fourni par BOOTP ?",
  choices: [
    "Utilise le cryptage pour sécuriser l’échange de texte, d’images graphiques, de sons et de vidéos sur le Web.",
    "Permet les transferts de données entre un client et un serveur de fichiers.",
    "Application héritée qui permet à un poste de travail sans disque de découvrir sa propre adresse IP et de trouver un serveur BOOTP sur le réseau.",
    "Un ensemble de règles de base pour l’échange de texte, d’images graphiques, de sons, de vidéos et d’autres fichiers multimédias sur le Web.",
  ],
  answers: [
    "Application héritée qui permet à un poste de travail sans disque de découvrir sa propre adresse IP et de trouver un serveur BOOTP sur le réseau.",
  ],
  explanation:
    "BOOTP est un ancien protocole d’attribution d’adresses IP.",
},
{
  id: 148,
  type: "single",
  category: "Adware",
  prompt:
    "148. Quelle caractéristique décrit un logiciel publicitaire ?",
  choices: [
    "un appareil réseau qui filtre l’accès et le trafic entrant dans un réseau",
    "logiciel installé sur l’appareil de l’utilisateur et collectant des informations sur l’utilisateur",
    "l’utilisation d’identifiants volés pour accéder à des données privées",
    "une attaque qui ralentit ou bloque un appareil ou un service réseau",
  ],
  answers: [
    "logiciel installé sur l’appareil de l’utilisateur et collectant des informations sur l’utilisateur",
  ],
  explanation:
    "Les logiciels publicitaires affichent des annonces et peuvent collecter des données utilisateur.",
},
{
  id: 149,
  type: "single",
  category: "VPN",
  prompt:
    "149. Quelle caractéristique décrit un VPN ?",
  choices: [
    "logiciel sur un routeur qui filtre le trafic en fonction des adresses IP ou des applications",
    "logiciel qui identifie les menaces à propagation rapide",
    "un protocole de tunnel qui fournit aux utilisateurs distants un accès sécurisé au réseau d’une organisation",
    "un appareil réseau qui filtre l’accès et le trafic entrant dans un réseau",
  ],
  answers: [
    "un protocole de tunnel qui fournit aux utilisateurs distants un accès sécurisé au réseau d’une organisation",
  ],
  explanation:
    "Un VPN crée un tunnel sécurisé pour les utilisateurs distants.",
},
{
  id: 150,
  type: "single",
  category: "IMAP",
  prompt:
    "150. Un paquet client est reçu par un serveur. Le paquet a un numéro de port de destination de 143. Quel service le client demande-t-il ?",
  choices: [
    "IMAP",
    "FTP",
    "SSH",
    "Telnet",
  ],
  answers: [
    "IMAP",
  ],
  explanation:
    "IMAP utilise le port TCP 143.",
},
{
  id: 151,
  type: "single",
  category: "tracert",
  prompt:
    "151. Un utilisateur exécute un tracert sur un périphérique distant. À quel moment un routeur, qui se trouve sur le chemin de l’appareil de destination, arrêterait-il de transférer le paquet ?",
  choices: [
    "lorsque le routeur reçoit un message ICMP Time Exceeded",
    "lorsque la valeur RTT atteint zéro",
    "lorsque l’hôte répond avec un message ICMP Echo Reply",
    "lorsque la valeur du champ TTL atteint zéro",
    "lorsque les valeurs des messages de demande d’écho et de réponse d’écho atteignent zéro",
  ],
  answers: [
    "lorsque la valeur du champ TTL atteint zéro",
  ],
  explanation:
    "Le routeur abandonne le paquet lorsque le TTL atteint zéro.",
},
{
  id: 152,
  type: "single",
  category: "Ports réseau",
  prompt:
    "152. Un paquet client est reçu par un serveur. Le paquet a un numéro de port de destination de 53. Quel service le client demande-t-il ?",
  choices: [
    "DNS",
    "NetBIOS (NetBT)",
    "POP3",
    "IMAP",
  ],
  answers: [
    "DNS",
  ],
  explanation:
    "Le service DNS utilise le port 53.",
},
{
  id: 153,
  type: "single",
  category: "Subnetting",
  prompt:
    "153. Un administrateur réseau ajoute un nouveau réseau local à une succursale. Le nouveau LAN doit prendre en charge 25 appareils connectés. Quel est le plus petit masque de réseau que l’administrateur réseau peut utiliser pour le nouveau réseau ?",
  choices: [
    "255.255.255.128",
    "255.255.255.192",
    "255.255.255.224",
    "255.255.255.240",
  ],
  answers: [
    "255.255.255.224",
  ],
  explanation:
    "Le masque /27 (255.255.255.224) fournit 30 adresses hôtes utilisables.",
},
{
  id: 154,
  type: "matching",
  category: "Subnetting",
  prompt:
    "154. Référez-vous à l’exposition. Faites correspondre le réseau avec l’adresse IP et le préfixe corrects qui satisfont les exigences d’adressage hôte utilisables pour chaque réseau. (Toutes les options ne sont pas utilisées.)",
  pairs: [
    {
      term: "Network A",
      description: "192.168.0.0/25",
    },
    {
      term: "Network B",
      description: "192.168.0.128/26",
    },
    {
      term: "Network C",
      description: "192.168.0.192/27",
    },
    {
      term: "Network D",
      description: "192.168.0.224/30",
    },
  ],
  options: [
    "192.168.0.0/24",
    "192.168.0.192/27",
    "192.168.0.228/32",
    "192.168.0.0/25",
    "192.168.0.224/30",
    "192.168.0.128/26",
  ],
  explanation:
    "Chaque sous-réseau doit fournir suffisamment d’adresses hôtes selon les besoins indiqués.",
},
{
  id: 155,
  type: "single",
  category: "Sécurité",
  prompt:
    "155. Quelle caractéristique décrit une attaque DoS ?",
  choices: [
    "l’utilisation d’identifiants volés pour accéder à des données privées",
    "un appareil réseau qui filtre l’accès et le trafic entrant dans un réseau",
    "logiciel installé sur l’appareil de l’utilisateur et collectant des informations sur l’utilisateur",
    "une attaque qui ralentit ou bloque un appareil ou un service réseau",
  ],
  answers: [
    "une attaque qui ralentit ou bloque un appareil ou un service réseau",
  ],
  explanation:
    "Une attaque DoS vise à rendre un service indisponible.",
},
{
  id: 156,
  type: "matching",
  category: "Modèles réseau",
  prompt:
    "156. Associez une instruction au modèle de réseau associé. (Toutes les options ne sont pas utilisées.)",
  pairs: [
    {
      term: "peer-to-peer network",
      description: "no dedicated server is required",
    },
    {
      term: "peer-to-peer network",
      description: "client and server roles are set on a per request basis",
    },
    {
      term: "peer-to-peer application",
      description: "requires a specific user interface",
    },
    {
      term: "peer-to-peer application",
      description: "a background service is required",
    },
  ],
  options: [
    "requires a specific user interface",
    "no dedicated server is required",
    "a background service is required",
    "client and server roles are set on a per request basis",
    "devices can only function in one role at a time",
  ],
  explanation:
    "Les réseaux peer-to-peer partagent les rôles entre appareils sans serveur dédié.",
},
{
  id: 157,
  type: "single",
  category: "IPS",
  prompt:
    "157. Quelle caractéristique décrit un IPS ?",
  choices: [
    "un protocole de tunneling qui fournit aux utilisateurs distants un accès sécurisé au réseau d’une organisation",
    "un appareil réseau qui filtre l’accès et le trafic entrant dans un réseau",
    "logiciel qui identifie les menaces à propagation rapide",
    "logiciel sur un routeur qui filtre le trafic en fonction des adresses IP ou des applications",
  ],
  answers: [
    "logiciel qui identifie les menaces à propagation rapide",
  ],
  explanation:
    "Un IPS détecte et bloque automatiquement les menaces réseau.",
},
{
  id: 158,
  type: "multiple",
  category: "ARP",
  prompt:
    "158. Référez-vous à l’exposition. Les commutateurs ont une configuration par défaut. L’hôte A doit communiquer avec l’hôte D, mais l’hôte A n’a pas l’adresse MAC de la passerelle par défaut. Quels périphériques réseau recevront la requête ARP envoyée par l’hôte A ?",
  choices: [
    "uniquement l’hôte D",
    "uniquement les hôtes A, B, C et D",
    "uniquement les hôtes B et C",
    "uniquement les hôtes B, C et le routeur R1",
    "uniquement les hôtes A, B et C",
    "uniquement le routeur R1",
  ],
  answers: [
    "uniquement les hôtes B, C et le routeur R1",
  ],
  explanation:
    "Une requête ARP est diffusée dans le réseau local uniquement.",
},
{
  id: 159,
  type: "single",
  category: "IoT",
  prompt:
    "159. Quelle technologie sans fil a des exigences de faible consommation et de faible débit de données, ce qui la rend populaire dans les environnements IoT ?",
  choices: [
    "Bluetooth",
    "Zigbee",
    "WiMAX",
    "Wi-Fi",
  ],
  answers: [
    "Zigbee",
  ],
  explanation:
    "Zigbee est conçu pour les réseaux IoT à faible consommation.",
},
{
  id: 160,
  type: "single",
  category: "IPv6",
  prompt:
    "160. Quel est l’ID de sous-réseau associé à l’adresse IPv6 2001:DA48:FC5:A4:3D1B::1/64 ?",
  choices: [
    "2001:DA48::/64",
    "2001:DA48:FC5::A4:/64",
    "2001:DA48:FC5:A4::/64",
    "2001::/64",
  ],
  answers: [
    "2001:DA48:FC5:A4::/64",
  ],
  explanation:
    "Avec un préfixe /64, les 64 premiers bits représentent le réseau et le sous-réseau.",
},
];

export const ccnaPracticeQuestions = [
  ...basePracticeQuestions,
];
