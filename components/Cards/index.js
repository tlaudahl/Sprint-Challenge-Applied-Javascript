// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    const objArr = Object.values(response.data.articles);
    objArr.forEach(item => {
        for (let i = 0; i < item.length; i++) {
            console.log(item[i]);
            // Main Article Div
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('card');
            // Headline
            const headline = document.createElement('div');
            headline.classList.add('headline');
            headline.textContent = item[i].headline;
            articleDiv.appendChild(headline);
            // Author
            const author = document.createElement('div');
            author.classList.add('author');
            articleDiv.appendChild(author);
            //img container
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-container');
            const img = document.createElement('img');
            img.src = item[i].authorPhoto;
            imgDiv.appendChild(img);
            author.appendChild(imgDiv);
            //Author name
            const nameSpan = document.createElement('span');
            nameSpan.textContent = item[i].authorName;
            author.appendChild(nameSpan);
            cardsContainer.appendChild(articleDiv);
        }
    })
    }).catch(error => {
        console.log(error);
    });