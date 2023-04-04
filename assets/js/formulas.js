
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}





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







function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}


//  CURRENT DAY DISPLAY  //

                                    //add section to hold current day details
                                    var currentWeatherEl = $('<section>').attr({
                                        id: 'current-weather'
                                    })
                                // get the weather icon from city
                                var weatherIcon = weatherData.current.weather[0].icon;
                                var cityCurrentWeatherIcon = weatherIconUrl + weatherIcon + '.png';

                                // create h2 to display city + current day + current weather icon
                                var currentWeatherHeadingEl = $('<h2>').text(city + ' (' + currentDay + ')');
                                // create img element to display icon
                                var iconImgEl = $('<img>').attr({
                                        id: 'current-weather-icon',
                                        src: cityCurrentWeatherIcon,
                                        alt: 'Weather Icon'
                                    })
                                //create list of current weather details
                                var currWeatherListEl = $('<ul>')

                                var currWeatherDetails = ['Temp: ' + weatherData.current.temp + ' °F', 'Wind: ' + weatherData.current.wind_speed + ' MPH', 'Humidity: ' + weatherData.current.humidity + '%', 'UV Index: ' + weatherData.current.uvi]

                                for (var i = 0; i < currWeatherDetails.length; i++) {
                                    //create an indiviual list item and append to ul

                                    // run conditional to assign background color to UV index depending how high it is
                                    if (currWeatherDetails[i] === 'UV Index: ' + weatherData.current.uvi) {

                                        var currWeatherListItem = $('<li>').text('UV Index: ')

                                        currWeatherListEl.append(currWeatherListItem);

                                        var uviItem = $('<span>')
                                            .text(weatherData.current.uvi);

                                        if (uviItem.text() <= 2) {
                                            uviItem.addClass('favorable');
                                        } else if (uviItem.text() > 2 && uviItem.text() <= 7) {
                                            uviItem.addClass('moderate');
                                        } else {
                                            uviItem.addClass('severe');
                                        }

                                        currWeatherListItem.append(uviItem);

                                        //create every list item that isn't uvIndex
                                    } else {
                                        var currWeatherListItem = $('<li>').text(currWeatherDetails[i])
                                        //append to ul
                                        currWeatherListEl.append(currWeatherListItem);
                                    }

                                }
                                 //append curr weather section to colforcities2 before #five-day
                                 $('#five-day').before(currentWeatherEl);
                                 //append current weather heading to current weather section
                                 currentWeatherEl.append(currentWeatherHeadingEl);
                                 //append icon to current weather header
                                 currentWeatherHeadingEl.append(iconImgEl);
                                 //append ul to current weather
                                 currentWeatherEl.append(currWeatherListEl);

                                 //  CURRENT DAY DISPLAY STOP //

                                 // 5-DAY FORECAST DISPLAY //

                                 //create h2 header for 5-day forecast
                                 var fiveDayHeaderEl = $('<h2>').text('5-Day Forecast:').attr({
                                         id: 'five-day-header'
                                     })

                                 //append 5 day forecast header to colforcities2 after current weather section
                                 $('#current-weather').after(fiveDayHeaderEl)

                                 // create array for the dates for the next 5 days

                                 var fiveDayArray = [];

                                 for (var i = 0; i < 5; i++) {
                                     let forecastDate = dayjs().add(i + 1, 'days').format('M/DD/YYYY');

                                     fiveDayArray.push(forecastDate);
                                 }

                                 // for each date in the array create a card displaying temp, wind and humidity
                                 for (var i = 0; i < fiveDayArray.length; i++) {
                                     // create a div for each card
                                     var cardSectionEl = $('<section>').addClass('colforcities3');

                                     // create div for the card body
                                     var cardBodySectionEl = $('<section>').addClass('card-body');

                                     // create the card-title
                                     var cardTitleEl = $('<h3>').addClass('card-title').text(fiveDayArray[i]);

                                     // create the icon for current day weather
                                     var forecastIcon = weatherData.daily[i].weather[0].icon;

                                     var forecastIconEl = $('<img>').attr({src: weatherIconUrl + forecastIcon + '.png',alt: 'Weather Icon' });

                                     // create card text displaying weather details
                                     var currWeatherDetails = ['Temp: ' + weatherData.current.temp + ' °F', 'Wind: ' + weatherData.current.wind_speed + ' MPH', 'Humidity: ' + weatherData.current.humidity + '%', 'UV Index: ' + weatherData.current.uvi]
                                     //create temp
                                     var tempEL = $('<p>').addClass('card-text').text('Temp: ' + weatherData.daily[i].temp.max + '  °F')
                                     //create wind
                                     var windEL = $('<p>').addClass('card-text').text('Wind: ' + weatherData.daily[i].wind_speed + ' MPH')
                                     // create humidity
                                     var humidityEL = $('<p>').addClass('card-text').text('Humidity: ' + weatherData.daily[i].humidity + '%')
                                     // create uv index
                                     var UvEL = $('<p>').addClass('card-text').text('UV Index: ' + weatherData.daily[i].uvi + '  ')

                                     //append cardSectionEl to the #five-day container
                                     fiveDayEl.append(cardSectionEl);
                                     //append cardBodySectionEL to cardSectionEl
                                     cardSectionEl.append(cardBodySectionEl);
                                     //append card title to card body
                                     cardBodySectionEl.append(cardTitleEl);
                                     //append icon to card body
                                     cardBodySectionEl.append(forecastIconEl);
                                     //append temp details to card body
                                     cardBodySectionEl.append(tempEL);
                                     //append wind details to card body
                                     cardBodySectionEl.append(windEL);
                                     //append humidity details to card body
                                     cardBodySectionEl.append(humidityEL);
                                     //append uv details to card body
                                     cardBodySectionEl.append(UvEL);
                                 }

                                 //  5-DAY FORECAST DISPLAY  //
                             

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