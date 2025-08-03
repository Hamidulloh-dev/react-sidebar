import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import '../index.css'
const RoutLayout = () => {
  return (
    <>
      <div className="flex w-full h-full bg-blue-50 p-5">
        <Sidebar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default RoutLayout;
