import koa from  'koa';
import logger from 'koa-logger';
import onerror from 'koa-onerror';
import render from 'koa-ejs';
import staticFileServer from 'koa-static';
import bodyParser from 'koa-bodyParser'; 

import path from  'path';

import routes from './routes/routes.js';

 
let app=koa();

render(app,{
    root: path.join(__dirname, 'views'),
    viewExt: 'html',
    layout: null,
    cache: false,
});

routes(app);

app.use(bodyParser());

app.use(staticFileServer(__dirname+'/public'));

app.use(logger());

onerror(app);

app.listen(3000);