import koaRouter from 'koa-router';
import home from '../controllers/home.js';
const router=koaRouter();

const routers=(app)=>{

    app.use(router.routes())
    .use(router.allowedMethods());

    router.get('/',home);
};

export default routers;