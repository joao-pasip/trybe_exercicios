// const fetch = require('node-fetch');
const API_MOEDA = 'https://api.coincap.io/v2/assets';
const listCoins = document.getElementById('coins-list');

const moeda = async () => {
  
  const coins = await fetch(API_MOEDA)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());
  
  return coins;
}

const setCoins = async () => {
  const coins = await moeda();

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    listCoins.appendChild(newLi);
  });
}

window.onload = () => setCoins();