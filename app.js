// Assuming you are using JavaScript (Node.js) for backend

const fetch = require('node-fetch');

const fetchData = async () => {
  try {
    const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON:', error);
    throw error;
  }
};

// Call the fetchData function to get the JSON data
const jsonData = fetchData();
// Assuming you want to store data in an array
const productsArray = [];

// Assuming jsonData is an array of 1000 product records
jsonData.forEach((product) => {
  productsArray.push({
    subcategory: product.Subcategory,
    title: product.Title,
    price: product.Price,
    popularity: product.Popularity,
  });
});
