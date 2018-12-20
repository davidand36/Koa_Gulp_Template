/*
    submodule2.js

    Exports a default function
*/

import { counter, incrementCounter as incrCtr } from './submodule3.js';

export default function( message ) {
    let msg = 'Message from submodule2: ' + message;
    console.log( msg );

    console.log( 'Submodule3 counter: ' + counter );
    console.log( 'Incrementing counter' );
    incrCtr();
    console.log( 'Submodule3 counter: ' + counter );
}