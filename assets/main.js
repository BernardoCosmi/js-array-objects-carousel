let input = parseInt(prompt("Digita la quantità di nomi e cognomi da inserire:"));
let nomi = [];
let cognomi = [];
const result = document.querySelector('h2')

for(let y=0; y < input; y++){
    let name = prompt("Inserire " + input + " nomi, premendo invio per ognuno di essi")
    nomi.push(name)
}
for(let y=0; y < input; y++){
    let surname = prompt("Inserire " + input + " cognomi, premendo invio per ognuno di essi")
    cognomi.push(surname)
}

let nomiCombinati = [];
for (let i = 0; i < input; i++) {
    let nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
    let cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
    nomiCombinati.push(`${nomeCasuale} ${cognomeCasuale}`);
}
console.log(nomi)
console.log(cognomi)
console.log("Nomi combinati casuali:", nomiCombinati);
result.innerHTML = "Nomi combinati casuali: " + nomiCombinati.join(", ");

