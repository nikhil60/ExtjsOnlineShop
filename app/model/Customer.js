Ext.define('NewExtApp.model.Customer', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'customerId', type: 'int' },
        { name: 'userName', type: 'auto' },
        { name: 'passWord', type: 'auto' },
        { name: 'firstName', type: 'auto' },
        { name: 'middleName', type: 'auto' },
        { name: 'lastName', type: 'auto' },
        { name: 'emailAddress', type: 'auto' },
        { name: 'dateOfBirth', type: 'date' },
        { name: 'gender', type: 'auto' },
        { name: 'maritalStatus', type: 'auto' }

    ]
});
