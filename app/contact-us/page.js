import styles from "@/styles/home.module.css";
const ContactUs = () => {
  return (
    <main className="flex items-center justify-between w-full h-screen relative overflow-hidden ">
      <div className="flex justify-center w-full z-10 px-[10px] md:px-[20px] mt-[65px] md:mt-[88px]">
        <div className="flex flex-col items-center justify-between p-[5px] md:p-[20px] rounded-[12px] text-white bg-[#000000cc] w-full  md:w-[40rem] lg:w-[52rem]">
          <iframe
            className="w-full height  md:w-[30rem]  lg:w-[48rem] "
            src="https://docs.google.com/forms/d/e/1FAIpQLSfBtA0oBpIAnlQbPiQYioI22_IwTLI5SRlmhxdGm3Zvo6FtOQ/viewform?embedded=true"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>{" "}
        </div>
      </div>
      <div className={styles.bgImage} />
    </main>
  );
};

export default ContactUs;
