/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * The  `quotes` array contains quote objects, and each object has at least two properties: 'quote'
 * and 'source'.
***/
let quotes = [
  {
  quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source: "Marilyn Monroe"
  },
  {
  quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source: "Mark Twain"
  },
  {
  quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy"
  },
  
    {
  quote: "It is hard to fail, but it is worse never to have tried to succeed.",
    source: "Theodore Roosevelt"
  },
  {
  quote: "At one time or another all normal people have wished their loved ones were dead.",
    source: "Albert Camus",
    citation: "The Stranger",
    year: 1942
  },
  {
  quote: "I'm as mad as hell, and I'm not going to take this anymore!",
    source: "Howard Beale",
    citation: "Network",
    year: 1976,
    tags: "movie"
  },
];


/***
 * The `getRandomQuote` function takes no arguments and returns a random object from the quotes array.
***/
function getRandomQuote() {
  let randomNum = Math.floor (Math.random()*quotes.length);
  return  quotes[randomNum];
    }
/*** 
 * The function randomRGB() takes no arguments and returns a random 
***/
function randomRGB() {
  let randomRGB = Math.floor( Math.random()*256) + 1;
  return randomRGB;
}
/*** 
 * The function changeBackground() takes no arguments and returns a string.
 * The function randomRGB() is called 3 times within the function to get the 
 * random RGB numbers.
***/
function changeBackground() {
  return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()} )`;
}
/***
 * The `printQuote` function takes no arguments, it defines a variable 'html' and 
 * adds to it a string which contains the properties of a random quote. The 'quote' and 
 * 'source' properties are added by default. 
***/

function printQuote(){
let html;
let randomQuote = getRandomQuote(quotes);
html = `<p class="quote"> ${randomQuote.quote} </p>` 
html += `<p class="source"> ${randomQuote.source}`;
/* citation, year and tags are added by conditional statements that check if the properties 
are defined.*/
if (typeof randomQuote.citation !== "undefined") {
  html += `<span class="citation"> ${randomQuote.citation} </span>`;
}
if (typeof randomQuote.year !== "undefined") {
  html += `<span class="year"> ${randomQuote.year} </span>`;
}
if (typeof randomQuote.tags !== "undefined") {
  html += `<span class="citation"> ${randomQuote.tags} </span>`
}
html += `</p>`;

/* The following two lines define a variable for the HTML body
and call the function changeBackground() which
changes the background color of the body every time printQuote()
is called. */

let body = document.querySelector('body');
body.style.backgroundColor = changeBackground();

document.getElementById('quote-box').innerHTML = html;
}
/*The following line sets an interval of 20 seconds, such that
the function printQuote() will be called automatically every 20 seconds.*/
setInterval( function () {printQuote()}, 20000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);