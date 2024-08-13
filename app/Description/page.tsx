import icon2 from "../../public/3.svg";
import icon3 from "../../public/4.svg";
import icon4 from "../../public/fire.svg";
import icon5 from "../../public/5.svg";
import icon6 from "../../public/6.svg";
import icon from "../../public/tick.svg";
import Image from "next/image";

interface Type {
  description: string;
  res: string[];
  age: string;
  gender: string;
  traits: string[];
  whenandwhere: string;
  postedon: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required: string[];
}

const Page = ({ searchParams }: { searchParams: Type }) => {
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
        <section className="clr1 space-y-3">
          <h1 className="font-extrabold text-xl size6">Description</h1>
          <p className="s">{searchParams.description}</p>
        </section>

        <section className="space-y-3 mt-10">
          <h1 className="font-extrabold text-xl size6">Responsibilities</h1>
          <ul className="clr1 space-y-3">
            {searchParams.res.map((item, index) => (
              <li className="flex text-base" key={index}>
                <Image className="mr-3" src={icon} alt="Tick Icon" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3 mt-10">
          <h1 className="font-extrabold text-xl size6">Ideal Candidate</h1>
          <ul className="list-disc text-base ml-5">
            <li className="clr1 font-bold">
              <div className="space-x-2 flex">
                <span>Age ({searchParams.age})</span>
                <span>Gender ({searchParams.gender})</span>
              </div>
            </li>
            {searchParams.traits.map((trait, index) => {
              const { key, value } = formatTrait(trait);
              return (
                <li key={index} className="clr1">
                  <span className="font-bold">{key}</span>
                  <span>{value}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="space-y-4 mt-10">
          <h1 className="font-extrabold text-xl size6">When & Where</h1>
          <div className="flex space-x-4 items-center">
            <Image src={icon3} alt="Location Icon" />
            <p>{searchParams.whenandwhere}</p>
          </div>
        </section>
      </div>

      <div className="w-3/12 mt-8 mb-4">
        <section className="space-y-6">
          <h1 className="size6">About</h1>
          {[
            ["Posted On", icon2, searchParams.postedon],
            ["Deadline", icon4, searchParams.deadline],
            ["Location", icon3, searchParams.location],
            ["Start Date", icon5, searchParams.start_date],
            ["End Date", icon6, searchParams.end_date],
          ].map(([label, icon, value], index) => (
            <div key={index} className="flex space-x-3">
              <Image className="w-10 h-10" src={icon} alt={`${label} Icon`} />
              <div>
                <h5 className="size2">{label}</h5>
                <h1 className="text-sm font-semibold">{value}</h1>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-5 mr-6 border-t-2 border-b-2 space-y-5 py-4">
          <h1 className="size6">Categories</h1>
          <ul className="flex space-x-2">
            {searchParams.categories.map((category, index) => (
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
          <h1 className="size6">Required Skills</h1>
          <ul className="flex flex-wrap space-y-1 items-center gap-2">
            {searchParams.required.map((skill, index) => (
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
