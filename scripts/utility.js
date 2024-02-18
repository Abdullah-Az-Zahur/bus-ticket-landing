// hide element
function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}
// show element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

// set background color
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}

// set inner text
function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}
