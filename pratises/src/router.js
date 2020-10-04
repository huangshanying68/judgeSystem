import ShowHome from './components/ShowHome.vue'
import SingleHome from './components/SingleHome.vue'
import Explainss from './about/Explainss.vue'
import Common from './about/Common.vue'
import Problem from './problem/Problem.vue'
import SingleProblem from './problem/SingleProblem.vue'
import Sumissions from './problem/Sumissions.vue'
export default [
    { path: '/', component: ShowHome },
    { path: "/home/:idd", component: SingleHome },
    { path: "/about", component: Explainss },
    { path: "/FAQ", component: Common },
    { path: "/problem", component: Problem },
    { path: "/problem/:id", component: SingleProblem },
    // {path:"/problemID/:ids",component:Sumissions}
    { path: "/problemID/", component: Sumissions }
]