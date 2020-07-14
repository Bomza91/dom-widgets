const callTotalRadio = document.querySelector(".callTotalRadio");

const smsTotalRadio = document.querySelector(".smsTotalRadio");

const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

const callCostSettings = document.querySelector(".callCostSettings");

const smsCostSettings = document.querySelector(".smsCostSettings");

const warningLevelText = document.querySelector(".warningLevelText");

const criticalLevelText = document.querySelector(".criticalLevelText");

const btnAdd = document.querySelector(".addButton");

const btnUpdateSettings = document.querySelector(".updateSettings");

const totalSettings = document.querySelector(".totalSettings");

const totalSettingsSpan = document.querySelector(".orangeTwo"); 

var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

var callTotal = 0;
var smsTotal = 0;
var totalCost = 0;
function addButtonClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    

        if (checkedRadioBtn) {
            var billItemChecked = checkedRadioBtn.value;

        }

            if (billItemChecked === "call") {
                callTotal += callCost;
            }
            else if (billItemChecked === "sms") {
                smsTotal += smsCost;
            }

        }

        
        callTotalRadio.innerHTML = callTotal.toFixed(2);
        smsTotalRadio.innerHTML = smsTotal.toFixed(2);
        totalCost = callTotal + smsTotal;

        totalSettings.innerHTML = totalCost.toFixed(2);
        colorCode()
    


function updateSettingsClicked() {
    callCost = Number(callCostSetting.value);
    smsCost = Number(smsCostSetting.value);
    criticalLevel = Number(criticalLevelText.value);
    warningLevel = Number(warningLevelText.value);
    colorCode()
}

function colorCode() {
    totalSettingsSpan.classList.remove("danger");
    totalSettingsSpan.classList.remove("warning");

    if (totalCost >= criticalLevel) {
        totalSettingsSpan.classList.remove("warning");
        totalSettingsSpan.classList.add("danger");

    }
    else if (totalCost >= warningLevel && totalCost < criticalLevel) {
        totalSettingsSpan.classList.remove("danger");
        totalSettingsSpan.classList.add("warning");
    }

}


addButton.addEventListener("click", addButtonClicked);


updateSettings.addEventListener("click", updateSettingsClicked);
© 2020 GitHub, Inc.