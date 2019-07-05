Ext.define('NewExtApp.model.Coupon', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'couponId', type: 'int' },
        { name: 'couponCode', type: 'auto' },
        { name: 'couponDescription', type: 'auto' },
        { name: 'couponValidPrice', type: 'auto' },
        { name: 'couponValidDate', type: 'auto' },
        { name: 'couponDiscount', type: 'auto' }
    ],
	idProperty: 'couponId'
});