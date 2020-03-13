let myButton = document.querySelector('button');
if (!localStorage.getItem('name')) {
    myButton.onclick = function() {
        logIn();
    };
} else {
    myButton.textContent = 'Log Out';
    myButton.onclick = function() {
        logOut();
    };
}

let myImage = document.querySelector('img');
myImage.onclick = function() {
    if (myImage.getAttribute('src') === 'images/spongebob.png') {
        myImage.setAttribute('src', 'images/spongegar.png');
    } else {
        myImage.setAttribute('src', 'images/spongebob.png');
    }
}

function logIn() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        logIn();
    } else {
        localStorage.setItem('name', myName);
        myButton.textContent = 'Log Out';
        myButton.onclick = function() {
            logOut();
        };
    }
}
function logOut() {
    alert(localStorage.getItem('name') + ' has logged out.');
    localStorage.removeItem('name');
    myButton.textContent = 'Log In';
    myButton.onclick = function() {
        logIn();
    };
}