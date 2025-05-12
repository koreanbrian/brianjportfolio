import { div } from "framer-motion/client";

export default function Intro() {
  return (
    <div className="relative h-full flex flex-col justify-center items-center w-full">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
        <div className="flex mt-[230px]  gap-[20px] items-center justify-center w-full">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="text-[35px] w-1/2 font-semibold">
              <span>정희영</span>
              <span className="text-[25px] font-normal"> 입니다.</span>
            </div>
            <div className="text-[18px] flex flex-col w-1/2 text-gray-700 gap-[20px]">
              <span className="w-full">
                프론트엔드 엔지니어
                <br /> University of Nevada, Las Vegas <br />
                호텔 경영학과 학사 & 컴퓨터 공학 학사 졸업
              </span>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img width="250" src="/img/BrianProfilePhoto.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
