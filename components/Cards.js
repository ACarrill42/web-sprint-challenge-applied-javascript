// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let cardArticles = document.querySelector('.cards-container');

function articles(article) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgCont = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    headline.textContent = article.headline;
    img.src = (article.authorPhoto);
    name.textContent = article.authorName;

    card.addEventListener('click', (e) => {
        console.log(article.headline);
    });

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(img);
    author.appendChild(name);


    return card
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then((res) => {
    const array = res.data.articles
    for (article in array) {
        array[article].forEach((data) => {
        cardArticles.appendChild(articles(data));
        })
    }
    console.log(res);
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log('complete')
})

//final save
//test save
