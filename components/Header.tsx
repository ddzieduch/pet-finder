import Link from 'next/link';

const Header = () => {
  const navElements = [
    { href: '/', name: 'Main' },
    { href: '/about', name: 'About' },
    { href: '/pets', name: 'Pets List' },
    { href: '/api/pets', name: 'Pets API' },
  ];
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-right justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">PetFinder</span>
            <img alt="PetFinder" className="h-16 w-auto" src="/PetFinder.svg" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navElements.map((nav) => (
            <Link href={nav.href}>{nav.name}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
