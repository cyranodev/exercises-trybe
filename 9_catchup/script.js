const apiInfo = {
  api: 'https://api.ratesapi.io/api/',
  endpoint: 'latest'
}

const url = `${apiInfo.api}${apiInfo.endpoint}`


window.onload = () => {
  setupEventHandlers();  
}

const setupEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);

  const inputText = document.querySelector('#currency-input');
  inputText.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      handleSearchEvent();
    }
  });

  const filterText = document.querySelector('#currency-filter');
  filterText.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      handleSearchEvent();
    }
  });
}

const handleSearchEvent = () => {
  const currencyValue = document.querySelector('#currency-input').value.toUpperCase();
  const number = parseInt(currencyValue.match(/(\d+)/));
  const currency = currencyValue.substring(0, 3);
  const currencyFilter = document.querySelector('#currency-filter').value.toUpperCase();

  if (currencyValue === '') {
    renderEmptyAlert()
  } else if (number) {
    clearList('leaveInput');
    fetchCurrency(currency, currencyFilter, number);
  } else {
    clearList('leaveInput');
    fetchCurrency(currency, currencyFilter);
  }

}



const renderEmptyAlert = () => {
  window.alert('Por favor, insira alguma moeda!');
}

const clearList = (param) => {
  const currencyList = document.querySelector('#currency-list');
  currencyList.innerHTML = '';
  if (param !== 'leaveInput') {
    const inputText = document.querySelector('#currency-input');
    const inputFilter = document.querySelector('#currency-filter');
    inputText.value = '';
    inputFilter.value = '';
  }
}

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', clearList);

function handleBTC (object) {
  const keys = Object.keys(object);
  const result = {};
  keys.forEach(key => {
    result[key] = parseInt(object[key].rate);
  });
  return result;
}

const fetchCurrency = (currency, currencyFilter, number = 1) => {
  let endpoint = '';
  if (currency = 'BTC') {
    endpoint = `https://api.coindesk.com/v1/bpi/currentprice.json`;
  } else if (currencyFilter !== '') {
    endpoint = `${url}?base=${currency}&symbols=${currencyFilter}`;
  } else {
    endpoint = `${url}?base=${currency}`;
  }

  fetch(endpoint)
    .then((response) => response.json())
    .then((object) => {
      if (object.error) {
        throw new Error(object.error);
      } else if (object.chartName) {
        console.log(object.bpi);
        handleRates(handleBTC(object.bpi), number)
      } else {
        handleRates(object.rates, number);
      }
    })
    .catch((error) => handleError(error))
}

const handleError = (errorMessage) => {
  window.alert(errorMessage);
}

const handleRates = (rates, number) => {
  const ratesKeys = Object.keys(rates).sort();
  
  ratesKeys.forEach((key) => {
    const value = rates[key] * number;
    renderRate(key, value);
  })
}

const renderRate = (key, value) => {
  const currencyList = document.querySelector('#currency-list');
  const formattedValue = value.toFixed(2);

  const li = document.createElement('li');
  li.id = key;
  li.innerHTML = `<b>${key}:</b> ${formattedValue} <img src="./assets/trash.png">`;
  const img = li.querySelector('img');
  img.addEventListener('click', handleItemListClick);
  currencyList.appendChild(li);
}

const handleItemListClick = (event) => {
  const clickedCurrency = event.target.parentNode.id;
  const currencyList = document.querySelector('#currency-list');
  const li = document.querySelector(`#${clickedCurrency}`);
  currencyList.removeChild(li);
}