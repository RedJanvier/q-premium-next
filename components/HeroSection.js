import { FaExternalLinkAlt } from 'react-icons/fa';

const HeroSection = ({ ctaData, openModal }) => {
  return (
    <section className='container'>
      <div className='hero__higlight'>
        <h1>
          <span>€x</span>
          <span className='kilometers'>
            100
            <br />
            KM
          </span>
        </h1>
        <p>
          I costi chilometrici relativi alle auto provate dal 2016 ad oggi.{' '}
          <a href='#'>Più info</a>
        </p>
        <div className='date'>
          <span className='date__icon'>
            <FaExternalLinkAlt />
          </span>
          <span className='date__text'>Prezzi aggiornati al 08/06/2021</span>
        </div>
      </div>
      <div className='hero__cta'>
        <h2>
          <span>Costi calcolati</span>
          <span> su queste percentuali di utilizzo</span>
        </h2>
        <div className='cta-cards'>
          {ctaData.map((data) => (
            <div
              className='cta-card'
              key={data.color}
              style={{ color: data.color }}
            >
              <h3 className='cta-card__percentage'>
                {data.percentuali}
                <span>%</span>
              </h3>
              <span>{data.nombre}</span>
            </div>
          ))}
        </div>
        <button onClick={openModal}>Cambiar Percentuali</button>
      </div>
    </section>
  );
};

export default HeroSection;
