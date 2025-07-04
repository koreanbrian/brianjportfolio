import { JobDesc, ProjectDesc } from "./type";

export const projectInfo: ProjectDesc[] = [
  {
    company: "개인 프로젝트(1인)",
    projectName: "포트폴리오 웹사이트 제작",
    startDate: "2025.04",
    endDate: "진행 중",
    skillStacks: ["Next.js with TypeScript", "React", "Tailwind CSS", "Framer Motion", "HTML/CSS", "AWS S3"],
    devEnvrionment: [
      "Next.js 기반 CSR 중심의 정적 포트폴리오 사이트 구현",
      "Tailwind CSS를 활용한 유틸리티 클래스 기반 반응형 UI 설계",
      "Framer Motion을 이용한 스크롤 연동 애니메이션 구성",
      "AWS S3에 커스텀 웹 폰트 업로드 및 `@font-face`로 적용",
      "전체 뷰포트 기반의 수직/수평 scroll-snap 레이아웃 구성",
    ],
    taskDesc: [
      {
        headTask: "포트폴리오 섹션 구성 및 UI 설계",
        mainPoint: "직관적인 섹션 구성을 통한 사용자 경험 강화",
        subTask: [
          "'Intro', 'About', 'Skills', 'Projects', 'Career' 등 전체 화면 단위 섹션 구성",
          "scroll-snap 기능을 활용해 섹션 간 부드러운 전환 구현",
          "모바일, 태블릿, 데스크톱 디바이스 모두에서 반응형 레이아웃 유지",
          "컴포넌트 단위로 모듈화하여 유지보수 및 확장 용이성 확보",
        ],
      },
      {
        headTask: "인터랙션 및 애니메이션 효과",
        mainPoint: "Framer Motion 기반의 부드러운 등장 애니메이션 구현",
        subTask: [
          "섹션별로 Fade-In 및 요소별 딜레이를 조정한 등장 효과 구현",
          "스크롤 위치에 따라 Header의 배경색 전환 (투명 ↔︎ bg-gray-100)",
          "Framer Motion `useAnimation`, `useInView` 등을 활용한 트리거 제어",
        ],
      },
      {
        headTask: "가로 슬라이드 섹션 구현 (Career)",
        mainPoint: "화면 너비 단위의 슬라이드 구현을 통한 타임라인 표현",
        subTask: [
          "`scroll-snap-type: x mandatory`를 활용한 수평 스크롤 방식 설계",
          "각 슬라이드를 `100vw`로 설정해 풀스크린 뷰 연출",
          "Framer Motion을 통해 부드러운 이동 및 이름 강조 애니메이션 적용",
        ],
      },
    ],
  },
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
      "PostgreSQL 기반으로 한 데이터 관리 구조 최적화",
      "AWS S3 및 CloudFront를 활용한 안정적인 클라우드 기반 파일 저장 및 배포 환경 구현",
      "Vercel을 이용한 프론트엔드 애플리케이션 배포",
      "Tailwind CSS를 활용한 빠르고 일관된 스타일링 및 일관된 UI 적용",
      "Chart.js와 nivo를 활용한 주요 지표를 시각화 대시보드 개발",
    ],
    taskDesc: [
      {
        headTask: "캠페인 및 리퍼럴 아이템 생성",
        mainPoint: "캠페인 및 리퍼럴 구성 자동화",
        subTask: [
          "사용자 리퍼럴 캠페인을 설정을 위한, 다양한 옵션을 구조화 UI 개발 (지급 대상, 리워드 트리거, 지급 기한, 지급 방식, 최대 지급 횟수 등)",
          "추천인, 피추천인을 기준으로 하여 각각의 리워드 항목을 분리하여 구성할 수 있는 구조를 설계",
          "입력된 설정 값을 JSON 형태로 반환하여 API 연동 처리",
          "다양한 지급 조건에 따른 유연한 리워드 설계 지원",
        ],
      },
      {
        headTask: "대시보드 및 리포트",
        mainPoint: "리포트 및 대시보드 시각화",
        subTask: [
          "Chart.js 및 nivo를 활용해 리퍼럴 고객 여정, 시간대별 유입 트렌드, 추천인 순위 등 지표를 시각적으로 표현",
          "사용자 여정 및 주요 KPI를 한눈에 파악할 수 있는 대시보드 제공",
          "테이블/차트를 CSV로 다운로드할 수 있는 기능 추가",
          "컴포넌트 구조를 재사용 가능하도록 설계하여 리포트/대시보드 간 유지보수 효율 극대화",
        ],
      },
      {
        headTask: "캠페인 리워드 지급 내역",
        mainPoint: "캠페인 리퍼럴 지급 관리",
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
    projectName: "인센토 리워드 마케팅 관리 사이트 리뉴얼",
    startDate: "2024.11",
    endDate: "2025.01",
    skillStacks: ["MySQL", "Spring MVC", "Java", "JavaScript", "MyBatis", "Tomcat", "i18n"],
    devEnvrionment: [
      "PostgreSQL 기반 데이터 저장 및 관리 구조 최적화",
      "AWS S3 및 CloudFront를 활용한 정적 파일의 효율적인 저장 및 배포 구조 구축",
      "Tailwind CSS를 활용한 신속한 스타일링 및 일관된 UI 적용",
      "기존에 대량으로 사용중인 MUI 라이브러리 제거 후 커스텀 컴포넌트 생성",
      "Chart.js와 nivo 를 활용하여 리워드 운영 데이터 및 사용자 활동 데이터를 직관적으로 시각화한 대시보드 구현",
      "Vercel을 사용한 프론트엔드 배포",
    ],
    taskDesc: [
      {
        headTask: "위젯 생성 프로세스 리뉴얼",
        mainPoint: "위젯 생성 프로세스 개선",
        subTask: [
          "S기존 위젯 생성 페이지의 복잡성으로 인한 CS가 지속적으로 발생하던 문제를 해결",
          "위젯 설명, 디자인, 옵션을 캠페인 설정과 분리하여 위젯 페이지 내에서 바로 입력/수정 할 수 있도록 개선",
          "관리자 인터페이스의 직관성을 높여 리소스 소모 감소 및 운영 효율화",
          "재사용 가능한 컴포넌트를 통해 대시보드 및 리포트 영역과 연계되는 UI 일관성 확보",
        ],
      },
      {
        headTask: "숍 선택 페이지 리뉴얼",
        mainPoint: "숍 선택 인터페이스 개선",
        subTask: [
          "로그인 이후 사용자가 원하는 숍을 빠르게 선택할 수 있도록 숍 선택 페이지를 구조적으로 재설계",
          "기존에 표시되지 않던 JSON 속성 중 유의미한 항목들을 시각화하여 관리자 정보 활용도 향상",
          "숍 리스트에 숍 이름 검색창과 필터 탭 기능을 도입하고, 계정 활성화 여부 기준으로 리스트 필터링 가능",
          "숍 ID 및 Cafe24 ID 복사 버튼 추가로 관리 효율성 제고",
        ],
      },
      {
        headTask: "개인 활동 내역 페이지 리뉴얼",
        mainPoint: "개인 활동/리워드 내역 개선",
        subTask: [
          "캠페인별 참여 내역과 고객 정보를 분리된 인터페이스로 제공해 정보 탐색 편의성 향상",
          "유저 ID 검색 기능 및 검색 결과 리스트 구조 개선",
          "추천인/피추천인 리워드 내역을 표로 시각화하고, 각 내역에 대한 상세 정보도 함께 표시",
          "기존 MUI 테이블 제거, 커스텀 HTML 테이블로 재작성, 무한 스크롤 기능 도입",
          "테이블 내 캠페인 항목 클릭 시, 공유내역을 바로 확인 할 수 있도록 UI 연계",
        ],
      },
    ],
  },
  {
    company: "다이얼로그 스페이스",
    projectName: "B2B 가상자산 세금 계산 플랫폼",
    startDate: "2022.06",
    endDate: "2024.04",
    skillStacks: ["MySQL", "Spring MVC", "Java", "JavaScript", "MyBatis", "Tomcat", "i18n"],
    devEnvrionment: [
      "MySQL, MongoDB를 병행하여, 대량의 정형/비정형 데이터를 안정적으로 관리",
      "AWS S3, CloudFront, Lambda를 활용하여 안전하고 효율적인 파일",
      "업로드/다운로드 시스템 구축",
      "Java Spring MVC 프레임워크 기반의 백엔드 구조 설계",
      "i18n 기능을 도입하여 한국어/영어 다국어 번역 및 웹사이트 구현",
      "B2B 고객을 위한 크립토택스 앤터프라이즈 웹사이트 개발 및 운영",
      "Apache Tomcat을 이용하여 배포 서버 구축",
    ],

    taskDesc: [
      {
        headTask: "UX/UI 디자인 & 기획",
        mainPoint: "거래소 통합 대시보드 구현",
        subTask: [
          "국내 5대 가상화폐 거래소의 거래 데이터를 수집/통합 관리",
          "매일 자정 데이터의 대시보드 시각화를 통한 고객 편의성 향상",
          "Ajax를 활용한 비동기 처리로 각 거래소의 로딩 성능 최적화",
          "Google Chart 라이브러리를 사용, 신규/기존 등록 데이터 현황을 그래프로 시각화",
          "가상화폐 별 자산 표시 및 거래유형 별 거래 금액과 비율 등을 직관적으로 표시",
        ],
      },
      {
        headTask: "문서/증명서 페이지",
        mainPoint: "세무 문서 자동화 페이지 개발",
        subTask: [
          "세금 신고를 위한 각종 재무 관련 문서를 시스템 상에서 자동 생성 및 표시 (재무상태표, 손익계산서, 실현손익 명세, 거래증명서, 잔고 증명서, 명세부)",
          "문서 유형별 레이아웃 및 항목 구조의 별도 설계를 통한 사용자 편의성 향상",
          "일관된 UI의 명료한 구성을 통한 가독성 향상",
          "PDF 및 Excel 포맷으로 다운로드 기능 제공을 통한 사용자의 세무 업무 편의성 강화",
        ],
      },
      {
        headTask: "가상자산 연결 페이지",
        mainPoint: "세무 문서 자동화 페이지 개발",
        subTask: [
          "국내외 주요 가상자산 거래소 및 지갑과의 API 동기화",
          "파일 업로드 방식을 통한 거래내역 정보 동기화 기능 제공",
          "각 거래소 입력 조건과 포맷을 적용한 맞춤 입력 폼 설계",
          "B2B 특성에 맞춘 마스터/서브 계정 구조를 반영",
          "유연한 정보 입력 구조 제공을 통한 사용자 편의성 향상",
          "거래내역 파일 등록 시 jQuery를 활용해, drag&drop UI를 도입해 UX 최적화",
        ],
      },
    ],
  },
];

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
          "HTML5/CSS3, JavaScript, jQuery를 활용한 사용자 친화적 뷰 페이지 개발",
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
          "반응형 UI 설계를 통해 여러 종류의 디바이스에서 최적화된 사용자 경험 제공",
        ],
      },
      {
        headTask: "데이터 연동 & 시스템 구축",
        subTask: ["멤버십 데이터를 다수의 서비스와 연동하기 위한 시스템 및 데이터 맵핑 구조 설계 및 구현"],
      },
    ],
  },
];
