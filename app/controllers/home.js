export default function *(next){
    yield this.render('home/home',
    {
        content:'content body', 
       title:undefined
    });
    yield next;
    
}