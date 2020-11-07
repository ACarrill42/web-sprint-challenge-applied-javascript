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

function Header() {
    const container = document.querySelector('.header-container');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span')

    div.classList.add('header');
    span.classList.add('date');
    span2.classList.add('temp');

    span.textContent = 'March 28, 2020';
    h1.textContent = 'Lambda Times';
    span2.textContent = '98 degrees F';

    container.appendChild(div);
    container.appendChild(span);
    container.appendChild(h1);
    container.appendChild(span2);

    return container;
}
Header();
