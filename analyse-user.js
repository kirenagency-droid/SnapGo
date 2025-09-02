// Script pour charger le nom d'utilisateur et adapter les images
(function(){
  // Récupère le nom d'utilisateur depuis localStorage
  var username = (localStorage.getItem('snap_username') || '').toLowerCase();
  // Nettoie le pseudo pour ne garder que les lettres (pour la détection du prénom)
  var usernameClean = username.replace(/[^a-z]/g, '');
  // Dictionnaire des prénoms et images associées
  var baseImages = [
    'https://i.ibb.co/zVDSgFWY/Capture-d-e-cran-2025-09-01-a-14-32-14.png',
    'https://i.ibb.co/4g9gkJX8/2553865cde28762adcec9bbc843212d7.jpg',
    'https://i.ibb.co/G4DNKPHW/6c7119077dfcf116a428a0681d3fc7cd.jpg'
  ];
  var prenomsImages = {
    'celia': baseImages,
    'mathislou': [
      'https://i.ibb.co/kTDtvTP/Capture-d-e-cran-2025-09-01-a-13-31-52.png',
      'https://i.ibb.co/JwgYDf0y/IMG-8008.jpg',
      'https://i.ibb.co/RpFd7mwr/IMG-8005.jpg'
    ],
    'alice': baseImages,
    'julie': baseImages,
    'emma': baseImages,
    'hugo': [
      'https://i.ibb.co/fVwwjbGB/c9596827da3b55dd734b95fe69e923ce.jpg',
      'https://i.ibb.co/p6w0GhPW/05c28486d3041433521f1c4c9fcc59cd.jpg',
      'https://i.ibb.co/sp9m0PTh/te-le-chargement.png'
    ],
    'julien': [
      'https://i.ibb.co/fVwwjbGB/c9596827da3b55dd734b95fe69e923ce.jpg',
      'https://i.ibb.co/p6w0GhPW/05c28486d3041433521f1c4c9fcc59cd.jpg',
      'https://i.ibb.co/sp9m0PTh/te-le-chargement.png'
    ],
    'mathis': [
      'https://i.ibb.co/fVwwjbGB/c9596827da3b55dd734b95fe69e923ce.jpg',
      'https://i.ibb.co/p6w0GhPW/05c28486d3041433521f1c4c9fcc59cd.jpg',
      'https://i.ibb.co/sp9m0PTh/te-le-chargement.png'
    ]
  };
  // Cherche si un prénom connu est contenu dans le pseudo
  var images = null;
  for(var prenom in prenomsImages) {
    if(username.includes(prenom) || usernameClean.includes(prenom)) {
      images = prenomsImages[prenom];
      break;
    }
  }
  // Si aucun prénom détecté, fallback sur les images de base
  if(!images) images = baseImages;
  // Remplace les images dans la section "My Eyes Only" si possible
  var gridEyes = document.getElementById('grid-eyes');
  if(gridEyes) {
    gridEyes.innerHTML = '';
    // Aucune image affichée
  }
})();
