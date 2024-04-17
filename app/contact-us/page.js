"use client";
import styles from "@/styles/home.module.css";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
const ContactUs = () => {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState("");

  useEffect(() => {
    setSrc(
      "https://docs.google.com/forms/d/e/1FAIpQLSfBtA0oBpIAnlQbPiQYioI22_IwTLI5SRlmhxdGm3Zvo6FtOQ/viewform?embedded=true"
    );
    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <main className="flex items-center justify-between w-full h-screen relative overflow-hidden ">
      <div className="flex justify-center w-full z-10 px-[10px] md:px-[20px] mt-[65px] md:mt-[88px]">
        <div className="flex flex-col items-center justify-between p-[5px] md:p-[20px] rounded-[12px] text-white bg-[#000000cc] w-full  md:w-[40rem] lg:w-[52rem]">
          {loading ? (
            <Bars
              height="80"
              width="80"
              color="#f38321"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : null}
          <iframe
            className={
              loading ? "hidden" : "w-full md:w-[30rem]  lg:w-[48rem] height"
            }
            src={src}
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            onLoad={() => {
              setLoading(false);
              console.log("enter");
            }}
          >
            Loading…
          </iframe>
        </div>
      </div>
      <div className={styles.bgImage} />
    </main>
  );
};

export default ContactUs;
