import supportimg from "../assets/illustration.svg"
import { BsGridFill } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa6";
import { BsAirplaneFill } from "react-icons/bs";
import { PiUsersFill } from "react-icons/pi";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaRegFolderOpen } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import '../index.css'

const Sidebar = () => {
    return <aside className="flex flex-col justify-between items-center bg-white w-[200px] h-[1265px] rounded-xl">
        <div>
            <div>
                <img className="mt-[40px] ml-[24px] mb-[40px]" src="/Companys logo.svg" alt="" />
            </div>
            <ul className="list-none left-0 space-y-2">
                <li className="flex items-center gap-2 w-44 h-11 p-3 rounded-lg font-bold text-gray-500">
                    <BsGridFill />
                    <a href="#">Dashboard</a>
                </li>
                <li className="flex items-center gap-2 w-44 h-11 p-3 rounded-lg font-bold text-gray-500">
                    <IoLayers />
                    <a href="#">Projects</a>
                </li>
                <li className="flex items-center gap-2 w-44 h-11 p-3 rounded-lg font-bold text-gray-500">
                    <FaCalendar />
                    <a href="#">Calendar</a>
                </li>
                <li className="flex items-center gap-2 w-44 h-11 p-3 rounded-lg font-bold text-gray-500">
                    <BsAirplaneFill />
                    <a href="#">Vacations</a>
                </li>
                <li className="flex items-center gap-2 w-44 h-11 p-3 rounded-lg font-bold text-gray-500">
                    <PiUsersFill />
                    <a href="#">Employees</a>
                </li>
                <li className="flex items-center gap-2 w-44 h-11 p-3 rounded-lg font-bold text-gray-500">
                    <TbMessageCircleFilled />
                    <a href="#">Messanger</a>
                </li>
                <li className="flex items-center gap-2 w-44 h-11 p-3 rounded-lg font-bold text-gray-500">
                    <FaRegFolderOpen />
                    <a href="#">Info Portal</a>
                </li>
            </ul>
        </div>
        <div className="space-y-10 mb-10">
            <div className="flex justify-center w-[168px] h-[168px] bg-[#EBF3FF] rounded-2xl relative overflow-visible">
                <img className="flex absolute left-4 top-[-44px]" src={supportimg} alt="" />
                <button
                    className="flex text-white bg-[#3F8CFF] px-4 rounded-xl py-2 items-center gap-2 absolute top-24 font-medium">
                    <TbMessageCircle className="w-6 h-6" />
                    <span>Support</span>
                </button>
            </div>
            <button className="flex items-center gap-3 text-[#7D8592] font-medium pl-2">
                <LuLogOut className="scale-150" />
                Logout
            </button>
        </div>
    </aside>
}
export default Sidebar