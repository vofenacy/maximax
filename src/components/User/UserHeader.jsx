import { Link } from 'react-router-dom';

const UserHeader = () => {
     return (
         <div>
            <Link to="/">Homepage</Link>
            <Link to="/about-us">About us</Link>
         </div>
     );
 }
 
 export default UserHeader;