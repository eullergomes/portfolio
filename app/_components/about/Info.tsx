const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">+2 anos</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completei</h3>
        <span className="about__subtitle">+28 Projetos</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Suporte</h3>
        <span className="about__subtitle">08h-18h</span>
      </div>
    </div>
  );
};

export default Info;
