import icon2 from "../../../public/3.svg";
import icon3 from "../../../public/4.svg";
import icon4 from "../../../public/fire.svg";
import icon5 from "../../../public/5.svg";
import icon6 from "../../../public/6.svg";
import icon from "../../../public/tick.svg";
import Image from "next/image";
import job from "../../../_data/jobs.json";

interface Type {
  description: string;
  responsibilities: string[];
  age: string;
  gender: string;
  traits: string[];
  when_where: string;
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

const Page = ({ params }: { params: any }) => {
  const idx = params.id;
  const aJob = job[idx];
  const colors = ["orange", "green", "purple"];
  const backgrounds = [
    "rgb(219, 219, 176)",
    "rgb(113, 190, 113)",
    "rgb(180, 143, 180)",
  ];

  const formatTrait = (trait: string) => {
    const [key, value] = trait.split(":");
    return { key: key ? key + ":" : "", value: value || "" };
  };

  return (
    <div className="flex space-x-28">
      <div className="w-8/12 bg-white ml-7 mt-20 mb-4">
        <section className="title2 space-y-3">
          <h1 className="font-extrabold text-xl title-1">Description</h1>
          <p className="s">{aJob.description}</p>
        </section>

        <section className="space-y-3 mt-10">
          <h1 className="font-extrabold text-xl title-1">Responsibilities</h1>
          <ul className="title2 space-y-3">
            {aJob.responsibilities.map((item, index) => (
              <li className="flex text-base" key={index}>
                <Image className="mr-3" src={icon} alt="Tick Icon" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3 mt-10">
          <h1 className="font-extrabold text-xl title-1">Ideal Candidate</h1>
          <ul className="list-disc text-base ml-5">
            <li className="title2 font-bold">
              <div className="space-x-2 flex">
                <span>Age ({aJob.ideal_candidate.age})</span>
                <span>Gender ({aJob.ideal_candidate.gender})</span>
              </div>
            </li>
            {aJob.ideal_candidate.traits.map((trait, index) => {
              const { key, value } = formatTrait(trait);
              return (
                <li key={index} className="title2">
                  <span className="font-bold">{key}</span>
                  <span className="font-light">{value}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="space-y-4 mt-10">
          <h1 className="font-extrabold text-xl title-1">When & Where</h1>
          <div className="flex space-x-4 items-center">
            <Image src={icon3} alt="Location Icon" />
            <p>{aJob.when_where}</p>
          </div>
        </section>
      </div>

      <div className="w-3/12 mt-8 mb-4">
        <section className="space-y-6">
          <h1 className="title-1">About</h1>
          {[
            ["Posted On", icon2, aJob.about.posted_on],
            ["Deadline", icon4, aJob.about.deadline],
            ["Location", icon3, aJob.about.location],
            ["Start Date", icon5, aJob.about.start_date],
            ["End Date", icon6, aJob.about.end_date],
          ].map(([label, icon, value], index) => (
            <div key={index} className="flex space-x-3">
              <Image className="w-10 h-10" src={icon} alt={`${label} Icon`} />
              <div>
                <h5 className="body-text">{label}</h5>
                <h1 className="text-sm font-semibold">{value}</h1>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-5 mr-6 border-t-2 border-b-2 space-y-5 py-4">
          <h1 className="title-1">Categories</h1>
          <ul className="flex space-x-2">
            {aJob.about.categories.map((category, index) => (
              <li
                key={index}
                style={{
                  color: colors[index % colors.length],
                  backgroundColor: backgrounds[index % backgrounds.length],
                }}
                className="px-3 py-1 rounded-full"
              >
                {category}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 mr-6 py-4 border-t-2 border-b-2 space-y-3">
          <h1 className="title-1">Required Skills</h1>
          <ul className="flex flex-wrap space-y-1 items-center gap-2">
            {aJob.about.required_skills.map((skill, index) => (
              <li
                key={index}
                className="self-center p-1 text-blue-600 bg-purple-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;
