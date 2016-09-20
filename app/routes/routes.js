import koaRouter from 'koa-router';
import home from '../controllers/home.js';
import category from '../controllers/category.js';

const router=koaRouter();

const routers=(app)=>{

    app.use(router.routes())
    .use(router.allowedMethods());

    router
    .get('/',home)
    .get('/category/detail/:id',category.detail)
    .get('/category/list',category.list)
    .get('/category/create',category.create_get)
    .post('/category/create',category.create_post)
    .get('/category/delete',category.del)
    ;
};

export default routers;