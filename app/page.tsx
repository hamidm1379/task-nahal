import Home from "./_components/home";

interface ISearch {
  params: Promise<{}>;
  searchParams: Promise<{ title: string,status:string,favorite:boolean }>
}

async function HomePage({ searchParams }: ISearch) {
  const title = (await searchParams).title ?? ""
  const status=(await searchParams).status ?? ""
  const favorite=(await searchParams).favorite ?? ""

  const res = await fetch(`http://localhost:3001/projects/?title=${title}&status=${status}&favorite=${favorite}`)
  const projects = await res.json();

  return (
    <>
      <Home projects={projects} />
    </>
  );
}

export default HomePage