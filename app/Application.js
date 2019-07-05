/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('NewExtApp.Application', {
    extend: 'Ext.app.Application',

    name: 'NewExtApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {
        // TODO - Launch the application
    	
    	var loginrecord = localStorage.getItem('loginStatus');
    	console.log(loginrecord);
    	if(loginrecord)
		{
	    	Ext.getCmp('loginForm').hide();
	        Ext.getCmp('loginForm').disable();
	        Ext.getCmp('registrationForm').hide();
	        Ext.getCmp('registrationForm').disable();
	        Ext.getCmp('productList').show();
	        Ext.getCmp('productList').enable();
	        Ext.getCmp('cart').enable();
		}
    	else
		{
    		Ext.getCmp('loginForm').show();
            Ext.getCmp('loginForm').enable();
            Ext.getCmp('registrationForm').enable();
            Ext.getCmp('productList').hide();
            Ext.getCmp('productList').disable();
            Ext.getCmp('cart').disable();
            Ext.getCmp('cart').hide();
		}
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
