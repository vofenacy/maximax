import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Admin/Dashboard';
import ProductList from '../pages/Admin/Product/ProductList';

const AdminRoutes = [

    { path: '/admin', component: Dashboard, layout: AdminLayout },
    { path: '/admin/profile', component: Dashboard, layout: AdminLayout },
    { path: '/admin/product', component: ProductList, layout: AdminLayout },

];


export { AdminRoutes };