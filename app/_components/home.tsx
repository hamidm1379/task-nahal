
"use client";

import FilterProjects from "@/components/FilterProjects";
import ProjectCard from "@/components/ProjectCard";
import { IProject } from "../interfaces/index";
import { FC, useEffect, useState } from "react";


interface Props {
  projects: IProject[];
}

const Home: FC<Props> = ({ projects: initialProjects }) => {
  const [project, setProject] = useState<IProject[]>(initialProjects);

  const handleSearch = async ({
    search,
    status,
    favorite,

  }: {
    search: string;
    status: string;
    favorite: boolean;
  }) => {

    let url = "projects"; 
    const params = new URLSearchParams();

    if (search) params.set("title", search);
    if (status) params.set("status", status);
    if (favorite) params.set("favorite", favorite.toString());

    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    let fsUrl = ""
    if (favorite) fsUrl = `?title=${search}&status=${status}&favorite=${favorite}`
    if (!favorite) fsUrl = `?title=${search}&status=${status}`

    const res = await fetch(`http://localhost:3001/projects${fsUrl}`)
    const projects = await res.json();
    console.log(projects, "hamid")
    setProject(projects)
  };

  useEffect(() => {
  }, [project])


  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-10">
          <FilterProjects onSearch={handleSearch} />
          <ProjectCard projects={project} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
}





export default Home;
