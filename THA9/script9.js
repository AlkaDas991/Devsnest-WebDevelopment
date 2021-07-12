const parentDiv = document.createElement('div');
parentDiv.id = "frame";
var matrix = document.querySelector('.matrix');
for( let i =1; i<=6; i++) {
    var row = document.createElement('div');
    row.className = "row";
    for(let j = 1; j<= 6; j++) {
        var unselected = document.createElement('div');
        unselected.className = "unselected";
        row.appendChild(unselected);
    }
    parentDiv.appendChild(row);
}
matrix.appendChild(parentDiv);
var avail_seat = 36;
var book_seat = 0;
var av_seat = document.querySelector('.avail_seats');
var bk_seat = document.querySelector('.booked_seats');
av_seat.innerHTML = `<h2>Availabale seats :${avail_seat}</h2>`;
bk_seat.innerHTML = `<h2>Booked seats :${book_seat}</h2>`;
parentDiv.addEventListener("click",myfunct);
function myfunct(e) {
    if(e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
        book_seat -= 1;
        avail_seat += 1;
    }
    else {
        book_seat += 1;
        avail_seat -= 1;
        e.target.classList.add('selected');
    }
    av_seat.innerHTML = `<h2>Available seats :${avail_seat}</h3>`;
    bk_seat.innerHTML = `<h2>Booked seats :${book_seat}</h3>`;
}
