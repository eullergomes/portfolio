import Image from 'next/image';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <i className="bx bx-cog"></i>
        Front-end developer
      </h3>

      <div className="skills__images">
        <div className="skills__image">
          <Image src="/node-icon.png" alt="Node.js" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image
            src="/postgres-icon.png"
            alt="PostgreSQL"
            width={45}
            height={45}
          />
        </div>
        <div className="skills__image">
          <Image src="/prisma-icon.png" alt="Prisma" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src="/mongo-icon.png" alt="MongoDB" width={45} height={45} />
        </div>
      </div>
    </div>
  );
};

export default Backend;
