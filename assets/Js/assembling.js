//Needed for Materialize
// $(document).ready(function() {
//     M.updateTextFields();
//   });

let XRapidAPI_Key = 'f9dd7506d0msh3120d98dd5267e1p1d3d4cjsneff3e02fa738'
let XRapidAPI_Host ='streaming-availability.p.rapidapi.com'
var trendingApiUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key='
var trendingApiKey = '768690ea624c6d0cff681d2edcb833a2'
var trendingPosterUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

// variable for main card container section
var cardContainer = document.getElementById('card-container');


// Title case function for search
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

// GABRIEL SECTION : 
//function to call Trending API and create elements with dynamic data based on results
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
  var trendingHeader = document.createElement('h3');
  trendingHeader.innerText = "This Week's Top Trending Movies:";
  cardContainer.appendChild(trendingHeaderDiv);
  trendingHeaderDiv.appendChild(trendingHeader);

// loop to obtain data returned from api
  for (var i=0; i < 5; i++) {

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

  var displayTrendingPoster = document.createElement('img');
  displayTrendingPoster.src = trendingPosterUrl + trendingPoster;
  displayTrendingPoster.id = 'trending-poster';
  trendingCard.appendChild(displayTrendingPoster);

  var displayTrendingTitle = document.createElement('h5');
  displayTrendingTitle.textContent = trendingTitle;
  trendingCard.appendChild(displayTrendingTitle);

  var displayTrendingDate = document.createElement('p');
  displayTrendingDate.textContent = 'Release Date: ' + trendingDate;
  trendingCard.appendChild(displayTrendingDate);

  var displayTrendingOverview = document.createElement('p');
  displayTrendingOverview.textContent = trendingOverview;
  trendingCard.appendChild(displayTrendingOverview);

  // add the red circle with plus sign on each card
  //var redButtonA = document.createElement('a');
  //var redButtonClasses = ['btn-floating', 'halfway-fab', 'waves-effect', 'waves-light', 'red'];
  //redButtonA.classList.add(...redButtonClasses);
  //redButtonA.innerHTML = '<i class="material-icons">add</i>';
  //trendingCard.appendChild(redButtonA);

  //Then, we create a button
  const btn = document.createElement("button");
  //Then, we add it the same as their respective siblings
  btn.className = "click-btn";
  //Now, we add it some text
  btn.innerText = "Click Here";
  //Lastly, append it to the container
  trendingCard.appendChild(btn);

  }
})
}
// call the display trending function on initial page load
displayTrending();



//Needed for Materialize
// $(document).ready(function() {
//     M.updateTextFields();
//   });

// variable for main card container section
var cardContainer = document.getElementById('card-container');

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
  for (var i=0; i < 5; i++) {

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

  var displayTrendingPoster = document.createElement('img');
  displayTrendingPoster.src = trendingPosterUrl + trendingPoster;
  displayTrendingPoster.id = 'trending-poster';
  trendingCard.appendChild(displayTrendingPoster);

  var displayTrendingTitle = document.createElement('h5');
  displayTrendingTitle.textContent = trendingTitle;
  trendingCard.appendChild(displayTrendingTitle);

  var displayTrendingDate = document.createElement('p');
  displayTrendingDate.textContent = 'Release Date: ' + trendingDate;
  trendingCard.appendChild(displayTrendingDate);

  var displayTrendingOverview = document.createElement('p');
  displayTrendingOverview.textContent = trendingOverview;
  trendingCard.appendChild(displayTrendingOverview);


 
  //Then, we create a button
const btn = document.createElement("button");
//Then, we add it the same as their respective siblings
btn.className = "click-btn";
//Now, we add it some text
btn.innerText = "Click Here";
//Lastly, append it to the container
trendingCard.appendChild(btn);

  // add the red circle with plus sign on each card
  //var redButtonA = document.createElement('button');
  //var redButtonA = document.createElement('a');
  //var redButtonClasses = ['btn-floating', 'halfway-fab', 'waves-effect', 'waves-light', 'red'];
  //redButtonA.classList.add('.redButtonClasses');
  //redButtonA.innerHTML = '<i class="material-icons">add</i>';
  //trendingCard.appendChild(redButtonA);



  }
})
}
// call the display trending function on initial page load
displayTrending();

//document.querySelector('#search').addEventListener('click', fectchStreamingInfo()),


//var searchFormEl = document.querySelector('#search');


 document.querySelector('#search').addEventListener('click', event => {
    
    console.log("Hello");
    fetchStreamingInfo();
 });

//document.getElementById('button').addEventListener('click',event => {
  //console.log('Red Button alert')
 //});

 //document.getElementById('#trending-card').addEventListener('click', event => {
  //console.log('Hi, I have  been clicked')
 //}
 
 //)

 //const elements = document.querySelectorAll(".click-btn");
 
 //Then, we loop through those elements
 //for(let i = 0; i < elements.length; i++) {
     //We add eventListener to each element
     //elements[i].addEventListener("click", console.log('hi'));
 //}
 //document.querySelector('.btn').addEventListener('click', showMore)


//function SearchFilm(event) {
//event.preventDefault();

//var searchInputVal = document.querySelector('#search').value;
//}

//if (searchInputVal) {
//console.log('Ihave beeen clicked');

//}

//var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

//location.assign(queryString);


//searchFormEl.addEventListener('submit', Joshua function);


//RedButtonAEl.addEventListener('click', () => console.log('I have been clicked'));

  
// JOSHUA FUNCTION

//Get data from API based on title search
function fetchStreamingInfo() {
   
    //API access info
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'f9dd7506d0msh3120d98dd5267e1p1d3d4cjsneff3e02fa738',
		    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	    }
    };

    //Add input function for search then:
    const searchTitle = document.getElementById('search').value;

    //Fetch request 
    fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=' + searchTitle + '&country=us&show_type=movie&output_language=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    //Set variables to access data ([0] shows data for first movie that comes up in search -> "john wick 4 has 20 results") 
    //Will need to run loop to get each movie and display each card with appropriate data
    let movieTitle = result[0].title;
    let tagline = result[0].tagline;
    let releaseYear = result[0].year;
    let posterImg = result[0].posterURLs[154];
    let minAge = result[0].advisedMinimumAudienceAge;
    let genre = result[0].genres[0].name; //Multiple genres? (result[0].genres[1].name) - create array of genres when multiples
    let imdbRating = result[0].imdbRating;
    let overview = result[0].overview;
    let runtimeMin = result[0].runtime; //Gives movie length in minutes - can convert to HH:MM
    let trailer = result[0].youtubeTrailerVideoLink;
    let directors = result[0].directors;
    let cast = result[0].cast;

}




    //document.querySelector('#search').addEventListener('click', event => {
    //fetchStreamingInfo();
    //console.log("Hello");
    //}
  

    document.querySelector('#search').addEventListener('click', fectchStreamingInfo());


    //var searchFormEl = document.querySelector('#search');











