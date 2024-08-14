"use client";
import Card from "./components/card";
import data from "../_data/jobs.json";
import Link from "next/link";
import img0 from "../public/img0.svg";
import img1 from "../public/img1.svg";
import img2 from "../public/img2.svg";
import img3 from "../public/img3.svg";
import { useState, useMemo } from "react";

const images = [img0, img1, img2, img3];

export default function Home() {
  const [sortMethod, setSortMethod] = useState("Most Relevant");

  const jobData = data;

  const sortedData = useMemo(() => {
    if (sortMethod === "Newest First") {
      return [...jobData].sort(
        (a, b) =>
          new Date(b.about.posted_on).getTime() -
          new Date(a.about.posted_on).getTime()
      );
    }
    return jobData;
  }, [sortMethod, jobData]);

  return (
    <main className="bg-white h-fit flex mb-4">
      <div className="ml-32 mt-16 bg-white" style={{ width: "850px" }}>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="title-1 text-2xl font-bold">Opportunities</h1>
            <h5 className="body-text text-lg text-gray-500 ml-1">
              Showing {sortedData.length} results
            </h5>
          </div>

          <div className="mr-8 body-text">
            <h5>
              Sort by:{" "}
              <span className="font-bold text-gray-600">
                <select
                  onChange={(e) => setSortMethod(e.target.value)}
                  name="method"
                  id="method"
                >
                  <option value="Most Relevant">Most Relevant</option>
                  <option value="Newest First">Newest First</option>
                </select>
              </span>
            </h5>
          </div>
        </div>

        <ul className="space-y-6 mt-9">
          {sortedData.map(
            (
              {
                title,
                description,
                about: {
                  location,
                  categories,
                  posted_on,
                  deadline,
                  start_date,
                  end_date,
                  required_skills,
                },
                company,
                responsibilities,
                ideal_candidate: { age, gender, traits },
                when_where,
              },
              index
            ) => (
              <Link
                key={index}
                href={{
                  pathname: `/Description/${index}`,
                  // query: {
                  //   description,
                  //   res: responsibilities,
                  //   age,
                  //   gender,
                  //   traits,
                  //   whenandwhere: when_where,
                  //   postedon: posted_on,
                  //   deadline,
                  //   location,
                  //   start_date,
                  //   end_date,
                  //   categories,
                  //   required: required_skills,
                  // },
                }}
              >
                <Card
                  title={title}
                  description={description}
                  location={location}
                  company={company}
                  categories={categories}
                  img={images[index % 4]}
                />
              </Link>
            )
          )}
        </ul>
      </div>
    </main>
  );
}
