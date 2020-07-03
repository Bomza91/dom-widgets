describe("The test input bill factory function", function () {
    it("should be able to enter calls", function () {
        
        assert.equal(8.25, TextInputBill('call,call,call'));
    });

        it("should be able to enter sms", function () {
            
            assert.equal(3, TextInputBill('sms,sms,sms,sms'));
        });

});