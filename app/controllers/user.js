import User from '../modules/user.js';

let get=function *(next){
    console.log('get');
    let id=this.query.id;
    let user={};
    if(id){
        user =yield User.findOne({id:id});
    }
    console.log(user);
    yield this.render('/user/create',{user:user});
}

let post=function *(next){
    console.log('post');
    yield next;
    let users=yield User.find();
    let id=users.length==0?1:users[users.length-1]['id']+1;
    let postData=this.request.body;
   
    let user=new User({
        id:id,
        name:postData.name,
        birthday:postData.birthday,
        password:postData.password,
        sex:postData.sex
    });

    yield user.save();
    this.redirect('/user/list');
};

let list=function *(next){
    console.log('list');
    yield next;
    let users=yield User.find();
    yield this.render('/user/list',{users:users});
};

let del=function *(next){
    console.log('del');
    yield next;
    let id=this.query.id;
    yield User.findAndRemove({id:id});
    this.redirect('/user/list');
}

export default {
    get:get,
    list:list,
    post:post,
    delete:del
};

