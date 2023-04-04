
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

// search button

var searchFormEl = document.querySelector('#search');

function searchFilm(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search').value;
 

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }
  else (fetchStreamingInfo)
  return



  //var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  //location.assign(queryString);

}


//search second
searchFormEl.addEventListener('submit', handleSearchFormSubmit);


$( "#search" ).click(fetchStreamingInfo()) 
{
    console.log(response) ;

  };

  document.querySelector('#search').addEventListener('click', event => {
    console.log(fetchStreamingInfo)
  })


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




//<button id="searchBtn" type="button" value="john wick 4" onclick="fetchStreamingInfo()">Log streaming info</button>


$( "#search" ).click(fetchStreamingInfo()) 
{
    console.log(response) ;

  };

  document.querySelector('#search').addEventListener('click', event => {
    console.log(fetchStreamingInfo)
  })