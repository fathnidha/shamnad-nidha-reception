const cover=document.getElementById('cover');
const openBtn=document.getElementById('openBtn');
const music=document.getElementById('weddingMusic');
const musicToggle=document.getElementById('musicToggle');
let musicOn=false;
async function startMusic(){
 try{await music.play();musicOn=true;musicToggle.innerHTML='♫ <span>Music on</span>';musicToggle.setAttribute('aria-label','Turn music off');}
 catch(e){musicOn=false;musicToggle.innerHTML='♫ <span>Tap for music</span>';}
}
function toggleMusic(){
 if(musicOn){music.pause();musicOn=false;musicToggle.innerHTML='♫ <span>Music off</span>';musicToggle.setAttribute('aria-label','Turn music on');}
 else{startMusic();}
}
musicToggle.addEventListener('click',toggleMusic);
function openInvitation(){
 if(cover.classList.contains('opening')) return;
 startMusic();
 cover.classList.add('opening');
 setTimeout(()=>{cover.classList.add('hide');setTimeout(()=>cover.remove(),1200)},1550);
}
openBtn.addEventListener('click',openInvitation);
openBtn.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openInvitation();}});
const target=new Date('2027-05-01T11:30:00+05:30').getTime();function update(){let n=Math.max(0,target-Date.now());let v={days:Math.floor(n/86400000),hours:Math.floor(n%86400000/3600000),mins:Math.floor(n%3600000/60000),secs:Math.floor(n%60000/1000)};for(let k in v){let e=document.getElementById(k);if(e)e.textContent=String(v[k]).padStart(2,'0')}}update();setInterval(update,1000);
// Reveal sections gently as guests scroll through the invitation
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}});
 },{threshold:.12});
 revealItems.forEach(item=>revealObserver.observe(item));
}else{revealItems.forEach(item=>item.classList.add('visible'))}
