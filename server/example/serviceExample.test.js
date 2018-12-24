/*
    serviceExample.test.js

    Tests of serviceExample

    See https://www.npmjs.com/package/mocha
    and https://mochajs.org/
    and https://www.npmjs.com/package/chai
    and https://www.chaijs.com/
*/

const assert = require( 'chai' ).assert;
const expect = require( 'chai' ).expect;
const dbService = require( './serviceExample' );

describe( 'serviceExample', function( ) {
    beforeEach( async function( ) {
        await dbService.removeAll( );
    } );

    describe( 'create', function( ) {
        it( 'adds an item to the DB', async function( ) {
            const data = {
                name: 'Item 1',
                size: 10
            };
            const newItem = await dbService.create( data );

            expect( newItem.name ).to.equal( data.name );
            assert.isAbove( newItem.id, 0 );
        } );
    } );

    describe( 'getAll', async function( ) {
        await dbService.create( {
            name: 'Item 1',
            size: 10
        } );
        await dbService.create( {
            name: 'Item 2',
            size: 20
        } );

        it( 'gets all items in the DB', async function( ) {
            const items = await dbService.getAll( );

            assert.equal( items.length, 2 );
            expect( items[ 1 ].size ).to.equal( 20 );
        } );
    } );
} );