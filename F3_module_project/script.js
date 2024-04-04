
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  // Function to populate the table with data
  function populateTable(data, table) {
    table.innerHTML = ''; // Clear existing table content
    data.forEach(item => {
      const row = `
        <tr>
          <td class="img"><img src="${item.image}"></td>
          <td>${item.name}</td>
          <td>${item.symbol.toUpperCase()}</td>
          <td>$${item.current_price}</td>
          <td>$${item.total_volume}</td>
          <td>${item.price_change_percentage_24h}%</td>
          <td>Mkt Cap: ${item.market_cap}</td>
        </tr>`;
      table.innerHTML += row;
    });
  }
  
  // Function to filter data based on input value
  function searchTable(value, data) {
    const searchTerm = value.toLowerCase();
    return data.filter(item => item.name.toLowerCase().includes(searchTerm));
  }
  
  // Function to sort data by market cap
  function sortByMarketCap(data) {
    return [...data].sort((a, b) => b.market_cap - a.market_cap);
  }
  
  // Function to sort data by price change percentage
  function sortByPriceChange(data) {
    return [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
  }
  
  // Event listener for sorting by market cap
  document.querySelector(".MarketCap").addEventListener("click", async () => {
    try {
      const data = await fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const sortedData = sortByMarketCap(data);
      populateTable(sortedData, document.getElementById("myTable"));
    } catch (error) {
      console.error('Error sorting data by market cap:', error);
    }
  });
  
  // Event listener for sorting by price change percentage
  document.querySelector(".percentage").addEventListener("click", async () => {
    try {
      const data = await fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const sortedData = sortByPriceChange(data);
      populateTable(sortedData, document.getElementById("myTable"));
    } catch (error) {
      console.error('Error sorting data by price change percentage:', error);
    }
  });
  
  // Initial data population when the page loads
  fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    .then(data => populateTable(data, document.getElementById("myTable")))
    .catch(error => console.error('Error initializing data:', error));
  
  // Event listener for input field to filter data
  const inputElement = document.querySelector(".inputContent");
  inputElement.addEventListener("keyup", async (e) => {
    const value = e.target.value;
    try {
      const data = await fetchData('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const filteredData = searchTable(value, data);
      populateTable(filteredData, document.getElementById("myTable"));
    } catch (error) {
      console.error('Error fetching and filtering data:', error);
    }
  });
  