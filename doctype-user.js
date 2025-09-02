// Script pour charger le nom d'utilisateur et adapter les images sur <!DOCTYPE html>.html
(function(){
  var username = localStorage.getItem('snap_username') || '';
  // Images personnalisées par prénom détecté dans le username
  var imagesByName = {
    'julien': [
      'https://i.ibb.co/fVwwjbGB/c9596827da3b55dd734b95fe69e923ce.jpg',
      'https://i.ibb.co/p6w0GhPW/05c28486d3041433521f1c4c9fcc59cd.jpg',
      'https://i.ibb.co/bjxYvNGW/0d0a790018e9cd470faa7b98d853d50c.jpg'
    ],
    'hugo': [
      'https://i.ibb.co/fVwwjbGB/c9596827da3b55dd734b95fe69e923ce.jpg',
      'https://i.ibb.co/p6w0GhPW/05c28486d3041433521f1c4c9fcc59cd.jpg',
      'https://i.ibb.co/bjxYvNGW/0d0a790018e9cd470faa7b98d853d50c.jpg'
    ],
    'mathis': [
      'https://i.ibb.co/fVwwjbGB/c9596827da3b55dd734b95fe69e923ce.jpg',
      'https://i.ibb.co/p6w0GhPW/05c28486d3041433521f1c4c9fcc59cd.jpg',
      'https://i.ibb.co/bjxYvNGW/0d0a790018e9cd470faa7b98d853d50c.jpg'
    ],
    'alice': [
      'https://i.ibb.co/DgHdn9rJ/341e0f11e1db36b166d266623db14888.jpg',
      'https://i.ibb.co/mV23KD2D/7f39a55a8dd43eee5f87a51901eb1e56.jpg',
      'https://i.ibb.co/CpW43qJ9/2941cafbf2e39bddcd2845f80c093783.jpg'
    ],
    'emma': [
      'https://i.ibb.co/DgHdn9rJ/341e0f11e1db36b166d266623db14888.jpg',
      'https://i.ibb.co/mV23KD2D/7f39a55a8dd43eee5f87a51901eb1e56.jpg',
      'https://i.ibb.co/CpW43qJ9/2941cafbf2e39bddcd2845f80c093783.jpg'
    ],
    'celia': [
      'https://i.ibb.co/zVDSgFWY/Capture-d-e-cran-2025-09-01-a-14-32-14.png',
      'https://i.ibb.co/4g9gkJX8/2553865cde28762adcec9bbc843212d7.jpg',
      'https://i.ibb.co/G4DNKPHW/6c7119077dfcf116a428a0681d3fc7cd.jpg'
    ]
  };
  // Nettoyage du username pour détecter le prénom même s'il y a des caractères spéciaux
  var usernameClean = username.toLowerCase().replace(/[^a-z0-9]/g, '');
  var images = null;
  for (var name in imagesByName) {
    if (usernameClean.includes(name)) {
      images = imagesByName[name];
      break;
    }
  }
  if (!images) {
    // Images par défaut si aucun prénom détecté
    images = [
      'https://i.ibb.co/zVDSgFWY/Capture-d-e-cran-2025-09-01-a-14-32-14.png',
      'https://i.ibb.co/4g9gkJX8/2553865cde28762adcec9bbc843212d7.jpg',
      'https://i.ibb.co/G4DNKPHW/6c7119077dfcf116a428a0681d3fc7cd.jpg'
    ];
  }
  var gridEyes = document.getElementById('grid-eyes');
  if(gridEyes) {
    gridEyes.innerHTML = '';
    for(var i=0;i<images.length;i++){
      var wrap=document.createElement('div'); wrap.className='thumb heavy';
      var b=document.createElement('div'); b.className='banner'; b.textContent='Flouté';
      var img=new Image(); img.loading='lazy'; img.alt='';
      img.src = images[i];
      img.style.filter = 'blur(4px)';
      wrap.appendChild(img); wrap.appendChild(b);
      gridEyes.appendChild(wrap);
    }
  }
})();
