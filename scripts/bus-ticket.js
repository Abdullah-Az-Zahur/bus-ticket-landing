function ticketBuySuccess() {
    hideElementById('main-page');
    showElementById('buying-result')
}
function homePage(){
    hideElementById('buying-result');
    showElementById('main-page');
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

        if (count > 4) {
            alert("Maximum 4 seat can be book ")
            return;
        }

        // event.target.setAttribute("disabled", false);
        // event.target.setAttribute("editable", true);

        // added li to ul
        const selectedSeatContainer = document.getElementById("selected-seat-container");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = btnId;
        const p2 = document.createElement("p");
        p2.innerText = "Economoy";
        const p3 = document.createElement("p");
        p3.innerText = 550;

        // show selected seat
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedSeatContainer.appendChild(li);
        setInnerText("seat-count", count);
        setBackgroundColorById(btnId);

        // total price 
        totalPrice("total-price");
        // grand price
        grandPrice("grand-price");
        // left seat
        totalSeat("total-seat");
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
    if(convertedTotalPrice === 2200){
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
    
}

function totalSeat(elementId){
    const totalSeat = document.getElementById("total-seat").innerText;
    console.log(totalSeat)
    const convertedTotalSeat = parseInt(totalSeat);
    const leftSeat = convertedTotalSeat - 1 ;
    console.log(leftSeat);
    setInnerText("total-seat", leftSeat);
}

// limit button selection
// let selectedCount = 0;

// function toggleSelection(button) {
//     if (button.classList.contains('selected')) {
//         button.classList.remove('selected');
//         selectedCount--;
//     } else {
//         if (selectedCount < 4) {
//             button.classList.add('selected');
//             selectedCount++;
//         } else {
//             alert('You can only select up to 4 buttons.');
//         }
//     }

//     updateButtonState();
// }

// function updateButtonState() {
//     const buttons = document.querySelectorAll('button');
//     buttons.forEach((button) => {
//         if (selectedCount >= 4 && !button.classList.contains('selected')) {
//             button.disabled = true;
//         } else {
//             button.disabled = false;
//         }
//     });
// }

// prevent clicking same btn
