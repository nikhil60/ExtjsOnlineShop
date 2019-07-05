Ext.define('NewExtApp.controller.OrderViewController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.orderController',
			
	    onSelectionChange: function (sender, record, isSelected) {
	        var removeBtn = this.lookupReference('btnRemoveProduct');
	        if(record.length)
	        {
	            removeBtn.setDisabled(false);
	        }
	        else
        	{
	            removeBtn.setDisabled(true);
        	}
	    },
	    
	    onRemoveClick: function (sender, record) {
	    	var orderGrid = this.getView();
		    var orderStore = orderGrid.getStore();

	        //delete selected rows if selModel is checkboxmodel
	        var selectedRows = orderGrid.getSelectionModel().getSelection();

	        orderStore.remove(selectedRows);
	    },
	    
	    onLoadClick: function (sender, record) {
	        var orderStore = this.getView().getStore();
	        orderStore.load();
	        
	    },
	    
	    onLogoutClick: function (sender, record) {
	    	localStorage.removeItem("cartId");
        	localStorage.removeItem("customerId");
        	localStorage.removeItem("loginStatus");
        	localStorage.removeItem("userName");
            Ext.getCmp('loginForm').show();
            Ext.getCmp('loginForm').enable();
            Ext.getCmp('registrationForm').enable();
            Ext.getCmp('productList').hide();
            Ext.getCmp('productList').disable();
            Ext.getCmp('cart').disable();
            Ext.getCmp('cart').hide();
            Ext.Msg.alert('Loged out successfully!');
	    },
	    
	    calculateOrderPrice: function(sender,record)
	    {
	    	console.log('calculate called');
	    	var orderGrid = this.getView();
	    	var selected = orderGrid.getSelectionModel().getSelection()[0];
	    	var productPrice = selected.data.productPrice;
	    	var orderQty = selected.data.orderQty
	    	selected.set('orderPrice', productPrice*orderQty);
	    	
	    },
	    
	    
	    onApplyCouponClick :function(sender,record)
	    {
	    		Ext.Msg.prompt('Coupon', 'Please Enter Coupon Code:', function(btn, text) {
                if (btn == 'ok') {
                	
                	var couponStore = Ext.getStore('couponListStore');
                	console.log(couponStore);
                	console.log(couponStore.getData());
                	var couponRecord = couponStore.findRecord('couponCode', text);
                	
                	if(couponRecord)
                	{
	                	var cartId = localStorage.getItem('cartId');
	                	var applyCouponStore = Ext.create('Ext.data.Store', {
	                		fields :[
	                			{name:'success',type:'auto'},
	                			{name:'message',type:'string'}
	                		],
	                	    proxy: {
	                	        type: 'rest',
	                	        url : 'http://localhost:8080/cart/'+cartId+'/coupon/apply/'+text,
	                	        headers: {'Access-Control-Allow-Origin': '*' },
	                		    headers: {'Access-Control-Allow-Headers': 'Content-Type' },
	                		    noCache: false,
	                	        limitParam: undefined,
	                	        pageParam: undefined,
	                	        startParam: undefined,
	                	        
	                	        reader: {
	                	            type: 'json',
	                	            root: 'root',
	                	            rootProperty:null
	                	        },
	                	        actionMethods: {
	                	        	read: 'GET',
	                	        }
	                	    },
	                	});
	                	applyCouponStore.load({
	                		callback: function(records, operation, success) {
	                			 var reader = this.getProxy().getReader();
	                			 response = operation.getResponse();
	                			Ext.Msg.alert(reader.getResponseData(response).message);
	                	    }
	                	})
                	}
                	else
                	{
                		Ext.Msg.alert("Invalid Coupon!");
            		}
                }
             });
	    	
	    },
	    
	    onRemoveCouponClick:function(sender,record)
	    {
	    		Ext.Msg.prompt('Coupon', 'Please Enter Coupon Code:', function(btn, text) {
	    			var couponStore = Ext.getStore('couponListStore');
                	var couponRecord = couponStore.findRecord('couponCode', text);
                	if(couponRecord)
            		{
	                	var cartId = localStorage.getItem('cartId');
                		var removeCouponStore = Ext.create('Ext.data.Store', {
	            	    proxy: {
	            	        type: 'rest',
	            	        url : 'http://localhost:8080/cart/'+cartId+'/coupon/unapply/'+text,
	            	        headers: {'Access-Control-Allow-Origin': '*' },
	            		    headers: {'Access-Control-Allow-Headers': 'Content-Type' },
	            		    noCache: false,
	            	        limitParam: undefined,
	            	        pageParam: undefined,
	            	        startParam: undefined,
	            	        
	            	        reader: {
	            	            type: 'json',
	            	            root: 'root',
	            	            rootProperty:null
	            	        },
	            	        actionMethods: {
	            	        	destroy: 'GET'
	            	        }
	            	    },
                		});
                		removeCouponStore.load({
	                		callback: function(records, operation, success) {
	                			 var reader = this.getProxy().getReader();
	                			 response = operation.getResponse();
	                			Ext.Msg.alert(reader.getResponseData(response).message);
	                	    }
	                	})
            		}
                	else
                	{
                		Ext.Msg.alert("Invalid Coupon!");
            		}
	    		});
	    }
});
