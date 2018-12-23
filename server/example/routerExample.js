/*
    routerExample.js

    Example of Koa router

    See https://www.npmjs.com/package/koa-router
    and https://www.npmjs.com/package/koa-body
*/

const Router = require( 'koa-router' );
const koaBody = require( 'koa-body' );
const dbService = require( './serviceExample' )

const router = new Router( );

router.get( '/', getAll );
router.get( '/:id', getById );
router.post( '/', koaBody(), create );
router.put( '/:id', koaBody(), update );
router.delete( '/:id', remove );

async function getAll( ctx ) {
    ctx.response.body = await dbService.getAll( );
}

async function getById( ctx ) {
    const item = await dbService.getById( ctx.params.id );
    if ( item ) {
        ctx.response.body = item;
    } else {
        ctx.response.status = 404;
    }
}

async function create( ctx ) {
    const item = await dbService.create( ctx.request.body );
    ctx.response.body = item;
}

async function update( ctx ) {
    const item = await dbService.update( ctx.params.id, ctx.request.body );
    if ( item ) {
        ctx.response.body = item;
    } else {
        ctx.response.status = 404;
    }
}

async function remove( ctx ) {
    const result = await dbService.remove( ctx.params.id );
    ctx.response.status = result ? 200 : 500;
}

module.exports = router;
