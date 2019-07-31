/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NewExtApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onLogoutClick: function (sender, record) {
    	console.log('log out clicked')
        Ext.getCmp('loginForm').show();
        Ext.getCmp('loginForm').enable();
        Ext.getCmp('registrationForm').enable();
        Ext.getCmp('productList').hide();
        Ext.getCmp('productList').disable();
        Ext.getCmp('cart').disable();
        Ext.getCmp('cart').hide();
        Ext.getCmp('logout').hide();
        Ext.getCmp('logout').disable();
        var userName = localStorage.getItem('userName');
        var logoutStore = Ext.create('Ext.data.Store', {
    	    proxy: {
    	        type: 'rest',
    	        url : 'http://localhost:8080/logout/'+userName,
    	        headers: {'Access-Control-Allow-Origin': '*' },
    		    headers: {'Access-Control-Allow-Headers': 'Content-Type' },
    		    noCache: false,
    	        limitParam: undefined,
    	        pageParam: undefined,
    	        startParam: undefined,
    	        
    	        reader: {
    	            type: 'json',
    	            rootProperty:null
    	        },
    	        actionMethods: {
    	        	read: 'GET'
    	        }
    	    },
    		})
    		logoutStore.load({
        		 callback: function(records, operation, success) {
        			 console.log(success);
        		if(success)
    			{
	       			 var reader = this.getProxy().getReader();
	       			 response = operation.getResponse();
	       			 localStorage.removeItem("cartId");
	       			 localStorage.removeItem("customerId");
	       			 localStorage.removeItem("loginStatus");
	       			 localStorage.removeItem("userName");
	       			 Ext.Msg.alert(reader.getResponseData(response).message);
    			}
        		else
    			{
        			Ext.Msg.alert("Connection failure");
    			}
       	    }
       	});
    },
});
