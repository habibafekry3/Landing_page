// SELECT SECTION TAGS AND UNORDERED LIST FROM DOM
const navList = document.querySelectorAll('#Nlist');
const sectionName = document.querySelectorAll('section');

// SCROLL TO SECTION
window.addEventListener('scroll', function() {
    activeSection();
});

// ADD NAVIGATION MENU
sectionName.forEach(section=>{
    const sectionId = section.id;
    const sectionData = section.getAttribute('data-id');
    const list = document.createElement('li');
    navList[0].appendChild(list);
    list.innerHTML = `<a href="#${sectionId}">${sectionData}</a>`;
});

// SELECT ANCHOR TAG FROM DOM
    const anchor = document.querySelectorAll('a');

// ADD EVENT LISTENER FOR CLICK TO ANCHORS
anchor.forEach(link=>{
    link.addEventListener('click', function(event){
        event.preventDefault();
        const href = link.getAttribute('href');
        const targetSection = document.querySelector(href);
        targetSection.scrollIntoView({behavior:'smooth'});
    });
});

//  ADD ACTIVE CLASS TO CURRENT SECTION AND REMOVE FROM OTHERS
function activeSection() {
    sectionName.forEach(section => {
        const position = section.getBoundingClientRect();
        if (position.top >= -10 && position.top <= window.innerHeight /2) {
            section.classList.add('activeclass');
            anchor.forEach(link => {
                if (link.getAttribute('href').slice(1) == section.id) {
                    link.classList.add('active');
                }
                else {
                    link.classList.remove('active');
                }
            });
        } else {
            section.classList.remove('activeclass');
        }
    });
}

// SCROLL-TO-TOP-BUTTON
const button = document.querySelector('button');

// ADD EVENT LISTENER FOR SCROLLL TO DISPLAY THE BUTTON
document.addEventListener('scroll',()=>{
    let scrollTop = window.scrollY;
    // DISPLAY BUTTON IF SCROLL TO TOP > 600
    if (scrollTop > 800){
        button.setAttribute('style', 'display: block; cursor: pointer');
        // ADD EVENT LISTENER FOR CLICK TO BUTTON
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior:'smooth'});
        });
    }
    else{
        button.style.display='none';
    }
});