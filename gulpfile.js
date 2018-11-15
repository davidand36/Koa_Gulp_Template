const package = require( './package.json' );
const { series, parallel, src, dest } = require( 'gulp' );
const del = require( 'del' );
const replace = require( 'gulp-replace' );

function cleanPublic( ) {
    return del( [ 'public/' ] );
}

function processHtml( ) {
    return src( 'client/**/*.html' )
        .pipe( replace( '@@version@@', package.version ) )
        .pipe( dest( 'public/' ) );
}

exports.default = series( cleanPublic, processHtml );
