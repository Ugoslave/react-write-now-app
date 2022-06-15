import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {`${new Date().getFullYear()} Write Now! Russia`}</p>
    </footer>
  );
}

export default Footer;
