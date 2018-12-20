/*
    web.js

    Entry point for Web server

    See https://www.npmjs.com/package/dotenv
    and https://koajs.com/
    and https://www.npmjs.com/package/koa-logger
    and https://www.npmjs.com/package/koa-static
*/

require( 'dotenv' ).config( );
const Koa = require( 'koa' );
const logger = require( 'koa-logger' );
const static = require( 'koa-static' );

const koa = new Koa( );

koa.use( logger( ) );
koa.use( static( './public') );

const port = process.env.WEB_PORT || 80;
koa.listen( port );
console.log( 'Listening on port ', port );