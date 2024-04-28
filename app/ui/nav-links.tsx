'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'All Courses',
    href: '/all_courses',
  },
  { name: 'Learning Dashboard', href: '/learning_dashboard' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] text-[#B2B2B2] grow-2 items-center hover:text-textwhite justify-start  p-2 m px-3',
              {
                'text-blue-600': pathname === link.href,
              },
            )}
          >
            <p className="hidden tablet:block text-white">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
