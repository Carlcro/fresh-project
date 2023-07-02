import { MultiHandler, PageProps } from "$fresh/server.ts";

interface Project {
  name: string;
  stars: number;
}

export const handler: MultiHandler<Project> = {
  async GET(_req, ctx) {
    const project = { name: "hej", starts: 5 };
    if (!project) {
      return new Response("Project not found", { status: 404 });
    }
    return ctx.render(project);
  },
};

export default function ProjectPage(props: PageProps<Project>) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.stars} stars</p>
    </div>
  );
}
