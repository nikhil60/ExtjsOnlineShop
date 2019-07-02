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
	        this.calculateTotalPrice();
	    },
	    
	    onLogoutClick: function (sender, record) {
	    	var customerparamstore = Ext.getStore('customerparamstores');
	    	customerparamstore.removeAll();
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
	    	this.calculateTotalPrice();
	    },
	    
	    calculateTotalPrice : function(sender,record)
	    {
	    	var orderGrid = this.getView();
		    var orderStore = orderGrid.getStore();
		    var CartPrice=0;
		    orderStore.each(function(record,idx){
		    	CartPrice+=record.get('orderPrice'); 
		    });
		    Ext.getCmp('cartPrice').setText(CartPrice);
	    }
});
