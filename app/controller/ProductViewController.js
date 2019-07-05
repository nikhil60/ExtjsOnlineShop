Ext.define('NewExtApp.controller.ProductViewController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.productController',
    
			
	    onSelectionChange: function (sender, record, isSelected) {
	        var removeBtn = this.lookupReference('btnRemoveProduct');
	        var cartBtn = this.lookupReference('btnAddtoCart');
	        if(record.length)
	        {
	            removeBtn.setDisabled(false);
	            cartBtn.setDisabled(false);
	        }
	        else
        	{
	            removeBtn.setDisabled(true);
	            cartBtn.setDisabled(true);
        	}
	    },
	    
	    onAddClick: function (sender, record) {

	        var productGrid = this.getView();
		    var productStore = productGrid.getStore();

	        //adding dummy product
	        var productModel = Ext.create('NewExtApp.model.Product');
	        productModel.set("productId", "");
	        productModel.set("productName", "");
	        productModel.set("productPrice", "");

	        productStore.insert(0, productModel);

	        productGrid.editingPlugin.startEdit(productModel, 1);
	    },
	    
	    onRemoveClick: function (sender, record) {
	    	var productGrid = this.getView();
		    var productStore = productGrid.getStore();

	        //delete selected rows if selModel is checkboxmodel
	        var selectedRows = productGrid.getSelectionModel().getSelection();

	        productStore.remove(selectedRows);
	    },
	    
	    onLoadClick: function (sender, record) {
	        var productStore = this.getView().getStore();
	        productStore.load();
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
	    
	    onAddtoCartClick:function(sender,record) {
	    	var productGrid = this.getView();
        	var selected = productGrid.getSelectionModel().getSelection()[0];
        	var orderstore = Ext.getStore('orderListStore');
        	orderstore.load();
        	var orderRecord = orderstore.findRecord('productId',selected.data.productId);
        	if(orderRecord )
        		Ext.Msg.alert('Product Is Already Present In Cart');
        	else
        		{
		    		Ext.Msg.prompt('Quantity', 'Please enter Quanity:', function(btn, qty) {
	                if (btn == 'ok') {
	                	
	                	var cartId = localStorage.getItem('cartId');
	                	
	                	var orderModel = Ext.create('NewExtApp.model.Order');
	                	orderModel.set('orderId',"");
	                	orderModel.set('productId',selected.data.productId);
	                	orderModel.set('productName',selected.data.productName);
	                	orderModel.set('productPrice',selected.data.productPrice);
	                	orderModel.set('orderQty',qty);
	                	orderModel.set('orderPrice',selected.data.productPrice*qty);
	                	orderModel.set('cartId',cartId);
	                	
	                	orderstore.insert(0,orderModel);
	                	orderstore.load();
	                	
	                	
	                	Ext.Msg.alert(qty+' '+selected.data.productName+' have been added to cart');
	                }
		    		})
        		}
	    }
});
