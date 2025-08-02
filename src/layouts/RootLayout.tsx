import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const RoutLayout = () => {
    return (
        <>
        <div>
            <Sidebar />
            <div>
                <Header />
                <Outlet />
            </div>
        </div>
    </>
    )
}

export default RoutLayout