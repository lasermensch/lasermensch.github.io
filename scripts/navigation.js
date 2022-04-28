

const main = document.querySelector('#main');

async function loadSection (element) {
    let content = "";
    await fetch(`../${element}.html`)
        .then(response => response.text()).then(data => content = data);
  
    main.innerHTML = content;
    document.querySelectorAll('.linkToHero').forEach((el)=>{el.addEventListener('click', function () {loadSection('hero')})});
    document.querySelectorAll('.linkToSkills').forEach((el)=>{el.addEventListener('click', function() {loadSection('service')})});
    document.querySelectorAll('.linkToProjects').forEach((el)=>{el.addEventListener('click', function() {loadSection('projects')})});
    document.querySelectorAll('.linkToAbout').forEach((el)=>{el.addEventListener('click', function() {loadSection('about')})});
    document.querySelectorAll('.linkToContact').forEach((el)=>{el.addEventListener('click', function() {loadSection('contact')})});
}



