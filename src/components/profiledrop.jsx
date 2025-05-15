import { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown, User, LogOut } from "lucide-react";
import { avatar } from "../assets";
import { cn } from "../lib/utils";
import httpClient from '../httpClient'

const ProfileDropdown = ({user}) => {

  const logoutuser = async () => {
    const resp = await httpClient.post("//localhost:5000/logout")
    window.location.href = "/"
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Menu>
        <MenuButton
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-full focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          <img
            src={avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
          />
          {user ? (
            <span className="text-gray-800 dark:text-gray-200 font-medium">{user.name}</span>
          ) : (
            <span className="text-gray-800 dark:text-gray-200 font-medium">Loading...</span>
          )}

          <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </MenuButton>

        <MenuItems
          className={cn(
            "absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all",
            open ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <MenuItem>
            {({ active }) => (
              <a
                href="/dashboard"
                className={`flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 ${
                  active ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
              >
                <User className="w-4 h-4" /> Profile
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                onClick={logoutuser}
                className={`flex items-center gap-2 w-full px-4 py-2 text-red-600 dark:text-red-400 ${
                  active ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default ProfileDropdown;
