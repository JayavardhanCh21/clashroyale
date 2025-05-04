// Create a new instance of the XMLHttpRequest
var xhr = new XMLHttpRequest();
// Initialize it with the HTTP method you want to use and the URL of the API
xhr.open('GET', 'https://upadhayay.github.io/db.json', true);

// Specify what should happen when the request state changes
xhr.onreadystatechange = function () {
  // Check if the request is done (readyState 4 means done)
  if (xhr.readyState == 4) {
    // Check if the request was successful (status 200)
    if(xhr.status == 200) {
      // Parse the JSON response
      var data = JSON.parse(xhr.responseText);
      // Log the parsed data to the console
      console.log(data);
    } else {
      // If the status code is not 200, log an error with the status code
      console.error('Error:', xhr.statusText);
    }
  }
};

xhr.send();