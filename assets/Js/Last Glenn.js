//Needed for Materialize
// $(document).ready(function() {
//     M.updateTextFields();
//   });

// variable for main card container section
var cardContainer = document.getElementById('card-container');

// variable for button to view trending movies
var trendingBtn = document.getElementById('trending-button');

// variables for trending API URL, key and poster URL
var trendingApiUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key='
var trendingApiKey = '768690ea624c6d0cff681d2edcb833a2'
var trendingPosterUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

// function to call Trending API and create elements with dynamic data based on results
function displayTrending() {
  fetch(trendingApiUrl + trendingApiKey)
  .then(function(response) {
    return response.json();
})
  .then(function(data) {
    console.log(data);

  // create header/title for "this weeks top trending movies"
  var trendingHeaderDiv = document.createElement('div');
  trendingHeaderDiv.id = 'trending-header-div';
  var trendingHeaderClasses = ['col', 's12'];
  trendingHeaderDiv.classList.add(...trendingHeaderClasses);
  var trendingHeader = document.createElement('h3');
  trendingHeader.innerText = "This Week's Top Trending Movies:";
  cardContainer.appendChild(trendingHeaderDiv);
  trendingHeaderDiv.appendChild(trendingHeader);

// loop to obtain data returned from api
  for (var i=0; i < 10; i++) {

  var trendingTitle = data.results[i].original_title;
  var trendingPoster = data.results[i].poster_path;
  var trendingOverview = data.results[i].overview;
  var trendingDate = data.results[i].release_date;
  console.log(trendingTitle, trendingPoster, trendingOverview, trendingDate);

  // create dynamic card elements to display data for each movie
  var trendingCard = document.createElement('div');
  trendingCard.id = 'trending-card';
  trendingCard.classList.add('card');

  cardContainer.appendChild(trendingCard);

//create separate div for movie poster image and red button
  var cardImageDiv = document.createElement('div');
  cardImageDiv.classList.add('card-image');
  cardImageDiv.id = 'card-image-div';
  trendingCard.appendChild(cardImageDiv);


  var displayTrendingPoster = document.createElement('img');
  displayTrendingPoster.src = trendingPosterUrl + trendingPoster;
  displayTrendingPoster.id = 'trending-poster';
  cardImageDiv.appendChild(displayTrendingPoster);

  // add the red circle with plus sign on each card
  var redButtonA = document.createElement('a');
  var redButtonClasses = ['btn-floating', 'halfway-fab', 'waves-effect', 'waves-light', 'red'];
  redButtonA.classList.add(...redButtonClasses);
  redButtonA.innerHTML = '<i class="material-icons">add</i>';
  cardImageDiv.appendChild(redButtonA);

//created seperate div for movie info
  var trendingMovieInfo = document.createElement('div');
  trendingCard.appendChild(trendingMovieInfo);

  var displayTrendingTitle = document.createElement('h5');
  displayTrendingTitle.textContent = trendingTitle;
  trendingMovieInfo.appendChild(displayTrendingTitle);

  var displayTrendingDate = document.createElement('p');
  displayTrendingDate.textContent = 'Release Date: ' + trendingDate;
  trendingMovieInfo.appendChild(displayTrendingDate);

  var displayTrendingOverview = document.createElement('p');
  displayTrendingOverview.textContent = trendingOverview;
  trendingMovieInfo.appendChild(displayTrendingOverview);

  }
})
}
// call the display trending function on initial page load
displayTrending();

// Event Listener for "view trending movies" button which clears data in card container and calls displayTrending function
trendingBtn.addEventListener("click", function clearData() {
  cardContainer.replaceChildren();
  displayTrending();
});