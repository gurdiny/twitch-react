import LogoTwitch from "./svgs/LogoTwitch";
import PointSvg from "./svgs/PointSvg";
import Buzon from "./svgs/Buzon";
import Profile from "./svgs/Profile";
import CopyIcon from "./svgs/CopyIcon";
import SearchIcon from "./svgs/SearchIcon";
export default function NavBar() {
  return (
    <nav className="grid col-start-1 col-end-3 lg:grid-cols-[1fr,2fr,1fr] grid-cols-[1fr_1fr] h-[3.5rem] bg-[#18181B] items-center w-full z-50 sticky top-0 ">
      <div className="flex flex-row justify-start items-center lg:gap-[20px]">
        <div>
          <LogoTwitch className="p-2" />
        </div>
        <div className="h-full">
          <p className="hidden lg:flex text-[#BF94FF] text-base font-semibold">
            Explorar
          </p>
        </div>
        <div>
          <button className="flex md:hidden p-2 hover:bg-[#53535F7A] rounded">
            <CopyIcon />
          </button>
        </div>
        <div>
          <button className="flex p-2 hover:bg-[#53535F7A] rounded">
            <PointSvg />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <input
          className="bg-transparent border-2 border-[#35353b] border-solid rounded-md w-[60%]"
          type="text"
        />
      </div>
      <div className="flex justify-end gap-5">
        <button className="p-2 hover:bg-[#53535F7A] rounded hidden lg:flex">
          <Buzon />
        </button>
        <div className="flex flex-row gap-1 lg:gap-4 mr-4">
          <button className="hidden lg:block text-white text-sm rounded bg-[#35353B] p-[0px_5px]">
            Iniciar Sesión
          </button>
          <button className="hidden lg:block text-white text-sm rounded bg-[#772CE8] p-[0px_5px]">
            Registrarse
          </button>
          <button className="fill-white lg:hidden">
            <SearchIcon />
          </button>
          <button className="p-2 hover:bg-[#53535F7A] rounded">
            <Profile />
          </button>
        </div>
      </div>
    </nav>
  );
}
