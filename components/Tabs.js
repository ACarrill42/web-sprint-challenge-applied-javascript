// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const URL = axios.get('https://lambda-times-api.herokuapp.com/topics')
const contain = document.querySelectorAll('.tabs')

function topicTab(trend) {
    
    const divs = document.createElement('div')
    divs.classList.add('tab')
    divs.textContent = trend;
    contain.appendChild(divs);

    return divs
}
// topicTab();

// const dispTopic = (event) => {
//     axios.get(URL)
//         .then(res => {
//             res.data.forEach(topic => {
//                 const topics = topics(topic)
//                 contain.appendChild(divs)
//             })
//         })
//         .catch(err => {
//             console.log('error')
//         })
// }