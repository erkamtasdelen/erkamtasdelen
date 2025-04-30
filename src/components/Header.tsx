"use client";

import Link from 'next/link';

export default function Header() {
  const styles = {
    appleDark: "#1d1d1f",
    appleGray: "#f5f5f7",
    appleBlue: "#0071e3",
    header: {
      position: "sticky" as const,
      top: 0,
      zIndex: 10,
      backgroundColor: "rgba(245, 245, 247, 0.8)",
      backdropFilter: "blur(8px)",
      padding: "1rem 2rem",
      borderBottom: "1px solid #e5e7eb"
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    logo: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#1d1d1f",
      textDecoration: "none"
    },
    nav: {
      display: "flex"
    },
    navList: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    navLink: {
      color: "#1d1d1f",
      textDecoration: "none",
      transition: "color 0.3s ease"
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link href="/" style={styles.logo}>
          Erkam Taşdelen
        </Link>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li>
              <Link 
                href="#about" 
                style={styles.navLink}
                onMouseOver={(e) => e.currentTarget.style.color = styles.appleBlue}
                onMouseOut={(e) => e.currentTarget.style.color = styles.appleDark}
              >
                Hakkımda
              </Link>
            </li>
            <li>
              <Link 
                href="#experience" 
                style={styles.navLink}
                onMouseOver={(e) => e.currentTarget.style.color = styles.appleBlue}
                onMouseOut={(e) => e.currentTarget.style.color = styles.appleDark}
              >
                Deneyim
              </Link>
            </li>
            <li>
              <Link 
                href="#skills" 
                style={styles.navLink}
                onMouseOver={(e) => e.currentTarget.style.color = styles.appleBlue}
                onMouseOut={(e) => e.currentTarget.style.color = styles.appleDark}
              >
                Yetenekler
              </Link>
            </li>
            <li>
              <Link 
                href="#education" 
                style={styles.navLink}
                onMouseOver={(e) => e.currentTarget.style.color = styles.appleBlue}
                onMouseOut={(e) => e.currentTarget.style.color = styles.appleDark}
              >
                Eğitim
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                style={styles.navLink}
                onMouseOver={(e) => e.currentTarget.style.color = styles.appleBlue}
                onMouseOut={(e) => e.currentTarget.style.color = styles.appleDark}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 