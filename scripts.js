let i = 1; // declare 3 vars to hold the values
let j = 1;
let k = 0;
// var to build the html
let print = "The fibonacci numbers under 500 are ";
// while all the counters are under 500
while (i<500 && j<500 && k<500) {
    i = j + k; // i honestly guessed on the order these needed to be in and i got it right the first time. since the fibonacci sequence is "each number is the sum of the previous two numbers" i needed to set this up to sqeuentially add to their own values in the right order of the previous numbers. 
    j = i + k;
    k = i + j;
    if(i<500){ // then here I had to make it add the new values to the html builder in the right order. 
        print+= i + ", ";
    }
    if(j<500){
        print+= j + ", ";
    }
    if(k<500){
        print+= k + ", ";
    }
}

let divvy = document.getElementById("fibby");
fibby.innerHTML = print;