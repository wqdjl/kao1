import data from '../data/data.js'

let _create_get=function *(next){
     console.log('_create_get');
    yield next;
    yield this.render('category/create');
};

let _create_post=function *(next){
    console.log('_create_post');
    yield next;
    let name=this.request.body.name;
    data.category=data.category||[];
    let id=data.category.length+1;
    data.category.push({id:id,name:name}); 
    this.redirect('/category/'+id);//this.render('category/detail',{id:id,name:name});
};


let _detail=function *(next){
      console.log('_detail');
    yield next;
    let id =this.params.id;
    let categoty=undefined;
   
    data.category=data.category||[];
    data.category.forEach((item,index)=>{
        
           if ( item.id==id){
              categoty=item;
              return; 
           }  
     });
   
    if (categoty) {
       yield this.render('category/detail',categoty);  
    }else{
        yield this.render('404');  
    }
};

let _list=function *(next){
     console.log('_list');
    yield next;
    data.category=data.category||[];
    yield this.render('category/list',{categories:data.category});  
};

let _del=function *(next){
    console.log('_del');
     yield next;
     let id=this.query.id; 
 
     data.category=data.category||[];
     data.category= data.category.filter(item=>{
         console.log(item.id+","+id);
         return item.id!=id;
     });
 
     this.redirect('/category/list');
};

export default {
    create_get:_create_get,
    create_post:_create_post,
    detail:_detail,
    list:_list,
    del:_del
}