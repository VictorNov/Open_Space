let checkButtons = document.querySelectorAll('.check-button');
let levers = document.querySelectorAll('.lever');
let launchButton = document.querySelector('.button-launch');
let passwordField = document.getElementById('password');
let buttonOK = document.querySelector('.button-ok');

buttonOK.addEventListener("click", getPassword);
checkButtons.forEach((button) => button.addEventListener("change", checkConditions));
levers.forEach((lever) => lever.addEventListener("change", checkConditions));

function getPassword(e) {
    e.preventDefault();
    let password = passwordField.value;
    (password === 'TrustNo1') ? enableControls() : window.alert("Incorrect Password! Try TrustNo1");
}

function enableControls() {
    checkButtons.forEach((element, i) => checkButtons[i].removeAttribute('disabled'));
    levers.forEach((element, i) => levers[i].removeAttribute('disabled'));
    passwordField.setAttribute('disabled', '')
    buttonOK.setAttribute('disabled', '');
}

function checkButtonsEnabled() {
    let ready = true;
    checkButtons.forEach((button) => {
        if (!button.checked) {
            ready = false;
        }
    });
    return ready;
}

function checkLevers() {
    let ready = true;
    levers.forEach((lever) => {
        if (!(lever.value === "100")) {
            ready = false;
        }
    });
    return ready;
}

function checkConditions() {
    if (checkButtonsEnabled() && checkLevers()) {
        enableLaunch();
    }
}

function enableLaunch() {
    launchButton.removeAttribute('disabled');
    checkButtons.forEach((element) => element.setAttribute('disabled', ''));
    levers.forEach((element) => element.setAttribute('disabled', ''));
}

function message() {
    window.confirm("Do you want to start again?") ? window.location.reload() : null;
}

function animateRocket() {
    const rocket = document.querySelector('.rocket');
    let x = 290;
    let y = 240;
    let id = setInterval(frame, 5);

    launchButton.setAttribute('disabled', '');

    function frame() {
        if (x > 1000) {
            clearInterval(id);
            message();
        } else {
            x++;
            y += 2;
            rocket.style.left = x + "px";
            rocket.style.bottom = y + "px";
        }
    }
}