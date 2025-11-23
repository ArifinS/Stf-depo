import React from 'react';
import Link from 'next/link';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Brand', href: '/brand' },
];

const MenuItem = () => (
  <nav>
    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default MenuItem;
