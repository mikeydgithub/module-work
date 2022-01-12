var count = 0; //part of the global scope

// TODO: Add a comment describing the functionality of the following document.querySelector() methods:
var incrementEl = document.querySelector('#increment'); //button for increment
var decrementEl = document.querySelector('#decrement'); //button for deccrement
var countEl = document.querySelector('#count'); //current count

// TODO: Add a comment describing the functionality of the following code:
function setCounterText() {
  countEl.textContent = count;
} //sets up counter to increase or decrease


// TODO: Add a comment describing the functionality of the following event listener:
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
}); //click increases counter by 1.

// TODO: Add a comment describing the functionality of the following event listener:
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
if (count > 0) {
    count--;
    setCounterText();
} //click decreases counter by 1.
});