const main = document.querySelector('#main');

document.querySelector('#linkToHero').addEventListener('click', function () {loadSection('hero')});
document.querySelector('#linkToSkills').addEventListener('click', function() {loadSection('service')});
document.querySelector('#linkToProjects').addEventListener('click', function() {loadSection('projects')});
document.querySelector('#linkToAbout').addEventListener('click', function() {loadSection('about')});
document.querySelector('#linkToContacts').addEventListener('click', function() {loadSection('contact')});

async function loadSection (element) {
    let content = "";
    main.innerHTML = "";
    await fetch(`../${element}.html`)
        .then(response => response.text()).then(data => content = data);
  
    console.log(content);
    
    main.innerHTML = content;
    
    
}

// <li id="linkToHero">Home</li>
// <li id="linkToSkills">Skills</li>
// <li id="linkToProjects">Projects</li>
// <li id="linkToAbout">About</li>
// <li id="linkToContact">Contact</li>