const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <div className="p-20 bg-golden-block text-charcoal-house">
        <p className="text-xs font-medium text-center md:text-right">
          {`© ${currentYear} PetFinder | All Rights Reserved | Created by`}{' '}
          <span className="font-bold">Damian Dzieduch</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
