const textAreaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');

textAreaEl.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {
    totalCounterEl.innerText = textAreaEl.value.length
}

// The addEventListener() method attaches an event handler to a document.

// document.addEventListener("click", myFunction);

// function myFunction() {
// document.getElementById("demo").innerHTML = "Hello World";

// function is triggered when the user releases a key in the input field.

// The innerText property sets or returns the text content of an element.

// The value property sets or returns the value of the value attribute of a text field.

// The value property contains the
// default value OR the value a user types in (or a value set by a script