import Image, { StaticImageData } from 'next/image';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
  };
}

const WorkItems = ({ project }: ProjectProps) => {
  return (
    <div className="work__card">
      <a
        className="work__link"
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="work__container-imagem">
          <Image
            src={project.image}
            alt={project.title}
            width={295}
            height={194}
            className="work__img"
          />
          <div className="work__overlay">Visualizar</div>
        </div>
      </a>
      <h3 className="work__title">{project.title}</h3>
      <p className="work__description">{project.description}</p>
    </div>
  );
};

export default WorkItems;
