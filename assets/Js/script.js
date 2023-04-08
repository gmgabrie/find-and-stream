//Needed for Materialize
// $(document).ready(function() {
//     M.updateTextFields();
//   });

//GLOBAL VARIABLES
let XRapidAPI_Key = 'f9dd7506d0msh3120d98dd5267e1p1d3d4cjsneff3e02fa738';
let XRapidAPI_Host ='streaming-availability.p.rapidapi.com';
var trendingApiUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
var trendingApiKey = '768690ea624c6d0cff681d2edcb833a2';
var trendingPosterUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

//Global data variables for search
var movieTitle = '';
var releaseYear = '';
var posterImg = '';
var overview = '';
var streamingOptions = '';
var trendingCard ='';
var cardImageDiv = '';
var trendingMovieInfo = '';

// variable for button to view trending movies
var trendingBtn = document.getElementById('trending-button');

// variable for main card container section
var cardContainer = document.getElementById('card-container');
var watchlistEl = document.getElementById('watchlist');

//Set variable for search term
var searchTitle = '';

// function to call Trending API and create elements with dynamic data based on results
function displayTrending() {
    fetch(trendingApiUrl + trendingApiKey)
    .then(function(response) {
      return response.json();
  })
    .then(function(data) {
      // console.log(data);
  
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
    // console.log(trendingTitle, trendingPoster, trendingOverview, trendingDate);
  
    // create dynamic card elements to display data for each movie
    trendingCard = document.createElement('div');
    trendingCard.id = 'trending-card';
    // displayTrendingPoster.src = trendingPosterUrl + trendingPoster;
    trendingCard.style.backgroundImage = "url("+trendingPosterUrl + trendingPoster+")"
    trendingCard.classList.add('card');
  
    cardContainer.appendChild(trendingCard);
  
  //create separate div for movie poster image and red button

    cardImageDiv = document.createElement('div');
    cardImageDiv.classList.add('card-image');
    cardImageDiv.id = 'card-image-div';
    trendingCard.appendChild(cardImageDiv);
  
    var displayTrendingPoster = document.createElement('img');
    displayTrendingPoster.src = trendingPosterUrl + trendingPoster;
    displayTrendingPoster.id = 'trending-poster';
    cardImageDiv.appendChild(displayTrendingPoster);
  
    // add the red circle with plus sign on each card
    var redButtonA = document.createElement('a');
    var redButtonClasses = ['btn-floating', 'halfway-fab', 'waves-effect', 'waves-light', 'red', 'watchlistAddBtn'];
    redButtonA.classList.add(...redButtonClasses);
    redButtonA.innerHTML = '<i class="material-icons">add</i>';
    // cardImageDiv.appendChild(redButtonA);
       trendingCard.appendChild(redButtonA);
       $(".watchlistAddBtn").off("click").on("click", function (){
        watchlistAdd(this)
       })
  
  //created seperate div for movie info

    trendingMovieInfo = document.createElement('div');
    trendingMovieInfo.classList.add("trendingMovieInfo")
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

const container = document.getElementById("card-container");

var watchlistAdd = function(this_btn){
 
    // save to the watch list
    var movieTitle = $(this_btn).parent().find(".trendingMovieInfo h5").text();

    var savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];

    // prevent dup watchlist
    var movieTitleExists = false
   if (savedMovies.length > 0 ){
        for (i = 0; i < savedMovies.length; i++){
          if (savedMovies[i] == movieTitle){
            movieTitleExists = true
          }
        }
      }
      if (movieTitleExists == false){
       savedMovies.push(movieTitle);
        console.log(savedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      }
    
        displayWatchlist();
  
};

function displayWatchlist() {
  watchlistEl.innerHTML = '';
  var savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
  savedMovies.forEach(movie => {
    var titleEl = document.createElement('div');
    var aElement = document.createElement('a');
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add("btn-floating", "waves-effect", "waves-light", "red", "watchlistX")
    deleteBtn.textContent = 'X';
    titleEl.appendChild(aElement);
    titleEl.appendChild(deleteBtn);
    titleEl.classList = 'collection-item watchlistItem';
    aElement.textContent = movie;
    watchlistEl.append(titleEl);
  });
}

watchlistEl.addEventListener("click", function(e) {
  //console.log(e.target.nodeName);
  if (e.target.nodeName === 'BUTTON') {
    var movieTitle = e.target.previousSibling.textContent;
    console.log(movieTitle);
    var savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
    var filteredMovies = savedMovies.filter(word => word != movieTitle);
    console.log(filteredMovies);
    localStorage.setItem('savedMovies', JSON.stringify(filteredMovies));
    displayWatchlist();
  } else if (e.target.nodeName === 'A') {
    document.getElementById('search').value = e.target.textContent;
    getStreamingInfo();
  }
})

displayWatchlist();

 document.querySelector('#searchForm').addEventListener('submit', event => {

    searchTitle = document.getElementById('search').value;
    
    event.preventDefault();
    getSearchedMovie();
 });
   

//Get data from API based on title search
function getSearchedMovie() {

  
  //Clear trending movie data in cards
  cardContainer.replaceChildren('');
  trendingCard.replaceChildren('');
  cardImageDiv.replaceChildren('');
  trendingCard.replaceChildren('');
  trendingMovieInfo.replaceChildren('');
   
  //API access info
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f9dd7506d0msh3120d98dd5267e1p1d3d4cjsneff3e02fa738',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

  //Fetch request 
  fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=' + searchTitle + '&country=us&show_type=movie&output_language=en', options)
	.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    //Loop through results and display data in cards
    for (var i=0; i < 10; i++) {
  
    movieTitle = data.result[i].title;
    releaseYear = data.result[i].year;
    posterImg = data.result[i].posterURLs[185];
    overview = data.result[i].overview;
    var streamingOptions = data.result[i].streamingInfo.us;
    if (streamingOptions === undefined) {
      continue;
    }
    var streamingKeys = Object.keys(streamingOptions);
    
    // create dynamic card elements to display data for each movie
    trendingCard = document.createElement('div');
    trendingCard.id = 'trending-card';
    trendingCard.classList.add('card');
    cardContainer.appendChild(trendingCard);
  
  //create separate div for movie poster image and red button
    var cardImageDiv = document.createElement('div');
    cardImageDiv.classList.add('card-image');
    cardImageDiv.id = 'card-image-div';
    trendingCard.appendChild(cardImageDiv);
  
    var displayMoviePoster = document.createElement('img');
    displayMoviePoster.src = posterImg;
    displayMoviePoster.id = 'trending-poster';
    cardImageDiv.appendChild(displayMoviePoster);
  
    // add the red circle with plus sign on each card
    var redButtonA = document.createElement('a');
    var redButtonClasses = ['btn-floating', 'halfway-fab', 'waves-effect', 'waves-light', 'red', 'watchlistAddBtn'];
    redButtonA.classList.add(...redButtonClasses);
    redButtonA.innerHTML = '<i class="material-icons">add</i>';
       trendingCard.appendChild(redButtonA);
       $(".watchlistAddBtn").off("click").on("click", function (){
        watchlistAdd(this)
       })
  
  //created seperate div for movie info
    var movieInfo = document.createElement('div');
    movieInfo.classList.add("trendingMovieInfo")
    trendingCard.appendChild(movieInfo);
  
    var displayMovieTitle = document.createElement('h5');
    displayMovieTitle.textContent = movieTitle;
    movieInfo.appendChild(displayMovieTitle);
  
    var displayMovieDate = document.createElement('p');
    displayMovieDate.textContent = 'Release Date: ' + releaseYear;
    movieInfo.appendChild(displayMovieDate);
  
    var displayMovieOverview = document.createElement('p');
    //Limit overview length
    function limit (string = '', limit = 0) {
      return string.substring(0, limit);
    }
    displayMovieOverview.textContent = limit(overview, 140);
    movieInfo.appendChild(displayMovieOverview);

    var streamingListHeader = document.createElement('p');
    streamingListHeader.innerHTML = 'Streaming Options:';
    movieInfo.appendChild(streamingListHeader);

    var displayStreamingInfo = document.createElement('ul');
    //Organize streaming options into a list (max 5 options)
    for (a = 0; a < streamingKeys.length; a++) {
      var listItem = document.createElement('li');
      listItem.innerText = streamingKeys[a];
      displayStreamingInfo.appendChild(listItem);
      movieInfo.appendChild(displayStreamingInfo);
      }
    }
  })
}
// adding a theme
var lightDarkModeToggle = function(){
    let isLightMode = document.body.classList.contains("lightMode");
    setlightModeDarkMode(!isLightMode)
}

var setlightModeDarkMode = function(isLightMode = null){
    if (isLightMode === null){
    let isDefaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    let storageMode = localStorage.getItem("lightDarkMode")
    if (storageMode !== null){
      // set from storage
      if (storageMode === "lightMode"){
        isLightMode = true
      } else{
        isLightMode = false
      }
    } else if (storageMode === null && isDefaultDark){
      //set Dark Mode
      isLightMode = false
    } else {
      //set Light Mode
      isLightMode = true
    }
  }
  if (!isLightMode){
    //change to darkMode
    document.body.classList.remove("lightMode")
    document.body.classList.add("darkMode")
    document.getElementById("lightDarkModeToggle").innerHTML = "Light Mode"
    localStorage.setItem("lightDarkMode", "darkMode")
  } else {
    //Change to lightMode
    document.body.classList.remove("darkMode")
    document.body.classList.add("lightMode")
    document.getElementById("lightDarkModeToggle").innerHTML = "Dark Mode"
    localStorage.setItem("lightDarkMode", "lightMode")
  }
}
// needed for materialize modal
$(document).ready(function(){
  $('.modal').modal();
  $("#lightDarkModeToggle").on("click", lightDarkModeToggle)
  setlightModeDarkMode()
});