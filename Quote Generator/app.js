// Code Generator project

// requirements
/**
 * document.querySelector()
 * addEvenListener()
 * Math Object()
 * innerText
 */


// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

// Array of quotes
const quotes = [
    {
        quote : "The purpose of our lives is to be happy.",
        person : "Daniel Lama"
    },
    {
        quote : "Life is what happens when you're busy making other plans." ,
        person : "John Lennon"
    },
    {
        quote : "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        person : "Thomas A. Edison"
    },
    {
        quote :  "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        person : "Steve Jobs"
    },
    {
        quote : "If you want to live a happy life, tie it to a goal, not to people or things.",
        person : "Albert Einstein"
    },
    {
        quote : "Not how long, but how well you have lived is the main thing",
        person : "Seneca"
    },
    {
        quote : "If life were predictable it would cease to be life, and be without flavor.",
        person : "Eleanor Roosvelt"
    },
    {
        quote : "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it",
        person : "Henry Ford"
    },
    {
        quote : "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
        person : "Anonymous"
    },
    {
        quote : "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
        person : "Leo Burnette"
    },
    {
        quote : "Life is not a problem to be solved, but a reality to be experienced.",
        person : "Soren Kierkegaard"
    },
    {
        quote : "The unexamined life is not worth living.",
        person : "Socrates"
    },
    {
        quote : "Turn your wounds into wisdom",
        person : "Oprah Winfrey"
    },
    {
        quote : "I am a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
        person : "Abraham Lincoln"
    }
]

btn.addEventListener("click", () => {
    /**
     * using the floor and the random method of our maths module
     * we will multoply the math.random() * array.length whch will generate a random number between
     * 0 to the total number of quotes in our array
     * and the floor method will round our number down to the nearest while number
     * since the random method generates decimal numbers
     */ 

    let random = Math.floor(Math.random() * quotes.length);

    // Changing the quotes and person
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

 