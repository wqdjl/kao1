import koa from  'koa';

let app=koa();

app.use(function *(){
    this.body='123'
});

app.listen(3000);