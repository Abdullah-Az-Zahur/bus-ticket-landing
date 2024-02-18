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

// function applyCoupon() {
//     const inputCoupon = document.getElementById("input-coupon");
//     const couponText = inputCoupon.value;
//     // coupon check
//     const couponAppliedPrice = 0;
//     if (couponText === "NEW15") {
//         couponAppliedPrice = sum - totalPrice * 0.15;
//     }
//     else if (couponText === "Couple 20") {
//         couponAppliedPrice = sum - totalPrice * 0.20;
//     }
//     else {
//         couponAppliedPrice = sum ;
//     }
//     return couponAppliedPrice;
//     setInnerText("grand-price", couponAppliedPrice);

// }