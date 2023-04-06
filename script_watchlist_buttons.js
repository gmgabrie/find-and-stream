//Search API Variables
let movieTitle = '';
let tagline = '';
let releaseYear = '';
let posterImg = '';
let minAge = '';
let genre = '';
let imdbRating = '';
let overview = '';
let runtimeMin = '';
let trailer = '';
let directors = '';
let cast = '';
//Search Availability API 

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
    const searchTitle = document.getElementById('searchBtn').value;

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

//Watchlist Button Functionality

// let watchListItem = document.getElementsByClassName('watchlist-item');
let addBtn = document.querySelectorAll('.watchlist-btn');

//Once api is implemented this function will add the title name of the movie selected to the watchlist
//
for (i of addBtn) {
    i.addEventListener('click', function () {
        const newItem = document.createElement('a');
    const newItemText = document.createTextNode(movieTitle);
    newItem.appendChild(newItemText);
    document.getElementById('watchlist').appendChild(newItem);
    //Applies Materialize CSS to the new element
    newItem.className = "collection-item"
    console.log('Watchlist function works')
    }) 
};