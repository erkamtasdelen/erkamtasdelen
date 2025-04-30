"use client";

export default function Footer() {
  const styles = {
    appleDark: "#1d1d1f",
    appleGray: "#f5f5f7",
    appleBlue: "#0071e3",
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 2rem"
    },
    footer: {
      backgroundColor: "#1d1d1f",
      color: "white",
      padding: "2.5rem 0"
    },
    footerContent: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-between",
      alignItems: "center"
    },
    copyright: {
      fontSize: "0.875rem",
      color: "#9ca3af"
    },
    linkList: {
      display: "flex",
      gap: "1.5rem",
      fontSize: "0.875rem",
      marginTop: "1rem",
      marginBottom: "1rem"
    },
    link: {
      color: "#9ca3af",
      transition: "color 0.3s ease"
    },
    tagline: {
      fontSize: "0.875rem",
      color: "#9ca3af"
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div>
            <p style={styles.copyright}>
              &copy; {new Date().getFullYear()} Erkam Taşdelen. Tüm hakları saklıdır.
            </p>
          </div>
          
          <div style={{ marginTop: "1rem" }}>
            <ul style={styles.linkList}>
              <li>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.currentTarget.style.color = "white"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#9ca3af"}
                >
                  Gizlilik
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.currentTarget.style.color = "white"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#9ca3af"}
                >
                  Şartlar
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  style={styles.link}
                  onMouseOver={(e) => e.currentTarget.style.color = "white"}
                  onMouseOut={(e) => e.currentTarget.style.color = "#9ca3af"}
                >
                  Çerezler
                </a>
              </li>
            </ul>
          </div>
          
          <div style={{ marginTop: "1rem" }}>
            <p style={styles.tagline}>
              Apple tarzı ile tasarlanmıştır
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 