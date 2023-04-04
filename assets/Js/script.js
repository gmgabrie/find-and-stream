//Needed for Materialize
// $(document).ready(function() {
//     M.updateTextFields();
//   });



var trendingApiUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key='
var trendingApiKey = '768690ea624c6d0cff681d2edcb833a2'

function displayTrending() {
  fetch(trendingApiUrl + trendingApiKey)
  .then(function(response) {
    return response.json();
})
  .then(function(data) {
    console.log(data);
  })
}


displayTrending();