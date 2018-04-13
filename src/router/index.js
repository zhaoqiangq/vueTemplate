import Vue from 'vue'
import Router from 'vue-router'


//快捷登录
let publics = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/public/public'))
  }, "name")
}


Vue.use(Router)

let router = new Router({
  linkActiveClass:'is-active',
  mode:'history',
  scrollBehavior(to,form,savePosition){
    if(savePosition){
      return savePosition
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path: '/module/public',
      meta:{title: 'public',keepAlive: true,index:1,scrolltops:'',},
      component: publics
    },
  ]
})

//设置title
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    window.document.title = to.meta.title;
    next();
  }else {
    window.document.title = 'name';
    next();
  }

})

export default router;
