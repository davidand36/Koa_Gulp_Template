/*
    moduleDemo.js

    Simple demo of ES6 modules
*/

import './submodule1.js'; //Just for side effects
import sm2 from './submodule2.js'; //Default function, nested import

sm2( 'Hi, submodule2!' );
