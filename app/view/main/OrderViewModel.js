/**
 * This class is the view model for the Main view of the application.
 */

Ext.define('NewExtApp.view.main.OrderViewModel', {
    extend: 'Ext.app.ViewModel',

    
    alias: 'viewmodel.orderviewmodel',

    //TODO - add data, formulas and/or methods to support your view
    stores: {
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
		    		var cartPrice="00.00";
		    		var cartDiscount="00.00";
		    		var cartTax="00.00";
		    		var cartTotal="00.00";
		    		var firstRecord = store.getAt(0);
		    		if(firstRecord)
	    			{
		    				cartPrice=firstRecord.get('cartPrice');
		    				cartDiscount=firstRecord.get('cartDiscount')==null?"00.00":firstRecord.get('cartDiscount');
		    				cartTax=firstRecord.get('cartTax');
		    				cartTotal=firstRecord.get('cartTotal');
	    			}
		    		Ext.getCmp('cartPrice').setText(cartPrice);
		    		Ext.getCmp('cartDiscount').setText(cartDiscount);
		    		Ext.getCmp('cartTax').setText(cartTax);
		    		Ext.getCmp('cartTotal').setText(cartTotal);
				    console.log('loaded.')
				}
			}
        },
        couponListStore: {
        	alias: 'store.couponListStore',
            
            model : 'NewExtApp.model.Coupon',
            
            storeId : 'couponListStore',
            
            autoLoad: true,
            
            autoSync : true,
            
            proxy : {
        	    type : 'rest',
        	    url : 'http://localhost:8080/coupon', 
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
					console.log('coupon loading..')
				},
		    	load : function (store, records, success, options) {
				    console.log('coupon loaded.')
				}
			}
        }
    }
});
/*

orderListStore.on({
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