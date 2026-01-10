import SkillBadge from "./SkillBadge";

type SkillCardProps = {
  title: string;
  skills: string[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
      className="w-[48%] bs-mx:w-[80%] md-mx:w-full 
                 shadow-[0_0_10px_0_#64FFDA50] 
                 rounded-2xl border border-primaryColor 
                 p-5 bs-mx:p-3"
    >
      <div className="text-3xl mb-4 text-white text-center font-bold sm-mx:text-2xl xms-mx:text-xl">
        {title}
      </div>

      <div className="flex flex-wrap gap-3 bs-mx:gap-2 justify-center">
        <SkillBadge skills={skills} />
      </div>
    </div>
  );
};

export default SkillCard;
