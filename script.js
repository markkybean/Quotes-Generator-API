// fetch("https://type.fit/api/quotes")
// .then( random => random.json() )
// .then( quotes =>{
//     quotes.forEach(msg => {
//         document.querySelector("#quotes").innerHTML= `<p>${msg.text}</p>'
//     })
// })
document.getElementById("btnQuotes").addEventListener("click", function() {
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(quotes => {
        // Get a random quote from the array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex].text;

        // Display the random quote in the "quotes" element
        document.querySelector("#quotes").innerHTML = `<h5>"${randomQuote}"</h5>`;
    });
});
