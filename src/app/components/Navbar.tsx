'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Navbar.module.css';

export function Navbar() {

  return (
    <nav className={styles.navigation}>
      <div>
        <Link className={`${styles['link-active']}`} href="/">
          Start
        </Link>
        <Link className={`${styles.link}`} href="/anmeldung">
          Anmeldung
        </Link>
        <Link className={`${styles.link}`} href="/programmliste">
          Programmliste
        </Link>
        <Link className={`${styles.link}`} href="/kalender">
          Kalender
        </Link>
        <Link className={`${styles.link}`} href="/login">
          Login
        </Link>
      </div>
    </nav>
  );
}
