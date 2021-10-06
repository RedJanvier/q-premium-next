import {
  FaFacebook,
  FaInstagram,
  FaRss,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='flex flexDirection'>
        <div className='flex flexDirection'>
          <h2>QUATTROROUTE</h2>
          <p className='appendix'>Sitemap | Contatti | Redaziona</p>
        </div>
        <ul className='socials'>
          <li className='each-li'>
            <a
              href='https://github.com/mansurissa'
              target='_blank'
              rel='noreferrer'
            >
              <FaYoutube />
            </a>
          </li>
          <li className='each-li'>
            <a
              href='https://www.linkedin.com/in/nsabimana-issa-1411ba1b3/'
              target='#blank'
              rel='noreferrer'
            >
              <FaFacebook />
            </a>
          </li>
          <li className='each-li'>
            <a
              href='https://twitter.com/Rwesamihigo'
              target='#blank'
              rel='noreferrer'
            >
              <FaTwitter />
            </a>
          </li>{' '}
          <li className='each-li'>
            <a
              href='https://twitter.com/Rwesamihigo'
              target='#blank'
              rel='noreferrer'
            >
              <FaInstagram />
            </a>
          </li>
          <li className='each-li'>
            <a
              href='https://www.linkedin.com/in/nsabimana-issa-1411ba1b3/'
              target='#blank'
              rel='noreferrer'
            >
              <FaRss />
            </a>
          </li>
        </ul>
      </div>
      <p className='appendix text-center'>
        Editoriale Domus SpA Via G. Mazzocchi, 1/3 20089 Rozzano (Mi) - Codice
        fiscale, partita IVA e iscrizione al Registro delle Imprese di Milano n.
        07835550158 R.E.A. di Milano n. 1186124 - Capitale sociale versato €
        5.000.000,00 - Tutti i diritti riservati - All rights reserved -
        Informativa Privacy - Informativa Cookie completa - Lic. SIAE n.
        4653/I/908
      </p>
    </footer>
  );
};

export default Footer;
