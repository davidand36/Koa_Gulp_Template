/*
    handlebarsDemo.js

    Demo of Handlebars templates
*/

/*global $, Handlebars*/

import addressTemplate from './_addressTemplate.js';
Handlebars.registerPartial( 'address', addressTemplate );
import orderTableTemplate from './orderTableTemplate.js';
Handlebars.registerHelper( 'formatPhone', formatPhone );

let orders = [
    {
        name: 'Sum Pur Sukker',
        billingAddress: {
            streetAddress1: '123 Main St',
            city: 'Innocence',
            state: 'OK',
            zipCode: '98765-4321'
        },
        shippingAddress: {
            streetAddress1: '7734 Prison Rd',
            streetAddress2: 'Cell Block 9',
            city: 'Guilty',
            state: 'TX',
            zipCode: '95959-5959'
        },
        phone: '8881501337'
    },
    {
        name: 'Bob Dobbs',
        billingAddress: {
            streetAddress1: '909 Fairway Blvd',
            city: 'Subgenius',
            state: 'AR',
            zipCode: '90909'
        },
        phone: '9090909090'
    }
];

let tableHtml = orderTableTemplate( { orders } );
$('#content').html( tableHtml );

function formatPhone( phone ) {
    return '(' + phone.substr( 0, 3 ) + ') ' + phone.substr( 3, 3 ) +
        '-' + phone.substr( 6, 4 );
}
