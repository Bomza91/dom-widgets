function BillWithSettings() {

    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 30;
    var theCriticalLevel = 50;

    var totalCost = 0;
    

    function setCallCost(callCost) {
        theCallCost = callCost;

    }

    function getCallCost() {
        return theCallCost;
    }

   function radioButtons(billItemType){
       if(billItemType === "call"){
           theCallCost += 2.75
       } else if(billItemType === "sms"){
           theSmsCost += 0.75
       }
   }

   function setSmsCost(smsCost) {
        theSmsCost = smsCost;

    }

    function getSmsCost() {
        return theSmsCost;
    }

    function makeCall() {
        callCostTotal += theCallCost;
     }

     function sendSms() {
        smsCostTotal += theSmsCost
     }
 
 

    function getTotalCost() {

        totalCost = theCallCost + theSmsCost;

        return totalCost;
    }
function setWarningLevel(WarningLevel) {

        theWarningLevel = WarningLevel;

    }

    function getWarningLevel() {

        return theWarningLevel;

    }

    function setCriticalLevel(CriticalLevel) {

        theCriticalLevel = CriticalLevel;

    }

    function getCriticalLevel() {

        return theCriticalLevel;

    }


    function styleTotalColor(){

        if(getTotalCost() >= theCriticalLevel){
            return "critical"
        } else if(getTotalCost() >= theWarningLevel){
            return "warning"
        }
       
    }
    
    
    return {
        getCallCost,
        radioButtons,
        setCallCost,
        setSmsCost,
        getSmsCost,
        getSmsCost,
        makeCall,
        sendSms,
        getTotalCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        styleTotalColor,
    }
}