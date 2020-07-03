describe("The calculate bill factory function", function () {
    it("should be able to enter a string of calls", function () {
        
        assert.equal(8.25, totalPhoneBill('call,call,call'));
    });

        it("should be able to enter a string of sms", function () {
            
            assert.equal(3, totalPhoneBill('sms,sms,sms,sms'));
        });

});