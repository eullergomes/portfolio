import Image from 'next/image';
import NextIcon from '../../assets/img/next-js.svg';
import NodeIcon from '../../assets/img/node-js.svg';
import PostgresIcon from '../../assets/img/postgresql.svg';
import MongoIcon from '../../assets/img/mongodb-original.svg';
import PrismaIcon from '../../assets/img/file-type-light-prisma.svg';

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <i className="bx bx-cog"></i>
        Back-end
      </h3>

      <div className="skills__images">
        <div className="skills__image">
          <Image src={NextIcon} alt="Next.js" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={NodeIcon} alt="Node.js" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={PostgresIcon} alt="PostgreSQL" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={PrismaIcon} alt="Prisma" width={45} height={45} />
        </div>
        <div className="skills__image">
          <Image src={MongoIcon} alt="MongoDB" width={45} height={45} />
        </div>
      </div>
    </div>
  );
};

export default Backend;
