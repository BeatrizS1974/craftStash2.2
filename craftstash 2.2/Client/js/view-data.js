var data = [
  {"productDescription":"Distress Oxide","color":"Blue Lagoon","manufacturer":"Ranger","productType":"Ink Pad","location":"1c","quantity":"1"},
  {"productDescription":"Distress Oxide","color":"Kitsch Flamingo","manufacturer":"Ranger","productType":"Ink Pad","location":"2c","quantity":"1"},
  {"productDescription":"Acrylic Paint","color":"Gold","manufacturer":"Ali Edwards","productType":"Paint","location":"3","quantity":"1"},
  {"productDescription":"Acrylic Paint","color":"Red","manufacturer":"Ali Edwards","productType":"Paint","location":"3","quantity":"2"},
  {"productDescription":"Creative FX","color":"Gold Glaze","manufacturer":"American Crafts","productType":"Glaze","location":"4c","quantity":"2"},
  {"productDescription":"Solar Paste","color":"Royal Flush","manufacturer":"Simon Hurley","productType":"Paste","location":"3A","quantity":"1"},
  {"productDescription":"Lunar Paste","color":"Clear Skies","manufacturer":"Simon Hurley","productType":"Paste","location":"3A","quantity":"1"}
];

// Function to populate the table with data
function populateTable() {
  const tableBody = document.querySelector("#productTable tbody");
  tableBody.innerHTML = ""; // Clear the table before repopulating

  // Iterate over the data array and append rows to the table
  data.forEach(product => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${product.productDescription}</td>
          <td>${product.color}</td>
          <td>${product.manufacturer}</td>
          <td>${product.productType}</td>
          <td>${product.location}</td>
          <td>${product.quantity}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Function to add a new record to the data array
function addNewRecord(productDescription, color, manufacturer, productType, location, quantity) {
  data.push({
      productDescription: productDescription,
      color: color,
      manufacturer: manufacturer,
      productType: productType,
      location: location,
      quantity: quantity
  });
  populateTable(); // Refresh the table after adding the new record
}

// Call the populateTable function when the page loads to display the data
document.addEventListener("DOMContentLoaded", function() {
  populateTable();
});