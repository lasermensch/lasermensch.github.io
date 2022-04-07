window.onload = function () {console.log('tada!');loadSection('hero');}

const main = document.querySelector('#main');

document.querySelector('#linkToHero').addEventListener('click', function () {loadSection('hero')});
document.querySelector('#linkToSkills').addEventListener('click', function() {loadSection('service')});
document.querySelector('#linkToProjects').addEventListener('click', function() {loadSection('projects')});
document.querySelector('#linkToAbout').addEventListener('click', function() {loadSection('about')});
document.querySelector('#linkToContacts').addEventListener('click', function() {loadSection('contact')});
document.querySelector('#linkToHome').addEventListener('click', function() {loadSection('hero')});

async function loadSection (element) {
    let content = "";
 
    await fetch(`../${element}.html`)
        .then(response => response.text()).then(data => content = data);
  

    
    main.innerHTML = content;
    
    
}



