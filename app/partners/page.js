"use client";
import styles from "@/styles/home.module.css";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
const Patners = () => {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState("");
  useEffect(() => {
    setSrc(
      "https://docs.google.com/forms/d/e/1FAIpQLSdLr3LLYATrpLvgUFebzkh1HWf2kGJXheh-WKltUFvla3Xjiw/viewform?embedded=true"
    );
    return () => {
      setLoading(true);
    };
  }, []);
  return (
    <main className="flex items-center justify-between w-full h-screen relative overflow-hidden">
      <div className="flex justify-center w-full z-10 px-[10px] md:px-[20px] mt-[65px] md:mt-[88px]">
        <div
          className={
            loading
              ? "flex flex-col items-center justify-between p-[5px] md:p-[20px] rounded-[12px] text-white bg-[#000000cc] w-full  md:w-[40rem] lg:w-[52rem]"
              : "flex flex-col md:flex-col items-center justify-between p-[10px] md:p-[20px] rounded-[12px] text-white bg-[#000000cc] w-full md:w-[40rem] lg:w-[52rem] patners-height"
          }
        >
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
          ) : (
            <div>
              <h1 className="text-[25px] text-center md:text-[32px] font-bold md:leading-[50px] my-1 md:my-2">
                Join Sugandra Network
              </h1>
              <p className="text-[16px] text-justify leading-[20px] md:leading-[25px] mb-2 mt-2">
                Are you a property owner or a broker? Partner with us to attract
                more interested clients! Simply fill out the form below to
                connect with us, and we'll be in touch to discuss how we can
                assist you further.
              </p>
            </div>
          )}

          <iframe
            className={
              loading ? "hidden" : "w-full height md:w-[30rem]  lg:w-[48rem] "
            }
            src={src}
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            onLoad={() => setLoading(false)}
          >
            Loading…
          </iframe>
        </div>
      </div>
      <div className={styles.bgImage} />
    </main>
  );
};

export default Patners;
