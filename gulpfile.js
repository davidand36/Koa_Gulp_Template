const { series, parallel, src, dest } = require( 'gulp' );
const del = require( 'del' );

function cleanPublic( ) {
    return del( [ 'public/' ] );
}

function copyHtml( ) {
    return src( 'client/**/*.html' )
        .pipe( dest( 'public/' ) );
}

exports.default = series( cleanPublic, copyHtml );