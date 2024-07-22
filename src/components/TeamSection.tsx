import { turret } from "@/components/HomePage";
import TeamCard from "./TeamCard";
import { team } from "../../public/team";
type Person = {
  id: number;
  img: string;
  name: string;
};

type TeamGroup = {
  post: string;
  members: Person[];
};

type TeamSectionProps = {
  team: TeamGroup[];
};

const TeamSection = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col items-center gap-y-4">
      {team?.map((group) => (
        <div key={group.post} className="w-full">
          <h1 className={`text-3xl lg:text-start lg:text-5xl font-bold ${turret.className} text-primary-heading flex justify-center py-8 items-center`}>{group.post}</h1>
          <div className="flex justify-center gap-5 md:gap-x-16 md:gap-y-8 flex-wrap">
            {group.members?.map((person) => (
              <TeamCard key={person.id} person={{ ...person, post: group.post }} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamSection;