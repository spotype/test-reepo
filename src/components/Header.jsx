import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [drop, setDrop] = useState(false);

  return (
    <div className="fixed w-full">
      <div className="h-20 w-full flex items-center justify-center z-50 bg-white shadows">
        <div className="mx-auto flex w-11/12 justify-between items-center 2xl:w-[1500px]">
          <div className="">
            <NavLink to={"/"} className="font-bold text-2xl text-yellow-400">
              Explore
            </NavLink>
          </div>

          <div className="hidden md:block md:flex md:items-center md:font-bold md:gap-3 xl:gap-6">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600"
                  : " hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/tours"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : " hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Tours
            </NavLink>
            <NavLink
              to={"/hotel"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : " hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Hotel
            </NavLink>
            <NavLink
              to={"/gallery"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : " hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to={"/pages"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Pages
            </NavLink>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition-all duration-300 ease-in"
              }
            >
              Login
            </NavLink>
            <NavLink
              to={"/sign-up"}
              className={"bg-yellow-300 py-2 px-6 text-md font-bold rounded-xl"}
            >
              Sign UP
            </NavLink>
          </div>
          <div className="  md:hidden">
            <button
              onClick={() => setDrop(!drop)}
              className="flex items-center justify-center md:hidden"
            >
              <AlignJustify width={40} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          drop
            ? `absolute w-full bg-white text-center py-10 rounded-2xl transition-all duration-500 top-28 -z-10 shadows md:hidden`
            : `absolute w-full bg-white text-center py-10 rounded-2xl transition-all duration-500 -top-[30rem] -z-10 md:hidden`
        }
      >
        <div className="flex flex-col gap-5 font-bold items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/tours"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-black"
            }
          >
            Tours
          </NavLink>
          <NavLink
            to={"/hotel"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-black"
            }
          >
            Hotel
          </NavLink>
          <NavLink
            to={"/gallery"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-black"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to={"/pages"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-black"
            }
          >
            Pages
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-black"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-black"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-black"
            }
          >
            Login
          </NavLink>
          <NavLink
            to={"/sign-up"}
            className="bg-yellow-300 mt-2 py-3 px-10 text-md font-bold rounded-xl"
          >
            Sign UP
          </NavLink>
        </div>
      </div>
    </div>
  );
}
