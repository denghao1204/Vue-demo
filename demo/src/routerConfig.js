import Index from './pages/index.vue'
import Detail from './pages/detail.vue'
import DetailAnalysis from './pages/detail/analysis.vue'
import DetailCount from './pages/detail/count.vue'
import DetailForecast from './pages/detail/forecast.vue'
import DetailPublish from './pages/detail/publish.vue'
import orderList from './pages/orderList.vue'




export default {
  routes:[
    {path:'/index',component:Index},
    {path:'/orderList',component:orderList},
    {path:'/detail',
      redirect:'detail/count',
      component:Detail,
      children: [
        {
          path:'analysis',
          component:DetailAnalysis
        },
        {
          path:'count',
          component:DetailCount
        },
        {
          path:'forecast',
          component:DetailForecast
        },
        {
          path:'publish',
          component:DetailPublish
        }
      ]
    },
    {path:'*',redirect:'/index'},
  ]
}
