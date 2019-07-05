/**
 * This class is the view model for the Main view of the application.
 */

Ext.define('NewExtApp.view.main.ProductViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.productviewmodel',

    //TODO - add data, formulas and/or methods to support your view
    stores: {
    	productListStore: {
        	alias: 'store.productListStore',
            
            model : 'NewExtApp.model.Product',
            
            autoLoad: true,
            
            autoSync: true,
            
            proxy : {
        	    type : 'rest',
        	    url : 'http://localhost:8080/products', 
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
        	    writer: {
                    type: 'json',
                    writeAllFields : true,
                    rootProperty:null
        	    },
        	    actionMethods: {
        	        create: 'POST',
        	        read: 'GET',
        	        update: 'PUT',
        	        destroy: 'DELETE'
        	    },
        	    
        	}
        },
        orderListStore: {
        	alias: 'store.orderListStore',
            
            model : 'NewExtApp.model.Order',
            
            storeId : 'orderListStore',
            
            autoLoad: true,
            
            autoSync : true,
            
            proxy : {
        	    type : 'rest',
        	    url : 'http://localhost:8080/cart', 
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
        	    writer: {
                    type: 'json',
                    writeAllFields : true,
                    rootProperty:null
        	    },
        	    actionMethods: {
        	        create: 'POST',
        	        read: 'GET',
        	        update: 'PUT',
        	        destroy: 'DELETE'
        	    },
        	    
        	},
			listeners: {
				beforeLoad : function (store, records, success, options) {
					var cartId = localStorage.getItem('cartId');
					store.getProxy().setUrl('http://localhost:8080/cart/'+cartId+'/orders');
					console.log('loading..')
				},
		    	load : function (store, records, success, options) {
		    		
				    console.log('loaded.')
				}
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