// Function to fetch books data from the API
function fetchBooksData() {
    return fetch('https://upadhayay.github.io/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => console.error('Fetching Error:', error));
  }
  
  // Function to filter and log published books titles
  function processBooksData(booksData) {
    return new Promise((resolve, reject) => {
      if (!booksData || !booksData.books) {
        reject('Invalid books data');
      } else {
        const publishedBooks = booksData.books.filter(book => book.published);
        resolve(publishedBooks);
      }
    });
  }
  
  // Using the functions to fetch and process books data
  fetchBooksData()
    .then(booksData => {
      // Once we have the fetched data, process it to find published books
      return processBooksData(booksData);
    })
    .then(publishedBooks => {
      // Log the titles of the published books
      console.log('Published Books Titles:');
      publishedBooks.forEach(book => console.log(book.title));
    })
    .catch(error => {
      // Handle any errors in the process
      console.error('An error occurred:', error);
    });