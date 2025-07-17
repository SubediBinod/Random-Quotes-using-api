const api_url = 'quotes.json';  

function GenerateQuote() {
  fetch(api_url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching local quotes");
      }
      return response.json();
    })
    .then(data => {
      const random = data[Math.floor(Math.random() * data.length)];
      document.getElementById('quoteText').textContent = random.text;
      document.getElementById('authorText').textContent = random.author;
    })
    .catch(error => console.error(error));
}
