describe("The radio bill button factory function", function () {
    it("should be able to add call cost", function () {
        let radioBtn = radioBill();

        radioBtn.setCallCost(2.75);
        assert.equal(2.75, radioBtn.getCallCost());

        let radioBtn2 = radioBill();
        radioBtn2.setCallCost(1.85);
        assert.equal(1.85, radioBtn2.getCallCost());
    })


    it("should be able to add sms cost", function () {
        let radioBtn = radioBill();

        radioBtn.setSmsCost(0.75);
        assert.equal(0.75, radioBtn.getSmsCost());

        let radioBtn2 = radioBill();
        radioBtn2.setSmsCost(0.65);
        assert.equal(0.65, radioBtn2.getSmsCost());
    })
});

