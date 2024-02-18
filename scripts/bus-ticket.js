function ticketBuySuccess() {
    hideElementById('main-page');
    showElementById('buying-result')
}

function handleClick(event) {
    console.log('event');

}

// apply coupon



const allBtn = document.getElementsByClassName("btn-primary");
let count = 0;
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const btnId = event.target.id;
        count = count + 1;
        // console.log(btnId);

        const selectedSeatContainer = document.getElementById("selected-seat-container");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = btnId;
        const p2 = document.createElement("p");
        p2.innerText = "Economoy";
        const p3 = document.createElement("p");
        p3.innerText = 550;

        // total price 
        totalPrice("total-price");
        // grand price
        totalPrice("grand-price");

        // show selected seat
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedSeatContainer.appendChild(li);
        setInnerText("seat-count", count);
        setBackgroundColorById(btnId);
    })
}
// total price
function totalPrice(elementId) {
    const totalPrice = document.getElementById(elementId).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + 550;
    setInnerText(elementId, sum);
}
// Grand price
function grandPrice(elementId) {
    const totalPrice = document.getElementById("total-price").innerText;
    const convertedTotalPrice = parseInt(totalPrice);

    const inputCoupon = document.getElementById("input-coupon");
    const couponText = inputCoupon.value;
    if (couponText === "NEW15") {
        const couponAppliedPrice = totalPrice * 0.15;
        setInnerText("grand-price", convertedTotalPrice - couponAppliedPrice);
    }
    else if (couponText === "Couple 20") {
        const couponAppliedPrice = totalPrice * 0.20;
        setInnerText("grand-price", convertedTotalPrice - couponAppliedPrice);
    }
    else {
        setInnerText("grand-price", convertedTotalPrice);
    }




}

