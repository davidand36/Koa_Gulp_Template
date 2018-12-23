/*
    serviceExample

    Simple "database" service for demonstration and testing purposes
*/

const db = [];
let nextId = 1;

function getAll( ) {
    return db;
}

function getById( id ) {
    const theElement = db.find( function( el ) {
        return el.id === +id;
    } );
    return theElement || null;
}

function create( data ) {
    const newElement = Object.assign( {}, data, { id: nextId++ } );
    db.push( newElement );
    return newElement;
}

function update( id, data ) {
    const index = db.findIndex( function( el ) {
        return el.id === +id;
    } );
    if ( index < 0 ) {
        return null;
    }
    const theElement = db[ index ];
    Object.assign( theElement, data, { id: id } );
    return theElement;
}

function remove( id ) {
    const index = db.findIndex( function ( el ) {
        return el.id === +id;
    } );
    if ( index >= 0 ) {
        db.splice( index, 1 );
    }
    return true;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};