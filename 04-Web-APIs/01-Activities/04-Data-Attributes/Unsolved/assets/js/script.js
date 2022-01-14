var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  console.log(element);
  //if the event target element has text in it, then
  //remove it
  if (element.textContent) {
    element.textContent = '';
  } else {
    //get the number from the event target element's
    //data attribute and make it the element's
    //textContent
    element.textContent = element.dataset.number;
  }
});
