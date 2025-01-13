document.getElementById("btnQuotes").addEventListener("click", function () {
  fetch("https://dummyjson.com/quotes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the entire response to see the structure
      const quotes = data.quotes; // Extract the `quotes` array from the response

      // Get a random quote from the array
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex].quote; // Correct property for quote text
      const randomAuthor = quotes[randomIndex].author; // Get the author

      // Display the random quote and author in the "quotes" element
      document.querySelector(
        "#quotes"
      ).innerHTML = `<h5>"${randomQuote}"</h5><p>- ${randomAuthor}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching quotes:", error);
      document.querySelector("#quotes").innerHTML =
        "<p>Failed to load quotes. Please try again later.</p>";
    });
});
