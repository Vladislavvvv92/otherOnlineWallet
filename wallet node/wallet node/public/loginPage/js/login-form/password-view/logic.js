export const switchView = (currentIcon, neededIcon, inputPass) => {
    if (inputPass.getAttribute('type') === 'Password') {
        inputPass.setAttribute('type', 'text');
    } else {
        inputPass.setAttribute('type', 'Password');
    }

    neededIcon.style.display = "block";
    currentIcon.style.display = 'none';
}