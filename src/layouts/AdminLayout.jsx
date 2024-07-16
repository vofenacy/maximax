import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';
import AdminHeader from "../components/Admin/AdminHeader";
import AdminFooter from "../components/Admin/AdminFooter";
import AdminSidebar from "../components/Admin/AdminSidebar";

function AdminLayout({ children }) {
    return (
        <div>
            <AdminHeader />
            <div className="">
                <AdminSidebar />
                <div className="content">
                    {children}
                </div>
            </div>
            <AdminFooter />
        </div>
    );
}

export default AdminLayout;