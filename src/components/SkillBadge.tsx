import logoIndex from "../assets/icons/logoIndex";

type SkillBadgeProps = {
  skills: string[];
};

const SkillBadge = ({ skills }: SkillBadgeProps) => {
  return (
    <>
      {skills.map((skill: string, index: number) => {
        const key = skill.toLowerCase().trim();

        return (
          <div
            key={index}
            className="flex gap-2 border-textColor py-2 px-3 
                       bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 
                       mb-1 border rounded-2xl items-center"
          >
            <img
              className="w-[48px] bs-mx:w-[36px] xms-mx:w-[28px] !p-1"
              src={logoIndex[key] ?? logoIndex.java}
              alt={skill}
            />
            <div className="text-textColor text-xl">{skill}</div>
          </div>
        );
      })}
    </>
  );
};

export default SkillBadge;
