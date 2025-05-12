import { table } from "console";

export default function Skills() {
  const tableHead: string[] = [
    "언어",
    "프로그래밍 언어",
    "프레임워크 / 라이브러리",
    "Infrastructure & DB",
    "Tools & IDEs",
  ];

  const tableContents: { [key: string]: string[] } = {
    언어: ["영어[상 / 미국유학]", "일본어[JLPT N2]"],
    "프로그래밍 언어": ["TypeScript", "JavaScript", "Java", "HTML / CSS", "PHP", "Python"],
    "프레임워크 / 라이브러리": ["React.js", "Next.js with TypeScript", "Spring Framework (MVC)", "CodeIgniter 4"],
    "Infrastructure & DB": ["MySQL", "PostGreSQL", "MongoDB", "Redis", "MyBatis", "Docker", "Apache Tomcat"],
    "Tools & IDEs": ["Adobe Photoshop", "PyCharm", "IntelliJ IDEA", "Eclipse", "VSCode"],
  };
  return (
    <div className="relative h-full flex flex-col justify-center items-center">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px]">
        <div className="mt-[230px] px-[20px] gap-[20px]">
          <div className="text-[35px] w-full font-semibold">
            <span>Skills</span>
          </div>
          <div className="text-[20px] flex flex-col w-full text-gray-700 gap-[20px]">
            <table>
              <tbody>
                {tableHead.map((head, index) => (
                  <tr key={index}>
                    <td>
                      <span className="font-semibold">{head}</span>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex flex-wrap gap-[8px]">
                        {(tableContents[head] || []).map((item, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-200 rounded-md text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
