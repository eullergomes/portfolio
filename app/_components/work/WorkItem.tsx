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

// const WorkItems = ({ project }: ProjectProps) => {
//   return (
//     <div className="work__card">
//       <div className="work__rel">
//         <div className="work__container-imagem">
//           <a href={project.link} target="_blank" rel="noreferrer">
//             <Image
//               src={project.image}
//               alt={project.title}
//               className="work__img"
//             />
//             <div className="work__overlay">Visualizar</div>
//           </a>
//         </div>
//       </div>
//       <h3 className="work__title">{project.title}</h3>
//       <p className="work__description">{project.description}</p>
//     </div>
//   );
// };

export default WorkItems;
