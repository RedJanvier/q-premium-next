import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import Filter from './icons/Filter';

const Sidebar = ({ fuels, types, companies }) => {
  return (
    <aside className='filters-list'>
      <h2
        style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bolder',
          padding: '2rem 0',
        }}
      >
        <Filter size={34} color='var(--primary-color)' />
        <span style={{ marginLeft: '10px' }}>Filtra Auto</span>
      </h2>
      <div className='filters'>
        <div className='cost'>
          <h3>
            <span>Fascia di costo 100 km</span>
            <FaChevronDown />
          </h3>
          <div className='car__image'>
            <Image
              src='/cost.png'
              className='image'
              layout='fill'
              alt='selector to filter by cost'
            />
          </div>
        </div>
        <div className='fuel'>
          <h3>
            <span>Alimentazione</span>
            <FaChevronDown />
          </h3>
          {fuels.map((fuel) => (
            <label key={fuel.value} htmlFor={fuel.text}>
              <input name='fuel' type='radio' id={fuel.text} />
              <span>
                {fuel.text} {fuel.value && `(${fuel.value})`}
              </span>
            </label>
          ))}
        </div>
        <div className='type'>
          <h3>
            <span>Tipo Auto</span>
            <FaChevronDown />
          </h3>
          <ul>
            {types.map((fuel, i) => (
              <li key={fuel.text + i}>
                <label key={fuel.text + i + 1} htmlFor={fuel.text}>
                  <input name='types' type='radio' id={fuel.text} />
                  <span>{fuel.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className='company'>
          <h3>
            <span>Marca</span>
            <FaChevronDown />
          </h3>
          <ul>
            {companies.map((fuel, i) => (
              <li key={fuel.text + i}>
                <label key={fuel.value} htmlFor={fuel.text}>
                  <input name='companies' type='radio' id={fuel.text} />
                  <span>{fuel.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
