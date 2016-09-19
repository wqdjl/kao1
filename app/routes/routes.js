import koaRouter from 'koa-router';
import home from '../controllers/home.js';
import category from '../controllers/category.js';

const router=koaRouter();

const routers=(app)=>{

    app.use(router.routes())
    .use(router.allowedMethods());

    router
    .get('/',home)
    .get('/category/:id',category.detail)
    .get('/category/create',category.create_get)
    .post('/category/create',category.create_post)
    .get('/category/list',category.list)
    
    ;
};

export default routers;