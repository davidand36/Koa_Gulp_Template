/*
    routerExample.js

    Example of Koa router

    See https://www.npmjs.com/package/koa-router
    and https://www.npmjs.com/package/koa-body
*/

const Router = require( 'koa-router' );
const koaBody = require( 'koa-body' );

const router = new Router( );

router.prefix( '/api/v1');

router.get( '/', getAll );
router.get( '/:id', getOne );
router.post( '/', koaBody(), create );
router.put( '/:id', koaBody(), update );
router.delete( '/:id', destroy );

async function getAll( ctx ) {
    ctx.response.body = [
        'all',
        'the',
        'things'
    ];
}

function getOne( ctx ) {
    ctx.response.body = {
        id: ctx.params.id,
        name: 'a thing'
    };
}

function create( ctx ) {
    const newThing = Object.assign( { 
            id: 1001
        }, 
        ctx.request.body );
    ctx.response.body = newThing;
}

function update( ctx ) {
    const updatedThing = Object.assign( { 
            id: ctx.params.id
        },
        ctx.request.body );
    ctx.response.body = updatedThing;
}

function destroy( ctx ) {
    ctx.response.body = {
        id: ctx.params.id,
        result: 'deleted'
    };
}

module.exports = router;
