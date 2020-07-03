function radioBill() {

    var theCallCost = 0;
    var theSmsCost = 0;
   
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost) {
        theCallCost = callCost;
    }

    function getCallCost() {
        return theCallCost;
    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }

    function getSmsCost() {
        return theSmsCost;
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal;
    }
    function getTotalCallCost() {
        return callCostTotal;
    }
    function getTotalSmsCost() {
        return smsCostTotal;
    }

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
    }

}
