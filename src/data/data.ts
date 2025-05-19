import { JobDesc, ProjectDesc } from "./type";

export const careerInfo: JobDesc[] = [
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

export const projectInfo: ProjectDesc[] = [
  {
    company: "오픈포맷 [인센토]",
    projectName: "S사 리워드 제공 관리 사이트",
    startDate: "2024.08",
    endDate: "2025.05",
    skillStacks: [
      "Next.js with TypeScript",
      "React",
      "PostgreSQL",
      "Tailwind CSS",
      "Chart.js",
      "nivo",
      "AWS S3",
      "CloudFront",
    ],
    devEnvrionment: [
      "PostgreSQL 기반으로 한  데이터 관리 구조 최적화",
      "AWS S3 및 CloudFront를 활용한 안정적인 클라우드 기반 파일 저장 및 배포 환경 구현",
      "Vercel을 이용한 프론트엔드 애플리케이션 배포",
      "Tailwind CSS를 활용한 빠르고 일관된 스타일링 및 일관된 UI 적용",
      "Chart.js와 nivo를 활용한 주요 지표를 시각화 대시보드 개발",
    ],
    taskDesc: [
      {
        headTask: "캠페인 및 리퍼럴 아이템 생성",
        mainPoint: "주요 기능: 캠페인 및 리퍼럴 구성 자동화 ",
        subTask: [
          "사용자가 리퍼럴 캠페인을 설정 할 수 있도록, 다양한 옵션(지급 대상, 리워드 트리거, 지급 기한, 지급 방식, 최대 지급 횟수 등)을 구조화하여  UI 설계",
          "추천인, 피추천인을 기준으로 하여 각각의 리워드 항목을 분리하여 구성할 수 있는 구조를 설계",
          "입력된 설정 값을 JSON 형태로 반환하여 API 연동 처리",
          "다양한 지급 조건에 따른 유연한 리워드 설계 지원",
        ],
      },
      {
        headTask: "대시보드 및 리포트",
        mainPoint: "리포트 및 대시보드 시각화",
        subTask: [
          "Chart.js 및 nivo를 활용해 리퍼럴 고객 여정, 시간대별 유입 트렌드, 추천인 순위 등 다양한 지표를 시각적으로 표현",
          "사용자 여정 및 주요 KPI를 한눈에 파악할 수 있는 대시보드 제공",
          "테이블/차트를 CSV로 다운로드할 수 있는 기능 추가",
          "컴포넌트 구조를 재사용 가능하도록 설계하여 리포트/대시보드 간 유지보수 효율 극대화",
        ],
      },
      {
        headTask: "캠페인 리워드 지급 내역",
        mainPoint: "캠페인 리퍼럴 지급 관리 ",
        subTask: [
          "관리자 페이지 내 캠페인 선택 후, 해당 캠페인의 지급내역을 확인할 수 있도록 구현",
          "추천인 및 피추천인 ID 기반 검색 기능 제공",
          "지급 상태(미지급/지급/회수)에 따라 수동 지급 및 회수 처리 가능",
          "지급 시점, 리워드 항목, 대상자 정보 등의 항목을 표 형태로 시각화하여 가독성 향상",
        ],
      },
    ],
  },
  {
    company: "오픈포맷 [인센토]",
    projectName: "소프트웨어 엔지니어",
    startDate: "2021.08",
    endDate: "2024.04",
    skillStacks: [],
    devEnvrionment: [],
    taskDesc: [
      {
        headTask: "서비스 개발 & 아키텍처 구축",
        mainPoint: "",
        subTask: [
          "Spring MVC 및 Tomcat 기반의 웹 서버를 이용해 가상자산 관리 서비스 '크립토택스' 개발",
          "MySQL, MongoDB 및 MyBatis를 활용한 안정적인 데이터 관리 및 처리",
          "국내외 주요 가상화폐 거래소 API 연동 및 백엔드 컨트롤러 로직 구현",
        ],
      },
      {
        headTask: "프론트엔드 개발 & UI 구현",
        mainPoint: "",

        subTask: [
          "HTML, CSS, JavaScript, jQuery를 활용한 사용자 친화적 뷰 페이지 개발",
          "i18n을 활용한 다국어 웹사이트 구축 및 한글 사이트 영문 번역",
        ],
      },
      {
        headTask: "데이터 관리 & 클라우드 인프라",
        mainPoint: "",
        subTask: ["AWS S3/CloudFront를 통한 안전하고 효율적인 파일 저장 및 배포 시스템 운영"],
      },
    ],
  },
  {
    company: "스파크펫 [Knollo]",
    projectName: "UX 디자이너 & 프론트엔드 개발",
    startDate: "2020.11",
    endDate: "2021.08",
    skillStacks: [],
    devEnvrionment: [],

    taskDesc: [
      {
        headTask: "UX/UI 디자인 & 기획",
        mainPoint: "",

        subTask: [
          "Figma를 활용한 모바일 UX/UI 흐름 설계",
          "반려동물 병원, 호텔, 스토어, 수영장 등 오프라인 서비스의 UX 디자인 맵 및 와이어프레임 개발",
        ],
      },
      {
        headTask: "웹사이트 개발 & 구현",
        mainPoint: "",
        subTask: [
          "HTML5, CSS, Spring MVC 기반의 웹사이트 및 예약 시스템 구현",
          "반응형 UI 설계를 통해 다양한 디바이스에서 최적화된 사용자 경험 제공",
        ],
      },
      {
        headTask: "데이터 연동 & 시스템 구축",
        mainPoint: "",

        subTask: ["멤버십 데이터를 다양한 서비스와 연동하기 위한 시스템 및 데이터 맵핑 구조 설계 및 구현"],
      },
    ],
  },
];
