import { projectsData } from './Data';
import WorkItems from './WorkItem';

const Works = () => {
  return (
    <div className="work__container container grid">
      {projectsData.map((project) => (
        <WorkItems key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Works;
