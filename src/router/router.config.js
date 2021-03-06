/**
 * Created by limuzi on 2017/8/11.
 */
import Setting from '../page/Setting'
import Click from '../page/ClickCounter'
import CounterPanel from '../page/CounterPanel'
import Calculator from '../page/Calculator'
import MemberInfo from '../template/MemberInfo'
import CommentApp from '../comment/CommentApp'

const routes = [
    {
        path: '/Click',
        component: Click
    },
    {
        path: '/MemberInfo',
        component: MemberInfo,
    },
    {
        path: '/Setting',
        component: Setting
    },
    {
        path: '/CounterPanel',
        component: CounterPanel
    },
    {
        path: '/Calculator/:id',
        component: Calculator
    },
    {
        path: '/CommentApp',
        component: CommentApp
    }
]

export default routes

