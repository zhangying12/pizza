import home from './components/home'
import menue from './components/menue'
import admin from './components/admin'
import about from './components/about/About'
import login from './components/login'
import register from './components/register'
// 二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

export const routes=[
  {path:'/', name:"homeLink", components:{
    default:home,
    'orderingGuide':OrderingGuide,
    "delivery":Delivery,
    "history":History
  }},
  {path:'/menu', name:"menueLink", component:menue},
  {path:'/admin', component:admin
  // ,beforeEnter :(to,from,next) =>{
  //   if(to.path=='/login' || to.path=='/register' ){
  //               next();
  //            }else{
  //               alert("还没有登录，请先登录");
  //               next("/login");
  //           }
  // }
},
  {path:'/about', redirect:'/history', component:about, children:[
    {path:'/about/contact', component:Contact, name:"contactLink"},
    {path:'/history', component:History, name:"historyLink"},
    {path:'/delivery', component:Delivery, name:"DeliveryLink"},
    {path:'/orderingGuide', component:OrderingGuide, name:"OrderingGuideLink"},
  ]},
  {path:'/login', component:login},
  {path:'/register', component:register},
  {path:'*', redirect:'/'},
  // 如果不满足上述路由，就跳转到主页
]