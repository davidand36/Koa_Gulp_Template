/*
    submodule2.js

    Exports a default function
*/

import putMessage from './putMessage.js';
import { counter, incrementCounter as incrCtr } from './submodule3.js';

export default function( message ) {
    let msg = 'Message from submodule2: ' + message;
    putMessage( msg );

    putMessage( 'Submodule3 counter: ' + counter );
    putMessage( 'Incrementing counter' );
    incrCtr();
    putMessage( 'Submodule3 counter: ' + counter );
}