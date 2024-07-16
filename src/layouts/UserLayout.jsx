import UserHeader from "../components/User/UserHeader";
import UserFooter from "../components/User/UserFooter";

function UserLayout({ children }) {
    return (
        <div>
            <UserHeader />
            <div className="">
                <div className="content">
                    {children}
                </div>
            </div>
            <UserFooter />
        </div>
    );
}

export default UserLayout;