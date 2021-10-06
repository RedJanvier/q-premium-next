import Head from 'next/head';
import { useState } from 'react';
import CarsList from '../components/CarsList';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import CostModal from '../components/CostModal';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RiEqualizerFill } from 'react-icons/ri';
import Footer from '../components/Footer';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const ctaData = [
    {
      nombre: 'Città',
      percentuali: 33,
      color: '#FFC31F',
    },
    {
      nombre: 'Statale',
      percentuali: 33,
      color: '#3E97FF',
    },
    {
      nombre: 'Autostrada',
      percentuali: 33,
      color: '#26BE0A',
    },
  ];

  const carsData = [
    {
      name: 'VOLKSWAGEN ECO UP!',
      model: 'move 5p.',
      type: 'Berlina',
      force: {
        cv: 150,
        kw: 110,
      },
      volume: '1395',
      image: 'https://preview2.netcarshow.com/Volkswagen-Eco_Up-2013-hd.jpg',
      fuel: 'GPL',
      costs: [
        {
          value: '3,85',
          extra: 'per le tue abitudini',
          rating: 0.1,
        },
      ],
    },
    {
      name: 'FORD FIESTA',
      model: '1.1 75 CV Gpl 5p.',
      type: 'Berlina',
      force: {
        cv: 150,
        kw: 110,
      },
      volume: '1395',
      image:
        'https://www.topgear.com/sites/default/files/cars-car/image/2018/05/ford_2018_fiesta_st_3door_02.jpg',
      fuel: 'GPL',
      costs: [{ value: '4,96', rating: 0.15 }],
    },
    {
      name: 'HYUNDAY IONIQ',
      model: 'ELECTRIC EV 38.3 kWhA',
      type: 'Berlina',
      force: {
        cv: 150,
        kw: 110,
      },
      image:
        'https://media.ed.edmunds-media.com/hyundai/ioniq-electric/2020/oem/2020_hyundai_ioniq-electric_4dr-hatchback_limited_fq_oem_1_1600.jpg',
      fuel: 'ELECTRICA',
      costs: [
        { value: '3,40', extra: '- ricarica domestica', rating: 0.1 },
        { value: '8,54', extra: '- col. corrente continua', rating: 0.3 },
      ],
    },
    {
      name: 'TOYOTA PRIUS',
      model: 'Plug-in Hybrid',
      type: 'Berlina',
      force: {
        cv: 150,
        kw: 110,
      },
      image:
        'https://i.gaw.to/content/photos/38/92/389207_2020_Toyota_Prius.jpg?1024x640',
      fuel: 'PLUG-IN HYBRID',
      costs: [
        { value: '3,40', extra: 'ricarica domestica', rating: 0.15 },
        { value: '8,54', extra: 'col. cor. continua', rating: 0.18 },
      ],
    },
    {
      name: 'VOLKSWAGEN ECO UP!',
      model: 'move 5 porte',
      type: 'Berlina',
      force: {
        cv: 150,
        kw: 110,
      },
      volume: '1395',
      image: 'https://preview2.netcarshow.com/Volkswagen-Eco_Up-2013-hd.jpg',
      fuel: 'FULL HYBRID',
      costs: [
        {
          value: '6,97',
          rating: 0.1,
        },
      ],
    },
    {
      name: 'VOLKSWAGEN ECO UP!',
      model: 'move 5 porte',
      type: 'Berlina',
      force: {
        cv: 150,
        kw: 110,
      },
      volume: '1395',
      image: 'https://preview2.netcarshow.com/Volkswagen-Eco_Up-2013-hd.jpg',
      fuel: 'BENZINA',
      costs: [
        {
          value: '8,54',
          rating: 0.1,
        },
      ],
    },
  ];

  const fuels = [
    { value: null, text: 'Tutte' },
    { value: 123, text: 'Benzina' },
    { value: 71, text: 'Gasolio' },
    { value: 5, text: 'Mild Hybrid Benzina' },
    { value: 15, text: 'Full Hybrid' },
    { value: 34, text: 'Plug-in Hybrid' },
    { value: 34, text: 'Electrica' },
    { value: 6, text: 'GPL' },
    { value: 6, text: 'Metano' },
  ];

  const types = [
    { value: null, text: 'Tutte' },
    { value: 2, text: 'Coupé' },
    { value: 1, text: 'City Car' },
    { value: 2, text: 'Station wagon' },
    { value: 1, text: 'Berlina' },
    { value: 2, text: 'Monovolume' },
    { value: 1, text: 'Cabrio' },
    { value: 2, text: 'Suv/Fuoristrada' },
  ];

  const companies = [
    { text: `Tutte` },
    { text: `Mahindra` },
    { text: `Alfa Romeo` },
    { text: `Mazda` },
    { text: `Alpine` },
    { text: `Mercedes` },
    { text: `Aston Martin` },
    { text: `Mg` },
    { text: `Audi` },
    { text: `Mini` },
    { text: `Bmw` },
    { text: `Mitsubishi` },
    { text: `Citroen` },
    { text: `Nissan` },
    { text: `Cupra` },
    { text: `Opel` },
    { text: `Dacia` },
    { text: `Peugeot` },
    { text: `Ds` },
    { text: `Porsche` },
    { text: `Dr` },
    { text: `Renault` },
    { text: `Fiat` },
    { text: `Seat` },
    { text: `Ford` },
    { text: `Skoda` },
    { text: `Honda` },
    { text: `Ssangyong` },
    { text: `Hyundai` },
    { text: `Subaru` },
    { text: `Jaguar` },
    { text: `Suzuki` },
    { text: `Jeep` },
    { text: `Toyota` },
    { text: `Kia` },
    { text: `Tesla` },
    { text: `Lancia` },
    { text: `Volkswagen` },
    { text: `Land Rover` },
    { text: `Volvo Xev` },
    { text: `Lexus` },
  ];

  return (
    <>
      <Head>
        <title>€x100km - Q Premium</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <header className='hero'>
        <HeroSection openModal={() => setShowModal(true)} ctaData={ctaData} />
      </header>

      <main className='container'>
        <Sidebar types={types} companies={companies} fuels={fuels} />
        <section className='cars'>
          <div
            className='desktop-order'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <span>Ordina per</span>
            <ul className='order'>
              <li className='selected'>Costa</li>
              <li>Potenza</li>
              <li>Cilindrata</li>
              <li>Marca</li>
            </ul>
          </div>
          <div className='mobile-order'>
            <div className='date'>
              <div className='date__icon'>
                <FaExternalLinkAlt />
              </div>
              <p className='date__text'>Info Prezzi</p>
            </div>
            <div className='select'>
              <span>Ordina per </span>
              <select className='order-selector'>
                <option selected value='costo'>
                  Costo
                </option>
                <option value='potenza'>Potenza</option>
                <option value='cilindrata'>Cilindrata</option>
                <option value='marca'>Marca</option>
              </select>
            </div>
          </div>
          <CarsList cars={carsData} />
        </section>
      </main>

      {showModal && (
        <CostModal closeModal={() => setShowModal(false)} ctaData={ctaData} />
      )}

      <Footer />
      <div className='mobile__filter'>
        <RiEqualizerFill />
        {/* <Filter color='white' size={34} /> */}
        <h2>Filtra auto</h2>
      </div>
    </>
  );
}
