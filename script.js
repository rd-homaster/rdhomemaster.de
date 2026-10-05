document.addEventListener('DOMContentLoaded',()=>{
  const button=document.querySelector('.menu-button');
  const nav=document.querySelector('.main-nav');
  if(button&&nav){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');}));}
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
});
