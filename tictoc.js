var restart = document.querySelector('#b');
var squares = document.querySelectorAll('td');

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';

    }
}
restart.addEventListener('click', clearBoard)

function changeMarker() {
    if (this.textContent === '') {
        this.textContent = 'x';

    } else if (this.textContent === 'x') {
        this.textContent = '0';


    } else {
        this.textContent = '';
    }

};
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);

}