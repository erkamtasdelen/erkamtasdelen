"use client";

import Image from 'next/image';

export default function Hero() {
  const styles = {
    appleDark: "#1d1d1f",
    appleGray: "#f5f5f7",
    appleBlue: "#0071e3",
    section: {
      padding: "5rem 0",
      background: "linear-gradient(to bottom, #f5f5f7, white)"
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 2rem",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      gap: "3rem"
    },
    contentBox: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "1.5rem",
      maxWidth: "600px"
    },
    title: {
      fontSize: "3.5rem",
      fontWeight: "700",
      color: "#1d1d1f",
      lineHeight: 1.1
    },
    subtitle: {
      fontSize: "1.5rem",
      color: "#4b5563"
    },
    description: {
      fontSize: "1.125rem",
      color: "#4b5563",
      lineHeight: 1.6,
      maxWidth: "32rem"
    },
    buttonContainer: {
      display: "flex",
      gap: "1rem",
      marginTop: "1rem"
    },
    primaryButton: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#0071e3",
      color: "white",
      fontWeight: "500",
      borderRadius: "9999px",
      textDecoration: "none",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
      transition: "background-color 0.3s ease"
    },
    secondaryButton: {
      padding: "0.75rem 1.5rem",
      border: "1px solid #d1d5db",
      borderRadius: "9999px",
      color: "#1d1d1f",
      fontWeight: "500",
      textDecoration: "none",
      transition: "background-color 0.3s ease"
    },
    photoContainer: {
      position: "relative" as const,
      width: "20rem",
      height: "20rem",
      borderRadius: "9999px",
      overflow: "hidden",
      border: "4px solid white",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    gradientBg: {
      position: "absolute" as const,
      inset: 0,
      background: "linear-gradient(to bottom right, #0071e3, #8b5cf6)"
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div style={{
        ...styles.container,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <div style={{
          flex: "1",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}>
          <h1 style={styles.title}>
            Erkam Taşdelen
          </h1>
          <h2 style={styles.subtitle}>
            Frontend Geliştirici
          </h2>
          <p style={styles.description}>
            I am pleased to introduce myself as a highly skilled software developer with six years of experience in the field, and six years of professional work in providing freelance services. I am writing to share my background and experience, and to express my interest in potential collaboration opportunities.
          </p>
          <div style={styles.buttonContainer}>
            <a 
              href="#contact" 
              style={styles.primaryButton}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0062c4"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.appleBlue}
            >
              İletişime Geç
            </a>
            <a 
              href="#experience" 
              style={styles.secondaryButton}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f9fafb"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            >
              Deneyimlerim
            </a>
          </div>
        </div>
        <div style={{
          flex: "1",
          minWidth: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={styles.photoContainer}>
            <div style={styles.gradientBg} />
            {/* Eğer bir profil resminiz varsa aşağıdaki Image bileşenini kullanabilirsiniz
            <Image 
              src="/profile.jpg" 
              alt="Erkam Taşdelen" 
              fill 
              className="object-cover"
            />
            */}
          </div>
        </div>
      </div>
    </section>
  );
} 