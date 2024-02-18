function ticketBuySuccess() {
    hideElementById('main-page');
    showElementById('buying-result')
}

function handleClick(event) {
    console.log('event');

}

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
        const totalPrice = document.getElementById("total-price").innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        document.getElementById("total-price").innerText = convertedTotalPrice + 550;


        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedSeatContainer.appendChild(li);
        setInnerText("seat-count", count);
        setBackgroundColorById(btnId);
    })
}