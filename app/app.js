import koa from  'koa';
import logger from 'koa-logger';
import onerror from 'koa-onerror';
import staticFileServer from 'koa-static';
import bodyParser from 'koa-bodyParser'; 


let app=koa();

// app.use(function *(next){
//     yield next;
//    //throw new Error(12313);
//    //this.body='123'
// });
app.use(bodyParser());

app.use(staticFileServer(__dirname+'/public'));

app.use(logger());

// app.on('error',(err,ctx)=>{
//     console.log("error:"+err+'\r\nend');
// });
onerror(app);

app.listen(3000);