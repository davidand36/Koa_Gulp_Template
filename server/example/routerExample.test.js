/*
    routerExample.test.js

    Tests of routerExample

    See https://www.npmjs.com/package/mocha
    and https://mochajs.org/
    and https://www.npmjs.com/package/chai
    and https://www.chaijs.com/
    and https://www.npmjs.com/package/request-promise-native
*/

require( 'dotenv' ).config();
const assert = require( 'chai' ).assert;
const request = require( 'request-promise-native' );
const dbService = require( './serviceExample' );

const apiUrl = 'http://localhost:' + process.env.WEB_PORT + '/api/v1';

describe( 'routerExample', function( ) {
    beforeEach( async function( ) {
        await dbService.removeAll( );
    } );

    describe( 'POST', function( ) {
        it( 'returns a new item', async function( ) {
            const newItem = await request( {
                method: 'POST',
                url: apiUrl + '/',
                body: {
                    name: 'Item #1',
                    age: 10
                },
                json: true
            } );
            assert.isAbove( newItem.id, 0 );
            assert.equal( newItem.age, 10 );
        } );
    } );

    describe( 'GET by ID', function( ) {
        beforeEach( async function( ) {
            await request( {
                method: 'POST',
                url: apiUrl + '/',
                body: {
                    name: 'Item #1',
                    age: 10
                },
                json: true
            } );
        } );

        it( 'gets existing item', async function( ) {
            const response = await request( {
                method: 'GET',
                url: apiUrl + '/1',
                json: true,
                resolveWithFullResponse: true
            } );
            assert.equal( response.statusCode, 200 );
            assert.equal( response.body.name, 'Item #1' );         
        } );

        it( 'returns 404 on nonexistent item', async function( ) {
            const response = await request( {
                method: 'GET',
                url: apiUrl + '/100',
                json: true,
                resolveWithFullResponse: true,
                simple: false
            } );
            assert.equal( response.statusCode, 404 );
        } );
    } );
} );
