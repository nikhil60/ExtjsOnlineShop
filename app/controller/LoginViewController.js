Ext.define('NewExtApp.controller.LoginViewController', {
    extend: 'Ext.app.ViewController',
    	
    	alias: 'controller.loginController',
    	
        
    	onClearClick: function (sender, record) {
    		var customerForm = this.getView().clearForm();
        },
        
        onLoginClick: function() {
            var loginForm = this.getView().getForm();
            
            var resp;
            var customerParam;
            loginForm.submit({
                url: 'http://localhost:8080/login/'+loginForm.findField('userName').getValue()+'/'+loginForm.findField('passWord').getValue(),
                type : 'rest',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                success: function(form, action) {
                	resp = Ext.decode(action.response.responseText);
                	localStorage.setItem("cartId",resp.cartId);
                	localStorage.setItem("customerId",resp.customerId);
                	localStorage.setItem("loginStatus",resp.loginStatus);
                	localStorage.setItem("userName",resp.userName);
                    Ext.Msg.alert('Login successfull!');
                    Ext.getCmp('loginForm').hide();
                    Ext.getCmp('loginForm').disable();
                    Ext.getCmp('registrationForm').hide();
                    Ext.getCmp('registrationForm').disable();
                    Ext.getCmp('logout').show();
                    Ext.getCmp('logout').enable();
                    Ext.getCmp('productList').show();
                    Ext.getCmp('productList').enable();
                    Ext.getCmp('cart').enable();
                },
                failure: function (form, action) {
                    if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                        Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                    }
                    if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                        Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                    }
                    if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                        Ext.Msg.alert('SERVER_INVALID', action.result.message);
                    }
                }
            });
        },
});
