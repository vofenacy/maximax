import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
     return (
        <div>
            <Link to="/admin" >Dashboard</Link>
            <Link to="/admin/product" >Product</Link>
        </div>
     );
 }
 
 export default AdminHeader;