import { CiSettings } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { ChatBox } from "../components";
import { SidebarButton, Sidebarbuttons } from "../components";
import { sidebarPhotos, sidebarProfile } from "../constants";

const Sidebar = () => {
  return (
    <div className="flex  ">
      <aside class="flex h-screen w-20 flex-col items-center ">
        <div class="flex h-[4.5rem] w-full items-center justify-center  p-2">
          <button class="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <IoChatbubblesOutline class="h-12 w-12 stroke-current" />
            <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div class="absolute inset-0 -left-1 flex items-center">
                  <div class="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Chat <span class="text-gray-400">(Y)</span>
              </div>
            </div>
          </button>
        </div>

        <Sidebarbuttons buttons={sidebarPhotos} />
        <div class="flex flex-col items-center gap-y-4 py-10">
          <button class="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <CiSettings class="h-6 w-6 stroke-current" />
          </button>
          <SidebarButton button={sidebarProfile} />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
