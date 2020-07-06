import TaskBoard from '../containers/TaskBoard/TaskBoard'
import QuanTri from '../containers/QuanTri/QuanTri'

export const STATUS = [
    {
        value: 0,
        label: 'CHƯA LÀM'
    },
    {
        value: 1,
        label: 'ĐANG LÀM'
    },
    {
        value: 2,
        label: 'ĐÃ XONG'
    },
]
export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
}
export const DELAY_MS = 1000

export const ADMIN_ROUTES = [
    {
        path: '/',
        name: 'Trang quản trị',
        exact: true,
        component: QuanTri,
    },
    {
        path: '/task-board',
        name: 'Quản lí task',
        component: TaskBoard,
    },
]
