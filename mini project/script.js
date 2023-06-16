
// Simple quotes data
const quotes = [
    {
        content:"It's not about possible or impossible, I'm doing it because i want to.",
        author: "-Luffy"
    },
    {
        content: "In order to grow your audience you must batray their expectations.",
        author: "-Hayo Miyazaki"
    },
    {
        content: "You can fly even higher",
        author: "-Tobia kageyama"
    },
    
    {
        content: "I wanted to tell you that...Wherever you may end up in this world,Iwill be searching for you.",
        author: "-Taki Tachibana"
    },
    ,
    {
        content: "Beleive in your own power.",
        author: "-Mikasa Ackerman"
    },
    
    {
        content: "Sometimes, the questions are complicated.And the answer are simple.",
        author: "-L Lawliet"
    },
    
    {
        content: "Live...and be free.From the bottom of my heart ,Ilove you.",
        author: "-Gilbert Bougainvillea"
    },
    // Add more quotes as needed
];
const copyBtn = document.querySelector(".fa-copy");
const heartBtn = document.querySelector(".fa-heart");
let currentQuoteIndex = 0;
let favoriteQuotes = [];

// Function to get a random quote
function getRandomQuote() {
    const quote = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    return quote;
}

// Function to display a new quote
function displayQuote() {
    const quote = getRandomQuote();
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    quoteElement.textContent = quote.content;
    authorElement.textContent = quote.author;
}

// Event listener for the "New Quote" button
const newQuoteBtn = document.getElementById("new-quote-btn");
newQuoteBtn.addEventListener("click", displayQuote);

// Event listener for the "Favorite" button
heartBtn.addEventListener("click", addToFavorites);
// event listener for the "copy" button 
copyBtn.addEventListener("click", ()=>{
    const quoteText = document.getElementById("quote").textContent;
    navigator.clipboard.writeText(quoteElement.innerText);
});
// Function to add the current quote to favorites
function addToFavorites() {
    const quote = quotes[currentQuoteIndex - 1];
    if (!favoriteQuotes.includes(quote)) {
        favoriteQuotes.push(quote);

        const favoriteQuotesList = document.getElementById("favorite-quotes-list");
        const listItem = document.createElement("li");
        listItem.textContent = `${quote.content} - ${quote.author}`;
        favoriteQuotesList.appendChild(listItem);
    }
}

// Initial quote display
displayQuote();
