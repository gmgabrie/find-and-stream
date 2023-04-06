var cardContainer = document.getElementById('card-container');
var watchlistEl = document.getElementById('watchlist');

const container = document.getElementById("card-container");

container.addEventListener("click", function(e){
  if(e.target.nodeName === "I") {
    // save to the watch list
    var movieTitle = e.target.parentElement.parentElement.firstChild.nextSibling.textContent;

    var savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];

    savedMovies.push(movieTitle);
    console.log(savedMovies);
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    displayWatchlist();
  } else {
    console.log('You did not click an icon element tag')
  }
});

function displayWatchlist() {
  watchlistEl.innerHTML = '';
  var savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
  savedMovies.forEach(movie => {
    var titleEl = document.createElement('div');
    var aElement = document.createElement('a');
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    titleEl.appendChild(aElement);
    titleEl.appendChild(deleteBtn);
    titleEl.classList = 'collection-item';
    aElement.textContent = movie;
    watchlistEl.append(titleEl);
  });
}

watchlistEl.addEventListener("click", function(e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName === 'button') {
    var movieTitle = e.target.previousSibling.textContent;
    console.log(movieTitle);
    var savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
    var filteredMovies = savedMovies.filter(word => word != movieTitle);
    console.log(filteredMovies);
    localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
    displayWatchlist();
  } else if (e.target.nodeName === 'A') {
    document.getElementById('search').value = e.target.textContent;
    fetchStreamingInfo();
  }
})

displayWatchlist();
// call the display trending function on initial page load
displayTrending();




// TO DO TODAY  EVENT LISTENER TO FIRE  function fetchStreamingInfo()  ///  DONE

 document.querySelector('#searchForm').addEventListener('submit', event => {
    event.preventDefault();
    fetchStreamingInfo();
 });