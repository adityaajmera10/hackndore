import { turret } from "@/components/HomePage";
import TeamCard from "./TeamCard";
import vssv from '../../public/vssv.svg';
type Person = {
  id: number;
  img: string;
  name: string;
  post: string;
};



const TeamSection = () => {
    
 const team: Array<Person> = [
    {
      id: 1,
      img: vssv,
      name: "Shivam Sharma",
      post: "President",
    },
    {
      id: 2,
      img: vssv,
      name: "Tanay Nagde",
      post: "Vice President",
    },
    {
      id: 3,
      img: vssv,
      name: "Sanskar Choubey",
      post: "Secretary",
    },
    {
      id: 4,
      img: vssv,
      name: "Aditya Tiwari",
      post: "Tresurer",
    },
  ];
  return (
    <section className="w-11/12 mx-auto flex flex-col items-center gap-y-4 ">
      <h1
        className={`text-3xl text-center lg:text-start lg:text-4xl font-bold ${turret.className}`}
      >
        Organizing Team
      </h1>
      <div className="flex justify-center gap-5 md:gap-x-16 md:gap-y-8 flex-wrap ">
        {team?.map((person) => (
          <TeamCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;