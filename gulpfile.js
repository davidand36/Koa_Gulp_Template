/*
    gulpfile.js

    See https://gulpjs.com/
    and https://www.npmjs.com/package/del
    and https://www.npmjs.com/package/gulp-replace
    and https://www.npmjs.com/package/gulp-sass
    and https://www.npmjs.com/package/node-sass
*/

const package = require( './package.json' );
const { series, parallel, src, dest } = require( 'gulp' );
const del = require( 'del' );
const replace = require( 'gulp-replace' );
const sass = require( 'gulp-sass' );

function cleanPublic( ) {
    return del( [ 'public/' ] );
}

function processHtml( ) {
    return src( 'client/**/*.html' )
        .pipe( replace( '@@version@@', package.version ) )
        .pipe( dest( 'public/' ) );
}

function processCss( ) {
    return src( 'client/**/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( dest( 'public/' ) );
}

const processClient = parallel( processHtml, processCss );

exports.clean = cleanPublic;
exports.default = series( cleanPublic, processClient );
