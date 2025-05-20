function Rank (vit, der) {
    
    let saldoVitorias = vit - der;
    let nivel;

if (saldoVitorias < 10){
    nivel = "Ferro"
    
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
       nivel = "Bronze"

}else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"

}else if (saldoVitorias >= 52 && saldoVitorias <= 80) {
        nivel = "Ouro"

}else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante"

}else if (saldoVitorias >= 91 && xp <= 100) {
        nivel = "Lendario"

}else if (saldoVitorias >= 101 ) {
        nivel = "Imortal"
}
    return console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}` )

}

let vit = 87
let der = 26
let rankfinal = Rank(vit, der) 
    console.log(rankfinal)
