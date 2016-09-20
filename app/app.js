import koa from  'koa';
import logger from 'koa-logger';
import onerror from 'koa-onerror';
import render from 'koa-ejs';
import staticFileServer from 'koa-static';
import bodyParser from 'koa-bodyParser'; 

import path from  'path';
import mongoose from 'mongoose';

import routes from './routes/routes.js';

mongoose.connect('mongodb://localhost/blog');

let app=koa();

app.use(bodyParser());

app.use(staticFileServer(__dirname+'/public'));

render(app,{
    root: path.join(__dirname, 'views'),
    viewExt: 'html',
    layout: null,
    cache: false,
    debug:true
});

routes(app);


app.use(logger());

onerror(app);

app.listen(3000);