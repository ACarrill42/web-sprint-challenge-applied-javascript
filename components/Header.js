// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

let head = document.querySelector('.header-container');
function Header() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let h1 = document.createElement('h1');
    let span2 = document.createElement('span');

    div.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');

    span.textContent = 'March 28, 2020';
    h1.textContent = 'Lambda Times';
    span2.textContent ='98 degrees Fahrenheit'; //do not know how to do the degree symbol in VSCode.

    head.appendChild(div);
    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(span2);

    return div;
}

console.log(Header());
