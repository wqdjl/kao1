MY-Blog

A demo project for learn koajs

Requirements 
1、node.js
2、koa.js 1.XX
3、es6、babel
4、mongodb、mongoose

Koa Middleware
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
        yield this.render(url，arguments);
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
      
      app.use(router.routes())
      .use(router.allowMethods());
    
      router.get('path',function *(next){})
   }
5、koa-logger
   git:https://github.com/koajs/logger
6、koa-error
   git:https://github.com/koajs/error

Mongodb
   step1：download file and install ,from https://www.mongodb.com/download-center#community 
   step2: config mongodb, command: mongod.exe --logpath=path+'log\log.txt'  --dbpath=path+'db' 
          eg. mongod.exe --logpath=e:mongodb\data\log\log.txt  --dbpath=e:mongodb\data\db
   step3:
         start:net start mongodb
         stop:net stop mongodb

   Reference：http://www.cnblogs.com/aaronjs/p/4445543.html


Mongoose
   step1: init schema
   step2: =mongoose.model('model name',schema);
   step3: operate model
   Reference:http://mongoosejs.com/docs/api.html 
   

Some Wiki
1、use ctx.redirect in node
2、use ctx.query get query params
 
