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
                	customerParam = Ext.create('NewExtApp.model.CustomerParam');
                	customerParam.set("cartId",resp.cartId);
                	customerParam.set("customerId",resp.customerId);
                	customerParam.set("loginStatus",resp.loginStatus);
                	customerParam.set("userName",resp.userName);
                	var customerparamstore = Ext.getStore('customerparamstores');
                	customerparamstore.load();
                	customerparamstore.insert(0,customerParam)      
                	var record = customerparamstore.findRecord('loginStatus', true);
                	customerparamstore.sync();
                	
                	
                	
                    Ext.Msg.alert('Login successfull!');
                    
                    Ext.getCmp('loginForm').hide();
                    Ext.getCmp('loginForm').disable();
                    Ext.getCmp('registrationForm').hide();
                    Ext.getCmp('registrationForm').disable();
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
