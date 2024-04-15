// import Image from "next/image";
import Link from "next/link";
import { FaHandshakeSimple } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="fixed flex items-center w-full z-20 px-2 md:px-10 py-2 md:py-4 bg-[#434141ad] shadow-[1px_1px_10px_4px_#434141ad]">
      <div className="w-2/3">
        <Link className=" block w-fit" href="/">
          <img
            className="cursor-pointer w-[111px] h-[48px] md:w-[147px] md:h-[55px]"
            src="/Sugandhra.png"
            // width={150}
            // height={150}
            alt="Sungndhara Logo"
          />
        </Link>
      </div>
      <div className="w-1/3">
        <ul className="flex justify-end w-full">
          <li>
            <Link
              className="text-white bg-[#fb8325] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-[13px] md:text-sm px-3 md:px-5 py-1.5 md:py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 "
              href="/partners"
            >
              <FaHandshakeSimple className="mr-2 w-4 h-4 md:w-6 md:h-6" />
              Partners
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;