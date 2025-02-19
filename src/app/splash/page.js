import SignComponent from "../../Components/SignComponent";

export default function Splash() {
  return (
    <div className="relative h-screen overflow-x-hidden">
      <div className="header w-full relative z-[999] -top-[100%]">
        <div className="absolute top-0 left-0 w-full md:h-[316px] h-[140px] overflow-hidden z-0">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
          >
            <source src="/Images/video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative md:h-[316px] h-[140px] z-10 flex items-center justify-center shadow-lg">
          <img
            src="/svgIcons/payshiftLogo.svg"
            alt="PayShift Logo"
            className="md:w-[300px] md:h-[99.4px] w-[147.25px] h-[46.5px]"
          />
        </div>
      </div>
      <img
        src="/Images/splashbg1.png"
        className="splash-img1 absolute top-[86%] -z-[2]"
      />
      <img
        src="/Images/splashbg2.png"
        className="splash-img2 absolute top-[75%] -left-[100%] -z-[3]"
      />
      <div className="component relative -bottom-[100%]">
        <SignComponent />
      </div>
    </div>
  );
}
