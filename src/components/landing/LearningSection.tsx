import Image from "next/image";

const LearningSection = () => {
  return (
    <section className="w-full bg-[#640789] py-16 md:py-20 text-white relative overflow-hidden">
      {/* Background logo pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8">
          {Array.from({ length: 48 }).map((_, index) => (
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center opacity-80"
            >
              <Image src="/icons/icon.png" width={50} height={20} alt="" className="w-16 h-8 max-md:w-32 max-md:h-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 max-md:w-[70%]">
        <div className="relative">

        <h2 className="font-montserrat font-bold max-md:text-3xl max-md:font-bold text-[48px] leading-[60px] tracking-[0%] text-center">
          Learning becomes fun-filled with PeakClass -
        </h2>
          <p className="font-montserrat font-bold  max-md:text-3xl max-md:font-bold  text-[48px] leading-[60px] tracking-[0%] text-center">
            Demystifying learning
          </p>
          <div className="flex justify-center items-center mt-4">
            <img src="/images/Feature/Vector.png" alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
