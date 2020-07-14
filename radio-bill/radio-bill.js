const billItemTypeRadio = document.querySelector(".billItemTypeRaidio");

const billRadioBtn = document.querySelector(".radioBillAddBtn");

const callTotalT = document.querySelector(".callTotalTwo");

const smsTotalT = document.querySelector(".smsTotalTwo");

const totalT = document.querySelector(".totalTwo");

var totalCalls = 0;
var totalSms = 0;
var Total = 0;


function radioBill() {
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");

    var billItemType = checkedRadioBtn.value
    console.log(billItemType)
    if (billItemType === 'call') {
        totalCalls += 2.75;
        Total += 2.75;
    }
     else if ( billItemType === 'sms'){
         totalSms += 0.75;
         Total += 0.75;
    }

    callTotalT.innerHTML = totalCalls.toFixed(2);
    smsTotalT.innerHTML = totalSms.toFixed(2);
    totalT.innerHTML = Total.toFixed(2);
    styleTotalColor();
}

function styleTotalColor() {

    totalT.classList.remove("danger")
    totalT.classList.remove("warning")

    if (Total >= 50) {
        totalT.classList.add("danger")
    } else if (Total >= 30 && Total <= 50) {
        totalT.classList.add("warning")
    }
}


billRadioBtn.addEventListener('click', radioBill);