/**
 * Created by limuzi on 2017/8/11.
 */
import MemberInfo from '../page/MemberInfo'
import Setting from '../page/Setting'
import Click from '../page/ClickCounter'
import CounterPanel from '../page/CounterPanel'
import Calculator from '../page/Calculator'

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
        path: '/Calculator',
        component: Calculator
    }
]

export default routes

