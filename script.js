document.addEventListener("DOMContentLoaded", function() {
  fetchData(); // Fetch data when the page loads
  setInterval(fetchData, 1800000); // Fetch data every 30 minutes
});

function fetchData() {
  const apiKey = 'ZmFmYTU4ZDYtNDlkOC0zOGUxLTg1MzktOWIzNDc2NTZjMWFkLjZjNjZjZTE2LTNlMTktNGFkOS1iYzcxLWE5NjU0ODRjMjJiMA==';
  const apiUrl = 'https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/KD/testcycle/KD-CY-10/summary';

  fetch(`${apiUrl}`, {
      method: 'GET',
      headers: {
          'Authorization': 'AioAuth ' + apiKey,
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      updateUI(data);
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
}

function updateUI(data) {
  const dataElement = document.getElementById('data');
  // Clear previous data
  dataElement.innerHTML = '';
  // Update UI with new data
  for (const key in data) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
      dataElement.appendChild(div);
  }
}
