const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";

    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;

    btnEl.innerText = "Get new quote";
    btnEl.disabled = false;

    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error ocurred, please try again later!";
    authorEl.innerText = "";
    btnEl.innerText = "Get quote";
    btnEl.disabled = false;
  }
}

btnEl.addEventListener("click", getQuote);
