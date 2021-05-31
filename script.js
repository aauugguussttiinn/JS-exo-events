// ------------------------------     Fonctionnalité 1     ------------------------------

// let footerclick = document.getElementsByTagName('footer')[0];

// footerclick.addEventListener('click',footerdisplay);

// function footerdisplay(){
//     footerclick = console.log("clique");
// }

// ------------------------------     Fonctionnalité 1-bis     ------------------------------

let footerclick = document.getElementsByTagName('footer')[0];

footerclick.addEventListener('click',footerdisplay);
let count = 0

function footerdisplay(){
    count ++;
    footerclick = console.log("Clic numéro " + count);
};

// ------------------------------     Fonctionnalité 2     ------------------------------

let collapser = document.getElementById('navbarHeader');

let burger = document.querySelector('button.navbar-toggler');

let burgerStatus = false;

burger.addEventListener('click',collapsing);

function collapsing(){
    if (burgerStatus == false) {
        collapser.classList.remove('collapse');
        burgerStatus = true;
    } else if (burgerStatus == true) {
        collapser.classList.add('collapse');
        burgerStatus = false;
    }
};

// ------------------------------     Fonctionnalité 3     ------------------------------

let firstCardEdit = document.querySelectorAll('div.album button')[1];

firstCardEdit.addEventListener('click',gettingred);

function gettingred(){
    firstCardEdit.style.color = 'red'
}

// ------------------------------     Fonctionnalité 4     ------------------------------

let secondCardEdit = document.querySelectorAll('div.album button')[3];

secondCardEdit.addEventListener('click',gettinggreen);

secondCardStatus = false

function gettinggreen(){
    if (secondCardStatus == false) {
        secondCardEdit.style.color = 'green';
        secondCardStatus = true;
    } else if (secondCardStatus == true) {
        secondCardEdit.style.color = '';
        secondCardStatus = false;
    }
};

// ------------------------------     Fonctionnalité 5     ------------------------------

let getNavBar = document.querySelector('header div.navbar');

let bootstrapel = document.querySelector('link')

let navbarStatus = false;

getNavBar.addEventListener('dblclick',nuclear);

function nuclear(){
    if (navbarStatus == false) {
        bootstrapel.href = '#'
        navbarStatus = true;
    } else if (navbarStatus == true) {
        bootstrapel.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
        navbarStatus = false;
    }
};

// ------------------------------     Fonctionnalité 6     ------------------------------

let anyCard = document.querySelectorAll('div.card');

let sizingStatus = false;

anyCard.forEach(card => {
    let btn = card.querySelector('.btn-success');
    let img = card.querySelector('.card-img-top');
    let txt = card.querySelector('.card-text')
    btn.addEventListener('mouseover',sizing);
    function sizing () {
        if (sizingStatus == false) {
            img.style.width = '20%';
            txt.classList.add('d-none');
            sizingStatus = true;
        } else if (sizingStatus ==true) {
            img.style.width = '100%';
            txt.classList.remove('d-none');
            sizingStatus = false;
        }
    }
})

// ------------------------------     Fonctionnalité 7     ------------------------------