MY-Blog

A demo project for learn koajs

Requirements 
1、node.js
2、koa.js 1.XX
3、es6、babel

Middleware
1、koa-bodyParser
   A body parser for koa,base on co-body.Support json、form、text type body.
   git:https://github.com/koajs/bodyparser 
   usage:
    {
      import koa from 'koa';
      import koaBodyParser from 'koa-bodyParser';
      let app=koa();
      app.use(koaBodyParser()); //the parsed body will store in this.request.body
    }
2、koa-static
   Koa static file serving middleware,wrapper for koa-send.
   git:https://github.com/koajs/static
   usage:
   { 
      import koa from 'koa';
      import staticServer from 'koa-static';
      let app=koa();
      app.use(staticServer('static file root path',opts));
   }
3、kao-ejs
   koa ejs view render middleware.Support all feature of ejs.
   git:https://github.com/koajs/ejs
   usage:
   {
      import koa from 'koa';
      import render from 'koa.ejs';
      import path from 'path';
      let app=koa();

      render(app,{
        root:path.join(__dirname,'view root path'),
        layout:'layout',//optional 
        viewExt:'file extension',
        cache:boolen,
      });

      app.use(function *(next){
        yield this.render(options);
        yeild next;
      });
   }
4、koa-router
   Router middle for koa
   usage:
   {
      import koa from 'koa';
      import koaRouter from 'koa-router';
      
      let app=koa();
      let router=koaRouter();
      
      app.user(router.routes())
      .user(router.allowMethods());
    
       router.get('path',function *(next){})
   }
5、koa-logger
   git:https://github.com/koajs/logger
6、koa-error
   git:https://github.com/koajs/error
