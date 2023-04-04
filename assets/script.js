//Search Availability API 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9dd7506d0msh3120d98dd5267e1p1d3d4cjsneff3e02fa738',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

//Get data from API based on title search
function fetchStreamingInfo() {

    //Add input function for search then:
    let searchTitle = //Get search input with: document.getElementById('search box id here').value;

    fetch('https://streaming-availability.p.rapidapi.com/v2/search/title?title=' + searchTitle + '&country=us&show_type=movie&output_language=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}