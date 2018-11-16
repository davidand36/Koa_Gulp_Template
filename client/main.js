/*
    main.js

    Main module for this app
*/

import 'js/submodule1.js'; //Just for side effects
import sm2 from 'js/submodule2.js'; //Default function
import { counter, incrementCounter as incrCtr } from 'js/submodule3.js';

sm2( 'Hi, submodule2!' );

console.log( 'Submodule3 counter: ' + counter );
console.log( 'Incrementing counter' );
incrCtr( );
console.log( 'Submodule3 counter: ' + counter );
