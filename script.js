document.getElementById('openBtn').addEventListener('click',()=>{document.getElementById('cover').classList.add('hide');setTimeout(()=>document.getElementById('cover').remove(),850)});const target=new Date('2027-05-01T11:30:00+05:30').getTime();function update(){let n=Math.max(0,target-Date.now());let v={days:Math.floor(n/86400000),hours:Math.floor(n%86400000/3600000),mins:Math.floor(n%3600000/60000),secs:Math.floor(n%60000/1000)};for(let k in v){let e=document.getElementById(k);if(e)e.textContent=String(v[k]).padStart(2,'0')}}update();setInterval(update,1000);
// Reveal sections gently as guests scroll through the invitation
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}});
 },{threshold:.12});
 revealItems.forEach(item=>revealObserver.observe(item));
}else{revealItems.forEach(item=>item.classList.add('visible'))}
