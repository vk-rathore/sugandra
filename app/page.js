import styles from "@/styles/home.module.css";
import { FaWpforms } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-between w-full h-screen relative overflow-hidden">
      <div className="flex justify-center items-center w-full  z-10 px-[20px] mt-[65px] md:mt-[89px]">
        <div className="flex flex-col items-center justify-between p-[20px] rounded-[12px] text-white bg-[#000000cc] w-[52rem]">
          <h1 className="text-[29px] md:text-[32px] font-bold leading-[50px] my-4 md:my-8">
            Sugandra
          </h1>

          <p className="text-[16px] text-justify">
            Tired of the room hunt in Gurugram? Frustrated with listings not
            meeting your needs? Say goodbye to the struggle! Get your place
            without the endless website hoping. Escape the stress of going from
            one place to another in search of a room. Your hassle-free room
            search begins here! Let's find your perfect space together!
          </p>
          <div className=" my-4 md:my-8 w-full flex justify-center">
            <Link
              href="/contact-us"
              class="text-white bg-[#fb8325] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-[13px] md:text-sm px-3 md:px-5 py-1.5 md:py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 "
            >
              <FaWpforms className="mr-2 w-4 h-4 md:w-6 md:h-6" />
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bgImage} />
    </main>
  );
}
