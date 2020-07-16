const billItemTypeRadio = document.querySelector(".billItemTypeRaidio");

const billRadioBtn = document.querySelector(".radioBillAddBtn");

const callTotalTwo = document.querySelector(".callTotalTwo");

const smsTotalTwo = document.querySelector(".smsTotalTwo");

const totalTwo = document.querySelector(".totalTwo");

var radioBillInstance = RadioBill();

// var totalCalls = 0;
// var totalSms = 0;
// var Total = 0;


function radioBill() {
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");

    var billItemType = checkedRadioBtn.value;

    radioBillInstance.radioButtons(billItemType);

    // console.log(billItemType)
    // if (billItemType === 'call') {
    //     totalCalls += 2.75;
    //     Total += 2.75;
    // }
    //  else if ( billItemType === 'sms'){
    //      totalSms += 0.75;
    //      Total += 0.75;
    // }

    callTotalTwo.innerHTML = radioBillInstance.getCallCost().toFixed(2)
    smsTotalTwo.innerHTML = radioBillInstance.getSmsCost().toFixed(2)
    totalTwo.innerHTML = radioBillInstance.getTotalCost().toFixed(2)
    styleTotalColor();
}

function styleTotalColor() {

    totalTwo.classList.remove("danger")
    totalTwo.classList.remove("warning")

    var currentStyle = radioBillInstance.styleTotalColor();
    totalTwo.classList.add(currentStyle);

    // if (Total >= 50) {
    //     totalT.classList.add("danger")
    // } else if (Total >= 30 && Total <= 50) {
    //     totalT.classList.add("warning")
    // }
}


billRadioBtn.addEventListener('click', radioBill);

