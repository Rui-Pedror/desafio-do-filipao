//Classificador de Héroi usando as estruturas de decisão IF/ELSE IF

let nomeHeroi = "Capitão América";
let quantidadeXp = 10000;

if (quantidadeXp < 1000) {
  console.log(`O, ${nomeHeroi} está no nível de Ferro`);
} else if (quantidadeXp <= 1001 && quantidadeXp >= 2000) {
  console.log(`O, ${nomeHeroi} está no nível Bronze`);
} else if (quantidadeXp <= 2001 && quantidadeXp >= 5000) {
  console.log(`O, ${nomeHeroi} está no nível de Prata`);
} else if (quantidadeXp <= 6001 && quantidadeXp >= 7000) {
  console.log(`O, ${nomeHeroi} está no nível de Ouro`);
} else if (quantidadeXp <= 7001 && quantidadeXp >= 8000) {
  console.log(`O, ${nomeHeroi} está no nível Platina`);
} else if (quantidadeXp <= 8001 && quantidadeXp >= 9000) {
  console.log(`O, ${nomeHeroi} está no nível Ascendente`);
} else if (quantidadeXp <= 9001 && quantidadeXp >= 10000) {
  console.log(`O, ${nomeHeroi} está no nível Imortal`);
} else {
  quantidadeXp >= 10001;
  console.log(`O, ${nomeHeroi} está no nível Radiante`);
}


