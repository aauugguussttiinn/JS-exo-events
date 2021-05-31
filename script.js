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