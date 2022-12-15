let movieList = [];

function createList() {
    let firstInput = document.getElementById('firstMovie').value;
    if (firstInput) {
        movieList.push(firstInput);
    }
    let secondInput = document.getElementById('secondMovie').value;
    if (secondInput) {
        movieList.push(secondInput);
    }
    let thirdInput = document.getElementById('thirdMovie').value;
    if (thirdInput) {
        movieList.push(thirdInput);
    }
    let fourthInput = document.getElementById('fourthMovie').value;
    if (fourthInput) {
        movieList.push(fourthInput);
    }
    let fifthInput = document.getElementById('fifthMovie').value;
    if (fifthInput) {
        movieList.push(fifthInput);
    }

    let randomNum = Math.floor(Math.random() * movieList.length);

    let chosenMovie = movieList[randomNum];
    
    document.querySelector('p').innerText = `Today, you should watch:\n${chosenMovie}`;
}
