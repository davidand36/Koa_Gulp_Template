/*
    putMessage.js

    Puts message on the Web page
*/

/*global $*/

export default function( message ) {
    var $p = $('<p>').append( message );
    $('#content').append( $p );
}