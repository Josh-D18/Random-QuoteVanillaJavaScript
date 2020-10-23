/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * The quotes array 
***/

// This quotes array holds objects. The objects hold detailed information about quotes

const quotes = [
    {
      quote: "You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
      source: 'William W. Purkey',
      citation: 'Becoming an Invitational Leader',
      year: '2002',
      tags: 'Life, Leadership, books, reading'
    },
    {
      quote: 'Never trust anyone who has not brought a book with them.',
      source: 'Lemony Snicket',
      citation: 'Horseradish',
      year: '2007',
      tags: 'wit and wisdom, books, reading'
    },
    {
      quote: 'There are times to stay put, and what you want will come to you, and there are times to go out into the world and find such a thing for yourself',
      source: 'Lemony Snicket',
      citation: 'Horseradish',
      year: '2007',
      tags: 'wit and wisdom, books, reading'
    },
    {
      quote: 'There is some good in this world, and it’s worth fighting for.',
      source: ' J.R.R. Tolkien',
      citation: 'The Two Towers',
      year: '2012',
      tags: 'faramir, lord-of-the-rings, pippin, the-return-of-the-king, the-two-towers'
    },
    {
      quote: 'I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
      source: 'Harper Lee',
      citation: 'To Kill a Mockingbird',
      year: '1960',
      tags: 'better-life-empathy, atticus-finch, courage'
    },

    {
      quote: 'Don’t underestimate me! I don’t quit and I don’t run.',
      source: 'Naruto',
      citation:'',
      year:'',
      tags: 'anime'
    }
];

/***
 * The getRandomQuote function
***/

// This function returns a random quote object
function getRandomQuote(arr){
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}


/***
 * The printQuote function
***/

// This function prints the new quote to the screen
const printQuote = () => {
  let randomQuoteObj = getRandomQuote(quotes);
  let html = `
      <p class="quote">${randomQuoteObj['quote']}</p>
      <p class="source">${randomQuoteObj['source']}`

      // If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.
        if(randomQuoteObj['citation']){
          html += `<span class="citation">${randomQuoteObj['citation']}</span>`
        } else{
            html += `<span class="citation"></span></p>`
        }
              
        // If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string.
        if(randomQuoteObj['year']){
          html += `<span class="year">${randomQuoteObj['year']}</span></p>`
        }

        if(randomQuoteObj['tags']){
          html += `<span class="tags">${randomQuoteObj['tags']}</span></p>`
        }
  changeBgColor();
  return document.getElementById('quote-box').innerHTML = html;
}


// Change Background Color Function. This function updates the background color to a random color.

function changeBgColor(){
  let randColor = Math.floor(Math.random() * 255);
  let randColor2 = Math.floor(Math.random() * 255);
  let randColor3 = Math.floor(Math.random() * 255);
  let style = `rgb(${randColor}, ${randColor2}, ${randColor3})`;
  const body = document.querySelector('body');
  //  Got the setAttribute() method from https://www.w3schools.com/jsref/met_element_setattribute.asp
  return body.style.backgroundColor = style;
} 

// Timing function using the setInterval() method. This method will print a new quote to the page.
function interval(){
  return setInterval(printQuote, 2500);
}
interval();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);