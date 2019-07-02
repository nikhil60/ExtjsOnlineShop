/**
 * This class is the view model for the Main view of the application.
 */

Ext.define('NewExtApp.view.main.LoginViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.loginviewmodel',

    //TODO - add data, formulas and/or methods to support your view
    stores: {
    	customerStore: {
        	alias: 'store.loginStore',
            
            model : 'NewExtApp.model.Customer',
           
            proxy : {
        	    type : 'rest',
        	    url : 'http://localhost:8080/login', 
        	    headers: {'Access-Control-Allow-Origin': '*' },
        	    headers: {'Access-Control-Allow-Headers': 'Content-Type' },
        	    noCache: false,
                limitParam: undefined,
                pageParam: undefined,
                startParam: undefined,
        	    reader: {
        	       type : 'json',
        	       rootProperty:null
        	    },
        	    actionMethods: {
        	        read: 'GET'
        	    },
        	}
        }
    }
});
/*

store.on({
    load: function (store, records) {
    	console.log(records.length);
    }
});

store.load({
    callback: function(records, operation, success) {
        console.log(records.length);
    }
});
*/