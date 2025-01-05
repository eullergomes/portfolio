import { useProjectsData } from './Data';
import WorkItems from './WorkItem';

const Works = () => {
  const projects = useProjectsData();

  return (
    <div className="work__container container grid">
      {projects.map((project) => (
        <WorkItems key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Works;
