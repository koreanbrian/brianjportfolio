"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
type JobDesc = { company: string; position: string; startDate: string; endDate: string; taskDesc: TaskDesc[] };
type TaskDesc = { headTask: string; subTask: string[] };
export default function Career() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [showName, setShowName] = useState(false);
  const careerInfo: JobDesc[] = [
    {
      company: "오픈포맷 [인센토]",
      position: "소프트웨어 엔지니어",
      startDate: "2024.05",
      endDate: "현재",
      taskDesc: [
        {
          headTask: "프로젝트 리더십 & 기획",
          subTask: [
            "10 명의 다국적 팀원과 함께 Cafe24 리퍼럴 마케팅 플러그인 Incento 의 프론트엔드 & UI/UX 리뉴얼 주도",
            "Incent 관리자 사이트의 서비스 기획 및 전면 개편 프로젝트 진행하여 사용성과 운영 효율성 개선",
            "사용자 니즈 기반의 비즈니스 로직 설계 및 서비스 아키텍처 개선",
          ],
        },
        {
          headTask: "프론트엔드 개발 & UI/UX 개선",
          subTask: [
            "디바이스 최적화된 반응형 웹 디자인 구축, 일관된 사용자 경험 제공",
            "직관적인 대시보드 및 간소화된 워크플로우 설계를 통해 데이터 시각화와 정보 명확성 개선",
            "TypeScript, Next.js, React 를 활용한 재사용 가능한 컴포넌트 구조 개발, 유지보수 용이 및 개발 속도 향상",
            "Tailwind CSS 를 사용한 스타일링 최적화 및 일관된 디자인 시스템 적용",
          ],
        },
        {
          headTask: "데이터 관리 & 배포 인프라 구축",
          subTask: [
            "Chart.js, nivo 를 활용한 대시보드 데이터 시각화 구현",
            "PostgreSQL 을 활용한 데이터 관리 및 AWS S3/CloudFront 기반의 안전한 파일 관리",
            "Vercel 을 이용한 배포로 안정적이고 확장 가능한 서비스 인프라 구축",
          ],
        },
      ],
    },
    {
      company: "다이얼로그 스페이스",
      position: "소프트웨어 엔지니어",
      startDate: "2021.08",
      endDate: "2024.04",
      taskDesc: [
        {
          headTask: "서비스 개발 & 아키텍처 구축",
          subTask: [
            "Spring MVC 및 Tomcat 기반의 웹 서버를 이용해 가상자산 관리 서비스 '크립토택스' 개발",
            "MySQL, MongoDB 및 MyBatis를 활용한 안정적인 데이터 관리 및 처리",
            "국내외 주요 가상화폐 거래소 API 연동 및 백엔드 컨트롤러 로직 구현",
          ],
        },
        {
          headTask: "프론트엔드 개발 & UI 구현",
          subTask: [
            "HTML, CSS, JavaScript, jQuery를 활용한 사용자 친화적 뷰 페이지 개발",
            "i18n을 활용한 다국어 웹사이트 구축 및 한글 사이트 영문 번역",
          ],
        },
        {
          headTask: "데이터 관리 & 클라우드 인프라",
          subTask: ["AWS S3/CloudFront를 통한 안전하고 효율적인 파일 저장 및 배포 시스템 운영"],
        },
      ],
    },
    {
      company: "스파크펫 [Knollo]",
      position: "UX 디자이너 & 프론트엔드 개발",
      startDate: "2020.11",
      endDate: "2021.08",
      taskDesc: [
        {
          headTask: "UX/UI 디자인 & 기획",
          subTask: [
            "Figma를 활용한 모바일 UX/UI 흐름 설계",
            "반려동물 병원, 호텔, 스토어, 수영장 등 오프라인 서비스의 UX 디자인 맵 및 와이어프레임 개발",
          ],
        },
        {
          headTask: "웹사이트 개발 & 구현",
          subTask: [
            "HTML5, CSS, Spring MVC 기반의 웹사이트 및 예약 시스템 구현",
            "반응형 UI 설계를 통해 다양한 디바이스에서 최적화된 사용자 경험 제공",
          ],
        },
        {
          headTask: "데이터 연동 & 시스템 구축",
          subTask: ["멤버십 데이터를 다양한 서비스와 연동하기 위한 시스템 및 데이터 맵핑 구조 설계 및 구현"],
        },
      ],
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setShowName(true), 2000);
        } else {
          setShowName(false);
        }
      },
      {
        threshold: 0.4,
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-full flex flex-col justify-center items-center w-full">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
        <div
          ref={ref}
          className="flex flex-col h-[calc(100vh-160px)] gap-[20px] items-start justify-start w-full px-[20px]"
        >
          <div className="w-full min-w-[350px] h-fit flex flex-col items-start justify-start gap-[10px]">
            <div className="text-[25px] w-full h-fit font-semibold flex flex-col justify-end">
              <motion.div
                key="subject"
                initial={{ opacity: 0, y: 10 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[35px] w-full font-semibold"
              >
                <span>Career</span>
              </motion.div>
            </div>
            <div className="flex gap-[16px] justify-start items-start w-full overflow-x-auto py-[8px]">
              {careerInfo.map((career: JobDesc, index: number) => (
                <motion.div
                  key={`career-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 * index }}
                  className="flex-1 min-w-[300px] max-w-full"
                >
                  <div className="p-[8px] w-full h-full border rounded-lg">
                    <div className="w-full flex flex-col gap-[4px]">
                      <div className="subject w-fit flex gap-[5px] bg-gray-100 rounded-md p-[4px]">
                        <span className="font-semibold">{career.company}</span>
                        <span className="font-semibold">|</span>
                        <span className="font-normal">{career.position}</span>
                      </div>
                      <div className="subject w-fit flex gap-[10px] text-[14px] bg-gray-100 rounded-md p-[4px]">
                        <span>{career.startDate}</span>
                        <span> - </span>
                        <span>{career.endDate}</span>
                      </div>
                    </div>
                    <div className="h-full overflow-y-auto flex flex-col max-h-[45vh] gap-[4px] py-[4px]">
                      <div className="subject text-[12px] w-fit h-fit bg-gray-100 rounded-md p-[4px] font-semibold">
                        Job Description
                      </div>
                      <div>
                        <ul className="text-[14px] flex flex-col h-[350px]">
                          {career.taskDesc.map((task: TaskDesc, tIndex: number) => (
                            <li key={`task-${index}-${tIndex}`}>
                              <strong className="block">{task.headTask}</strong>
                              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                {task.subTask.map((sub, sIndex) => (
                                  <li key={`sub-${index}-${tIndex}-${sIndex}`}>{sub}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
