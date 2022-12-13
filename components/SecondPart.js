import RowSpan from "./rowSpan";

export default function SecondPart() {
  const a = [
    {
      rowClass: "row1",
      deparment: "Юридический",
      src: "/school.png",
      link: "https://www.uniyar.ac.ru/faculties/juridical/"
    },
    {
      rowClass: "row2",
      deparment: "Психологии",
      src: "/color-palette.png",
      link: "https://www.uniyar.ac.ru/faculties/psychological/"
    },
    {
      rowClass: "row3",
      deparment: "Физический",
      src: "/atom.png",
      link: "http://fiz.uniyar.ac.ru/"
    },
    {
      rowClass: "row4",
      deparment: "Информатики и вычислительной техники",
      src: "/online-study.png",
      link: "http://ivt.uniyar.ac.ru/"
    },
    {
      rowClass: "row5",
      deparment: "Экономический",
      src: "/blood-report.png",
      link: "https://www.uniyar.ac.ru/faculties/economic/"
    },
    {
      rowClass: "row6",
      deparment: "Математический",
      src: "/abacus.png",
      link: "https://math.uniyar.ac.ru/"
    },
    {
      rowClass: "row7",
      deparment: "Филологии и коммуникации",
      src: "/stationary-jar.png",
      link: "https://www.uniyar.ac.ru/faculties/filandcomm/"
    },
    {
      rowClass: "row8",
      deparment: "Биологии и экологии",
      src: "/microscope.png",
      link: "https://www.uniyar.ac.ru/faculties/biological/"
    },
    {
      rowClass: "row9",
      deparment: "Исторический",
      src: "/books.png",
      link: "http://hist.uniyar.ac.ru/"
    },
    {
      rowClass: "row10",
      deparment: "Социально-политических наук",
      src: "/graduation-hat.png",
      link: "https://www.uniyar.ac.ru/faculties/sociopolitical/"
    },
    {
      rowClass: "row11",
      deparment: "Институт иностранных языков",
      src: "/education-blocks.png",
      link: "https://www.uniyar.ac.ru/faculties/institut/"
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start">
      <div  className="ml-10 mt-10 flex flex-col mr-auto ">
        <span className="text-xl md:text-6xl text-[#0E0544] font-[700]">
          Наши факультеты
        </span>
        <span className="text-[10px] md:text-2xl my-3 text-[#0E0544] font-[400]">
          Направления, которые приведут тебя к успеху.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full">
        {a.map((index, item) => {
          console.log();
          return (
            <RowSpan
              key={index}
              link={a[item].link}
              rowClass={a[item].rowClass}
              deparment={a[item].deparment}
              src={a[item].src}
            />
          );
        })}
      </div>
    </div>
  );
}
