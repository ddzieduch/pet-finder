import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

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
        <div className="hidden items-center lg:flex lg:gap-x-12">
          {navElements.map((nav) => (
            <Link href={nav.href} className={`${pathname === nav.href ? 'border-b-3 font-bold' : ''}`}>
              {nav.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
