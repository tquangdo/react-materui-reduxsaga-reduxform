import TaskBoard from '../containers/TaskBoard/TaskBoard'
import QuanTriPage from '../containers/QuanTriPage/QuanTriPage'
import DangnhapPage from '../containers/DangnhapPage/DangnhapPage'
import DangkiPage from '../containers/DangkiPage/DangkiPage'
import HomePage from '../containers/HomePage/HomePage'

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
export const TOKEN = 'TOKEN'
export const DELAY_MS = 1000
export const REDIRECT_AFTER_DANGKI = '/reduxsaga-materui-reduxform';
export const REDIRECT_AFTER_DANGNHAP_ADMIN = REDIRECT_AFTER_DANGKI + '/admin';
export const REDIRECT_AFTER_DANGNHAP_USER = REDIRECT_AFTER_DANGKI + '/home';

export const ADMIN_ROUTES = [
    {
        path: REDIRECT_AFTER_DANGNHAP_ADMIN,
        name: 'Trang quản trị',
        exact: true,
        component: QuanTriPage,
    },
    {
        path: REDIRECT_AFTER_DANGKI + '/admin/task-board',
        name: 'Quản lí task',
        component: TaskBoard,
    },
]

export const USER_ROUTES = [
    {
        path: REDIRECT_AFTER_DANGKI,
        name: 'Đăng nhập',
        exact: true,
        component: DangnhapPage,
    },
    {
        path: REDIRECT_AFTER_DANGKI + '/signup',
        name: 'Đăng kí',
        component: DangkiPage,
    },
    {
        path: REDIRECT_AFTER_DANGNHAP_USER,
        name: 'Trang chủ',
        component: HomePage,
    },
]

