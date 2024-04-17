const citations = [
    {
        "id": 1,
        "citation": "Le coup le plus rusé que le diable ait jamais réussi, c’est de faire croire à tout le monde qu’il n’existait pas.",
        "film": "Usual Suspects",
        "interprete": "Kevin Spacey",
        "realisateur": "Bryan Singer"
    },
    {
        "id": 2,
        "citation": "J’ai les mains faites pour l’or, et elles sont dans la merde !",
        "film": "Scarface",
        "interprete": "Al Pacino",
        "realisateur": "Brian de Palma"
    },
    {
        "id": 3,
        "citation": "Trois consonnes, quatre voyelles et un seul sens : je t’aime.",
        "film": "Titanic",
        "interprete": "James Cameron",
        "realisateur": "Titanic"
    },
    {
        "id": 4,
        "citation": "L’amour est une chose éphémère alors qu’un conte de fée ne s’achève que si la vie s’arrête.",
        "film": "Desperate Housewives",
        "interprete": "Marc Cherry",
        "realisateur": "Desperate Housewives"
    },
    {
        "id": 5,
        "citation": "J’ai dégusté son foie avec des fèves au beurre et un excellent Chianti",
        "film": "Le silence des agneaux",
        "interprete": "Anthony Hopkins",
        "realisateur": "Jonathan Demme"
    },
    {
        "id": 6,
        "citation": "J’adore l’odeur du napalm au petit matin.",
        "film": "Apocalypse now",
        "interprete": "Robert Duval",
        "realisateur": "Francis Ford Coppola"
    },
    {
        "id": 7,
        "citation": "C’est à moi que tu parles ? C’est à moi que tu parles ?...",
        "film": "Taxi Driver",
        "interprete": "Robert De Niro",
        "realisateur": "Martin Scorsese"
    },
    {
        "id": 8,
        "citation": "Tu vois, le monde se divise en deux catégories: ceux qui ont un pistolet chargé et ceux qui creusent. Toi tu creuses.",
        "film": "Le bon, la brute et le truand",
        "interprete": "Clint Eastwood",
        "realisateur": "Sergio Leone"
    },
    {
        "id": 9,
        "citation": "Luke, je suis ton père…",
        "film": "La guerre des étoiles : L’empire contre-attaque",
        "interprete": "David Prowse",
        "realisateur": "George Lucas"
    },
    {
        "id": 10,
        "citation": "On ne lit pas ni écrit de la poésie parce que c’est joli. On lit et écrit de la poésie car on fait partie de l’humanité. Et l’humanité est faite de passions. La médecine, le droit, le commerce sont nécessaires pour assurer la vie, mais la poésie, la beauté, la romance, l’amour, c’est pour ça qu’on vit.",
        "film": "Le cercle des poètes disparus",
        "interprete": "Peter Weir",
        "realisateur": "Peter Weir"
    },
    {
        "id": 11,
        "citation": "Quand on parle pognon, à partir d’un certain chiffre, tout le monde écoute.",
        "film": "Le Pacha",
        "interprete": "Jean Gabin",
        "realisateur": "Georges Lautner"
    },
    {
        "id": 12,
        "citation": "Figurez-vous que Thérèse n’est pas moche, elle n’a pas un physique facile… c’est différent.",
        "film": "Le père Noël est une ordure",
        "interprete": "Thierry Lhermitte",
        "realisateur": "Jean-Marie Poiré"
    },
    {
        "id": 13,
        "citation": "La vérité c’est comme une couverture trop petite. Tu peux tirer dessus de tous les côtés, tu auras toujours les pieds froids.",
        "film": "Le cercle des poètes disparus",
        "interprete": "Peter Weir",
        "realisateur": "Peter Weir"
    },
    {
        "id": 14,
        "citation": "Les cons ça ose tout. C’est même à ça qu’on les reconnait",
        "film": "Les tontons flingueurs",
        "interprete": "Lino Ventura",
        "realisateur": "Georges Lautner"
    },
    {
        "id": 15,
        "citation": "N’avez vous jamais réfléchi à la vraie liberté ? Liberté à l’égard de l’opinion d’autrui ? Et même à l’égard de l’opinion que vous avez sur vous ?",
        "film": "Apocalypse now",
        "interprete": "Francis Ford Coppola",
        "realisateur": "Francis Ford Coppola"
    },
    {
        "id": 16,
        "citation": "Vous voulez un whisky ? - Juste un doigt. - Vous ne voulez pas un whisky d’abord ?",
        "film": "La cité de la peur",
        "interprete": "Gérard Darmon et Chantal Aubry",
        "realisateur": "Alain Berbérian"
    },
    {
        "id": 17,
        "citation": "Avez-vous déjà rencontré le couple parfait ? Ces deux âmes sœurs dont l’amour ne meurt jamais. Ces deux amants dont la liaison n’est jamais menacée, le mari et la femme qui s’accordent une confiance totale. Si vous ne connaissez pas ce couple parfait, permettez-moi de vous le présenter, ils se tiennent droit au sommet d’un gâteau à la crème. Le secret de leur succès ? Eh bien, pour commencer, ils n’ont pas à se regarder dans le yeux...",
        "film": "Desperate Housewives",
        "interprete": "Marc Cherry",
        "realisateur": "Marc Cherry"
    },
    {
        "id": 18,
        "citation": "Un grand pouvoir implique de grandes responsabilités.",
        "film": "Spiderman",
        "interprete": "Benjamin Parker",
        "realisateur": "Stan Lee"
    }
]

let btn_reponseA = document.getElementById("reponseA");
let btn_reponseB = document.getElementById("reponseB");
let btn_reponseC = document.getElementById("reponseC");
let btn_reponseD = document.getElementById("reponseD");
let citationField = document.getElementById("my-citation");

let quizzResponse = "";

function rand(n){
    return Math.floor(Math.random() * n);
}

// fonction pour récupérer une citation au hasard
function getCitation(data){
    // data is an array of citations
    let index = rand(data.length);
    return data[index];
}

// fonction pour récupérer 3 films au hasard
function getRandomFilmsNames(data, nbTitres, titreExistant){
    // data is an array of citations
    let arrFilmsNames = [];
    while(arrFilmsNames.length < nbTitres ){
        let filmName = getCitation(data).film;
        if (!arrFilmsNames.includes(filmName)){
            arrFilmsNames.push(filmName);
        }
    }
    if(arrFilmsNames.indexOf(titreExistant) == -1){
        // le titre n'est pas dans la liste
        let pos = rand(nbTitres);
        arrFilmsNames[pos] = titreExistant;
    } // else on a le titre dans le tableau
    return arrFilmsNames;
}

// fonction pour trouver les titres de films
// on choisit une citation random
let myCitation = getCitation(citations);

citationField.innerHTML = myCitation.citation;

let arrFilms = getRandomFilmsNames(citations, 4, myCitation.film);

btn_reponseA.innerHTML = arrFilms[0];
btn_reponseB.innerHTML = arrFilms[1];
btn_reponseC.innerHTML = arrFilms[2];
btn_reponseD.innerHTML = arrFilms[3];

btn_reponseA.onclick = () => {
    quizzResponse = btn_reponseA.innerHTML;
    btn_reponseA.classList.replace('btn','clickedbtn');
    btn_reponseB.classList.replace('clickedbtn', 'btn');
    btn_reponseC.classList.replace('clickedbtn', 'btn');
    btn_reponseD.classList.replace('clickedbtn', 'btn');
  };

btn_reponseB.onclick = () => {
    quizzResponse = btn_reponseB.innerHTML;
    btn_reponseA.classList.replace('clickedbtn', 'btn');
    btn_reponseB.classList.replace('btn','clickedbtn');
    btn_reponseC.classList.replace('clickedbtn', 'btn');
    btn_reponseD.classList.replace('clickedbtn', 'btn');
  };

btn_reponseC.onclick = () => {
    quizzResponse = btn_reponseC.innerHTML;
    btn_reponseA.classList.replace('clickedbtn', 'btn');
    btn_reponseB.classList.replace('clickedbtn', 'btn');
    btn_reponseC.classList.replace('btn','clickedbtn');
    btn_reponseD.classList.replace('clickedbtn', 'btn');
  };

btn_reponseD.onclick = () => {
    quizzResponse = btn_reponseD.innerHTML;
    btn_reponseA.classList.replace('clickedbtn', 'btn');
    btn_reponseB.classList.replace('clickedbtn', 'btn');
    btn_reponseC.classList.replace('clickedbtn', 'btn');
    btn_reponseD.classList.replace('btn','clickedbtn');
  };

