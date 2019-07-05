Ext.define('NewExtApp.store.CouponStore', {
    extend: 'Ext.data.Store',

    alias: 'store.mycouponStore',

    model : 'NewExtApp.model.Coupon',
    
    storeId : 'mycouponstore',
    
    autoLoad:true,
    
    autoSync: true,
    
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
	    listeners: {
			beforeLoad : function (store, records, success, options) {
				console.log('coupon loading..')
			},
	    	load : function (store, records, success, options) {
			    console.log('coupon loaded.')
			}
		}
	}
});

