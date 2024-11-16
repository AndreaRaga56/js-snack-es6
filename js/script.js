//////////////////
// Primo Esercizio

const bici = [
    { nome: "bici1", peso: 10 },
    { nome: "bici2", peso: 9.4 },
    { nome: "bici3", peso: 7 },
    { nome: "bici4", peso: 7.2 },
    { nome: "bici5", peso: 15 },
    { nome: "bici6", peso: 14 },
    { nome: "bici7", peso: 14.5 },
    { nome: "bici8", peso: 11 },
    { nome: "bici9", peso: 9 },
    { nome: "bici10", peso: 8.7 },
    { nome: "bici11", peso: 13 },
    { nome: "bici12", peso: 12.1 },
    { nome: "bici13", peso: 9.3 },
    { nome: "bici14", peso: 8.2 },
    { nome: "bici15", peso: 10.4 },
]

let PesoBiciPiuLeggera = Infinity;
let biciPiuLeggera = {};

for (let i = 0; i < bici.length; i++) {
    let curBici = bici[i];
    if (curBici.peso < PesoBiciPiuLeggera) {
        PesoBiciPiuLeggera = curBici.peso;
        biciPiuLeggera = curBici;
        // console.log(biciPiuLeggera);
    }
}
console.log(`La bici più leggera è ${biciPiuLeggera.nome}`);
console.log(biciPiuLeggera);


/////////////////////
// Secondo Esercizio
const teams = [
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Juve", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Pro Vercelli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Bologna", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Brescia", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 }
]

for(let i = 0; i<teams.length; i++){
    teams[i].puntiFatti=Math.floor(Math.random()*100)+1;
    teams[i].falliSubiti=Math.floor(Math.random()*50)+1;
}

let arrayFalli = [];
for(let i = 0; i<teams.length; i++){
    let elemento = {nome: teams[i].nome, falliSubiti: teams[i].falliSubiti};
    arrayFalli.push(elemento);
}

console.log(arrayFalli);

