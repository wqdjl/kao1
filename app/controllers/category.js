import data from '../data/data.js'

import Category from '../modules/category.js';

let _create_get=function *(next){
     console.log('_create_get');
    yield next;
    yield this.render('category/create');
};

let _create_post=function *(next){
    console.log('_create_post');
    yield next;
    let name=this.request.body.name;
    let categories=yield Category.find().exec();
    console.log(categories);
    let id=categories.length==0?1:(categories[categories.length-1]['id']+1);
    let category=new Category({
        id:id,
        name:name
    });
    yield category.save();
    // data.category=data.category||[];
    // let id=data.category.length+1;
    // data.category.push({id:id,name:name}); 
    this.redirect('/category/detail/'+id);//this.render('category/detail',{id:id,name:name});
};


let _detail=function *(next){
      console.log('_detail');
    yield next;
    let id =this.params.id;
    let categoty=yield Category.findOne({id:id}).exec();
   
    // data.category=data.category||[];
    // data.category.forEach((item,index)=>{
        
    //        if ( item.id==id){
    //           categoty=item;
    //           return; 
    //        }  
    //  });
   
    if (categoty) {
       yield this.render('category/detail',categoty);  
    }else{
        yield this.render('404');  
    }
};

let _list=function *(next){
     console.log('_list');
    yield next;
    // data.category=data.category||[];
    let categories=yield Category.find().exec();
    yield this.render('category/list',{categories:categories});  
};

let _del=function *(next){
    console.log('_del');
     yield next;
     let id=this.query.id; 
     yield Category.findOneAndRemove({id:id}).exec();
     this.redirect('/category/list');
};

export default {
    create_get:_create_get,
    create_post:_create_post,
    detail:_detail,
    list:_list,
    del:_del
}