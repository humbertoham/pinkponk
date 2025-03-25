'use client'
import Portfolio from "@/components/portfolio";

import projects from "../../../public/locales/en/projects.json"



export default function Home() {
  return (<>
    <Portfolio  projects={projects} />
    </>
  );
}
