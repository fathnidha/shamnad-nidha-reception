const intro=document.getElementById('intro');
const openBtn=document.getElementById('openBtn');
const music=document.getElementById('weddingMusic');
const musicToggle=document.getElementById('musicToggle');
const START=95, END=115;
let playing=false, stopTimer=null;

async function playSongSegment(){
  try{
    music.pause();
    music.currentTime=START;
    await music.play();
    playing=true;
    musicToggle.innerHTML='♫ <span>Music on</span>';
    musicToggle.setAttribute('aria-label','Pause music');
    clearInterval(stopTimer);
    stopTimer=setInterval(()=>{
      if(music.currentTime>=END){
        music.pause();
        music.currentTime=START;
        playing=false;
        clearInterval(stopTimer);
        musicToggle.innerHTML='♫ <span>Play music</span>';
        musicToggle.setAttribute('aria-label','Play music');
      }
    },150);
  }catch(e){
    playing=false;
    musicToggle.innerHTML='♫ <span>Tap for music</span>';
  }
}
function pauseSong(){
  music.pause();playing=false;clearInterval(stopTimer);
  musicToggle.innerHTML='♫ <span>Play music</span>';
  musicToggle.setAttribute('aria-label','Play music');
}
musicToggle.addEventListener('click',()=>playing?pauseSong():playSongSegment());
openBtn.addEventListener('click',()=>{
  if(intro.classList.contains('opening'))return;
  intro.classList.add('opening');
  playSongSegment();
  setTimeout(()=>intro.classList.add('gone'),1250);
  setTimeout(()=>intro.remove(),2450);
});
const target=new Date('2027-05-01T11:30:00+05:30').getTime();
function updateCountdown(){
  const n=Math.max(0,target-Date.now());
  const v={days:Math.floor(n/86400000),hours:Math.floor(n%86400000/3600000),mins:Math.floor(n%3600000/60000),secs:Math.floor(n%60000/1000)};
  Object.keys(v).forEach(k=>{const el=document.getElementById(k);if(el)el.textContent=String(v[k]).padStart(2,'0')});
}
updateCountdown();setInterval(updateCountdown,1000);
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
 items.forEach(x=>observer.observe(x));
}else items.forEach(x=>x.classList.add('visible'));
