Ext.define('NewExtApp.controller.CustomerController', {
    extend: 'Ext.app.ViewController',
    	
    	alias: 'controller.customerController',
    	
    	onClearClick: function (sender, record) {
    		var customerForm = this.getView().clearForm();
        },
        
        onSaveClick: function() {
            var customerForm = this.getView();

            customerForm.submit({
                url: 'http://localhost:8080/customers',
                type : 'rest',
                success: function() {
                    Ext.Msg.alert('Registration Successfull!');
                }
            });
        },
        
        validatePassword : function (sender,record) {
        	this.getView().validatePassword();
        }
        
});
