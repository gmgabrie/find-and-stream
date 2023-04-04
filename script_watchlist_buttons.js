
// let watchListItem = document.getElementsByClassName('watchlist-item');
let addBtn1 = document.getElementById('watchlist-btn1');
let addBtn2 = document.getElementById('watchlist-btn2');
let addBtn3 = document.getElementById('watchlist-btn3');
let addBtn4 = document.getElementById('watchlist-btn4');
let titleName = document.getElementsByClassName('title-name');

//Once api is implemented this function will add the title name of the movie selected to the watchlist
function addToWatchlist() {
    
    // const watchList = document.getElementById('watchlist');
    const newItem = document.createElement('a');
    const newItemText = document.createTextNode(titleName);
    newItem.appendChild(newItemText);
    document.getElementById('watchlist').appendChild(newItem);
    newItem.className = "collection-item"

    console.log('event listener works!')

}
//Event Listeners
addBtn1.addEventListener('click', addToWatchlist);
addBtn2.addEventListener('click', addToWatchlist);
addBtn3.addEventListener('click', addToWatchlist);
addBtn4.addEventListener('click', addToWatchlist);