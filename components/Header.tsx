import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-right justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">PetFinder</span>
            <img alt="PetFinder" className="h-16 w-auto" src="/PetFinder.svg" />
          </Link>
        </div>
        <div className="lg:flex lg:gap-x-12">
          <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/pets">Pets List</Link> |{' '}
          <a href="/api/pets">Pets API</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
