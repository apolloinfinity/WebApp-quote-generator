'use strict';

//This is just an example on how I can create a randomnizer.

// var arr = ['a', 'b', 'c', 'd', 'e'];
/*
var randomArr = arr[Math.floor(arr.length * Math.random())];
console.log(randomArr);
*/
// var quote = document.getElementById("quote");

var arr = ["Computers make excellent and efficient servants, but I have no wish to serve under them.",
    "Insufficient facts always invite danger.",
    "In critical moments, men sometimes see exactly what they wish to see.",
    "Without followers, evil cannot spread.",
    "When you eliminate the impossible, whatever remains, however improbable, must be the truth.",
    "The needs of the many outweigh the needs of the few.",
    "After a time, you may find that having is not so pleasing a thing after all as wanting.",
    "When there is no emotion, there is no motive for violence.",
    "Change is the essential process of all existence.",
    "Logic is the beginning of wisdom, not the end of it.",
    "I see no logic in wanting to worship a deity that demands you to live in a perpetual state of fear.",
    "Physical reality is consistent with universal laws. Where the laws do not operate, there is no reality.",
    "I have and always shall be your friend.",
    "Your highly emotional is most illogical",
    "Live long and prosper."
];



(function() {
    var quote = document.getElementById("quote");

    function randomArr(){
      return arr[Math.floor(arr.length * Math.random())];
    }

    var btn = document.getElementById("random").addEventListener("click", function(){
        quote.innerText = randomArr();
    });

}());


/*
The quote generator works but now it seems I may need to use a for loop so I can use the i variable to compare
the randomArr to itself. This way if the generator is the same as the current quote, it can invoke the randomArr variable
again.

*/
