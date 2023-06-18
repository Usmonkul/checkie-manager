import Link from "next/link";
import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { useUserStore } from "@/context/auth.context";
const Header = () => {
  const setIsUserExistFalse = useUserStore(
    (state) => state.setIsUserExistFalse
  );
  const username = useUserStore((state) => state.user.username);
  const [userOpen, setUserOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 !z-50 flex items-center justify-between py-4 px-6 bg-dark_blue h-[80px]">
      <div className="flex items-center space-x-3">
        <HiOutlineShieldCheck className="text-4xl text-green-600" />
        <Link
          href="/"
          className="text-2xl cursor-pointer font-bold uppercase hover:text-green-600 transition-all duration-150 tracking-wide"
        >
          Checkie
        </Link>
      </div>

      <div className="flex items-center space-x-7 uppercase">
        <ul className="flex items-center list-none space-x-7 font-semibold text-md text-primary_white">
          <li>
            <Link
              className="hover:text-primary_white/50 transition-all duration-150 cursor-pointer"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <button
              className="hover:text-primary_white/50 transition-all duration-150 cursor-pointer uppercase"
              onClick={setIsUserExistFalse}
            >
              Sign Out
            </button>
          </li>
        </ul>
        <div
          title="Account"
          className="cursor-pointer"
          onClick={() => setUserOpen((prev) => !prev)}
        >
          <RiAccountCircleLine className="text-3xl hover:text-primary_white/50 transition-all duration-150" />
          {userOpen && (
            <div
              className={`absolute right-2 -bottom-20 flex flex-col space-y-2 text-center bg-gray-800 rounded-md p-4 text-sm`}
            >
              <span className="font-bold">User:</span>
              <span className="text-red-500">
                {username?.length ? username : "No User"}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
