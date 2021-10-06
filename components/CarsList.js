import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';

const CarsList = ({ cars }) => {
  return (
    <>
      {cars.map((car, i) => (
        <article className='car' key={car.model + i}>
          <div className='car__image'>
            <Image
              src={car.image}
              loader={() => car.image}
              alt={car.model}
              className='image'
              layout='fill'
            />
          </div>
          <div className='car__description'>
            <h2>
              {car.name} <span>{car.model}</span>
            </h2>
            <div className='car__details'>
              <ul>
                {car.type && (
                  <li>
                    Tipo: <span>{car.type}</span>
                  </li>
                )}
                {car.force && (
                  <li>
                    Potenza: <span>{car.force}</span>
                  </li>
                )}
                {car.volume && (
                  <li>
                    Cilindrata:{' '}
                    <span>
                      {car.volume} cm<span style={{ fontSize: '12px' }}>3</span>
                    </span>
                  </li>
                )}
              </ul>
              <button
                style={{
                  color:
                    car.fuel === 'BENZINA'
                      ? '#E20000'
                      : car.fuel.includes('HYBRID')
                      ? '#009933'
                      : car.fuel === 'ELECTRICA'
                      ? '#009EE3'
                      : '#005999',
                }}
                className={`button-${car.fuel}`}
              >
                {car.fuel}
              </button>
            </div>

            {car.costs.map((cost, i) => (
              <div
                key={cost.value}
                className={`car__specs spec-${i + 1}`}
                style={{
                  color:
                    car.fuel === 'BENZINA'
                      ? '#E20000'
                      : car.fuel.includes('HYBRID')
                      ? '#009933'
                      : car.fuel === 'ELECTRICA'
                      ? '#009EE3'
                      : '#005999',
                }}
              >
                <h3>
                  {cost.value} <span>€x100km {cost.extra && cost.extra}</span>
                </h3>
                <ul>
                  <li
                    style={{
                      color:
                        car.fuel === 'BENZINA'
                          ? '#E20000'
                          : car.fuel.includes('HYBRID')
                          ? '#009933'
                          : car.fuel === 'ELECTRICA'
                          ? '#009EE3'
                          : '#005999',
                    }}
                    className='filled'
                  ></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <FaInfoCircle className='car__info' color='#11111117' />
              </div>
            ))}
          </div>
        </article>
      ))}
    </>
  );
};

export default CarsList;
