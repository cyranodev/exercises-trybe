let pCost = 40;
let pPrice = 120;

if (pCost > 0 && pPrice > 0) {
  let profit = (pPrice - (pCost * 1.2)) * 1000;
  console.log('O lucro da empresa com a venda de mil produtos será de',profit,'.');
} else {
  console.log('Erro: valores menores que zero não são aceitos.');
}
  