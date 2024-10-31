// method 1
  /*function stopTransition(e){ 
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }
  function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //注意：这里的querySelector里面是`号，不是单引号
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!key) return;
    if (!audio) return;
    key.addEventListener('transitionend', stopTransition);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  window.addEventListener('keydown', playAudio);*/

  // method 2
  

  // Initialize an object to store key press counts
const keyPressCounts = {};

  // Listen for keydown events and update the key press counts
  function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!key) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');

    // Update the key press count
  if (!keyPressCounts[e.keyCode]) keyPressCounts[e.keyCode] = 0;
  keyPressCounts[e.keyCode]++;
  const counter = key.querySelector('.counter');
  counter.textContent = keyPressCounts[e.keyCode];

  
  }

  function stopTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  window.addEventListener('keydown', playAudio);
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', stopTransition));
