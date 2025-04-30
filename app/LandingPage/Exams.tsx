const examTypes = [
  {
    name: "WAEC",
    description:
      "English Language, General Mathematics, Further Mathematics, Physics, Chemistry, Biology",
    bgColor: "bg-[#FCF5FF]",
    textColor: "text-black",
    borderColor: "border-[#640789]",
    icon: "/icons/Pinkicon.png",
  },
  {
    name: "NECO",
    description:
      "Mathematics, English Language, Verbal Reasoning, Non-verbal Reasoning",
    bgColor: "bg-[#FCF5FF]",
    textColor: "text-black",
    borderColor: "border-[#640789]",
    icon: "/icons/Pinkicon.png",
  },
  {
    name: "JAMB",
    description:
      "English Language, General Mathematics, Further Mathematics, Physics, Chemistry, Biology",
    bgColor: "bg-[#FEF2F2]",
    textColor: "text-black",
    borderColor: "border-[#F7383C]",
    icon: "/icons/Brown.png",
  },
  {
    name: "IGCSE",
    description:
      "Mathematics, English Language, Verbal Reasoning, Non-verbal Reasoning ",
    bgColor: "bg-[#FEF2F2]",
    textColor: "text-black",
    borderColor: "border-[#F7383C]",
    icon: "/icons/Brown.png",
  },
  {
    name: "GCSE",
    description:
      "English Language, General Mathematics, Further Mathematics, Physics, Chemistry, Biology",
    bgColor: "bg-[#EEF2FE]",
    textColor: "text-black",
    borderColor: "border-[#91AAFD]",
    icon: "/icons/Blue.png",
  },
  {
    name: "Common Entrance",
    description:
      "Mathematics, English Language, Verbal Reasoning, Non-verbal Reasoning, Quantitative reasoning",
    bgColor: "bg-[#EEF2FE]",
    textColor: "text-black",
    borderColor: "border-[#91AAFD]",
    icon: "/icons/Blue.png",
  },
  {
    name: "JUNIOR WAEC/BECE",
    description: "Mathematics and English Language",
    bgColor: "bg-[#F6FFF8]",
    textColor: "text-black",
    borderColor: "border-[#34A853]",
    icon: "/icons/Green.png",
  },
];

const Exams = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container-custom">
        <h2 className="mb-4 font-montserrat font-bold text-[48px] leading-[60px] tracking-[0] text-center">
          Master Exams with Confidence
        </h2>
        <p className="text-[#484848]  mb-16 font-montserrat font-normal text-[16px] leading-[24px] tracking-[0%] align-middle text-center">
          Unlock expertly curated past questions, smart solutions & real-time
          progress insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examTypes.map((exam, index) => {
            const isLast = index === examTypes.length - 1;

            return (
              <div
                key={index}
                className={`p-6 rounded-lg ${exam.bgColor} ${
                  exam.borderColor
                } border ${isLast ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={exam.icon}
                    alt={`${exam.name} icon`}
                    className="w-[60px] h-[40px] object-contain"
                  />
                  <div>
                    <h3
                      className={`font-montserrat font-bold text-[16px] leading-[1.4] tracking-[0] mb-2 ${exam.textColor}`}
                    >
                      {exam.name}
                    </h3>
                    <p className="text-gray-700 font-montserrat font-normal text-[14px] leading-[20px] tracking-[0] align-middle">
                      {exam.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exams;
