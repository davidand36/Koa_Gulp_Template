/*
    web.js

    Entry point for Web server

    See https://www.npmjs.com/package/dotenv
    and https://koajs.com/
    and https://www.npmjs.com/package/koa-helmet
    and https://www.npmjs.com/package/koa-favicon
    and https://www.npmjs.com/package/koa-logger
    and https://www.npmjs.com/package/koa-compress
    and https://www.npmjs.com/package/koa-static
*/

require( 'dotenv' ).config( );
const Koa = require( 'koa' );
const helmet = require( 'koa-helmet' );
const favicon = require( 'koa-favicon' );
const logger = require( 'koa-logger' );
const compress = require( 'koa-compress' );
const static = require( 'koa-static' );

const koa = new Koa( );

koa.use( helmet( ) );
koa.use( favicon( __dirname + '/public/favicon.ico' ) );
koa.use( logger( ) );
koa.use( compress( ) );
koa.use( static( './public') );

const port = process.env.WEB_PORT || 80;
koa.listen( port );
console.log( 'Listening on port ', port );