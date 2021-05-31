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
    count ++
    footerclick = console.log("Clic numéro " + count);
}

// ------------------------------     Fonctionnalité 2     ------------------------------