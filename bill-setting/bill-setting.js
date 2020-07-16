const btnAdd = document.querySelector(".add");
const btnUpd = document.querySelector(".updateSettings")
const smsCost = document.querySelector(".smsCostSetting");
const callCost = document.querySelector(".callCostSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");
const warningLevel = document.querySelector(".warningLevelSetting");
const totalSettings = document.querySelector(".totalSettings");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");

var settingsBillInstance = BillWithSettings();

// var smsCostVal=0;
// var callCostVal=0;
// var warnLevel=0;
// var critLevel=0;

// var smsCostTotal=0;
// var callCostTotal=0;
// var allCostTotal=0;

function updated() {
  settingsBillInstance.setCallCost(Number(callCost.value));
  settingsBillInstance.setSmsCost(Number(smsCost.value));
  settingsBillInstance.setWarningLevel(Number(warningLevel.value));
  settingsBillInstance.setCriticalLevel(Number(criticalLevel.value));

  styleTotalColor()
}


function clicked() {

  var radioSmsCall = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  var item = radioSmsCall.value;

  settingsBillInstance.radioButtons(item);


  // tCostOfBill(item);    
  callTotalSettings.innerHTML = settingsBillInstance.getCallCost().toFixed(2);
  smsTotalSettings.innerHTML = settingsBillInstance.getSmsCost().toFixed(2);
  totalSettings.innerHTML = settingsBillInstance.getTotalCost().toFixed(2);
  styleTotalColor();

}

function styleTotalColor() {

  totalSettings.classList.remove("critical");
  totalSettings.classList.remove("warning");

  var styleTotalColor = settingsBillInstance.styleTotalColor();
  totalSettings.classList.add(styleTotalColor);


}


// if(currTotal>=warnLevel && currTotal<critLevel){
// totalCostElem.classList.add("warning");
// }

// else if(currTotal>=critLevel){

//     totalCostElem.classList.add("critical")
// } 



// function tCostOfBill(billItemType) {
//   if(allCostTotal < critLevel){
//             if (billItemType === "call") {
//         callCostTotal += callCostVal;
//               allCostTotal += callCostVal;
//             }
//             else if (billItemType === "sms") {
//         smsCostTotal += smsCostVal;

//               allCostTotal += smsCostVal;
//             }
//         }
// }


btnAdd.addEventListener("click", clicked);
btnUpd.addEventListener("click",updated);


