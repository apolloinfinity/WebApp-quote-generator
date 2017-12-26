'use strict';

/*
I want to create this project just using vanilla javascript. FreeCodeCamp does use jQuery a lot for the projects but I feel that jquery
is not necessary for this project and misses on some of the points of how javascript truly works. 

1. Create a JSON object
2. Parse that JSON and tested to see it workss correctly
3. Create an object or a function that randomnizes the JSON file.
4. Create an object that grabs the DOM elements and sends the random quote to the view. 
5. I could always do this project with Angular but what's the fun in that?!
*/

//This is just an example on how I can create a randomnizer.

// var arr = ['a', 'b', 'c', 'd', 'e'];
/*
var randomArr = arr[Math.floor(arr.length * Math.random())];
console.log(randomArr);
*/
// var quote = document.getElementById("quote");

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            var parseQ = JSON.parse(this.responseText);
            document.getElementById("quote");

        }
    };
    xhttp.open("GET", "quotes.json", true);
    xhttop
}

// var el = document.getElementById("quote");

// var obj = JSON.parse()



/*
(function() {
    var quote = document.getElementById("quote");

    function randomArr(){
      return arr[Math.floor(arr.length * Math.random())];
    }

    var btn = document.getElementById("random").addEventListener("click", function(){
        quote.innerText = randomArr();
    });

}());
*/