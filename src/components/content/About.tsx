export default function About() {
  return (
    <div className="relative h-full flex flex-col justify-center items-center">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px]">
        <div className="mt-[230px] px-[20px] gap-[20px]">
          <div className="text-[35px] w-full font-semibold">
            <span>About me</span>
          </div>
          <div className="text-[20px] flex flex-col w-full text-gray-700 gap-[20px]">
            <span>
              기술과 비즈니스 관점을 모두 이해하는 프론트엔드 개발자입니다.
              <br />
              <strong>React</strong>와 <strong>Next.js</strong> 를 중심으로,
              <br /> 다양한 기술 경험을 통한 다양한 웹 서비스를 구축하며,
              <br />
              사용자 중심의 직관적인 경험을 구현하는 데 집중해왔습니다.
            </span>
            <span>
              <strong>다국적 팀과의 협업 경험</strong>과 <br />
              <strong>한국어·영어·일본어</strong> 소통 능력을 바탕으로,
              <br />
              국내외 사용자와 비즈니스 요구에 <br />
              유연하게 대응할 수 있는 개발자입니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
