"use client";

export default function Education() {
  const styles = {
    appleDark: "#1d1d1f",
    appleGray: "#f5f5f7",
    appleBlue: "#0071e3",
    container: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: "0 2rem"
    },
    sectionTitle: {
      fontSize: "2.25rem",
      fontWeight: "700",
      textAlign: "center" as const,
      marginBottom: "4rem",
      color: "#1d1d1f"
    },
    educationItem: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "1.5rem",
      padding: "2rem",
      borderRadius: "1rem",
      backgroundColor: "white",
      border: "1px solid #f3f4f6",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      marginBottom: "3rem"
    },
    degree: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1d1d1f"
    },
    institution: {
      color: "#4b5563",
      marginTop: "0.25rem"
    },
    period: {
      color: "#6b7280",
      marginTop: "0.5rem"
    },
    description: {
      color: "#4b5563",
      marginBottom: "1rem"
    },
    achievementTitle: {
      fontWeight: "500",
      color: "#1d1d1f",
      marginBottom: "0.5rem"
    },
    achievementList: {
      listStyleType: "disc",
      paddingLeft: "1.25rem"
    },
    achievementItem: {
      color: "#4b5563",
      marginBottom: "0.25rem"
    }
  };

  const educations = [
    {
      id: 1,
      degree: "Self Educated",
      institution: "Bağımsız Çalışma",
      period: "2018 - Günümüz",
      description: "Yazılım geliştirme, blockchain teknolojileri ve web tasarımı konularında kendi kendime eğitim aldım. Online kurslar, açık kaynak projeler ve pratik uygulamalar ile bilgi ve becerilerimi geliştirdim.",
      achievements: ["Blockchain ve akıllı kontrat geliştirme", "Frontend ve backend web teknolojileri", "UI/UX tasarım prensipleri", "Tam yığın (full stack) web geliştirme"]
    },
    {
      id: 2,
      degree: "Bilgisayar Mühendisliği",
      institution: "İstanbul Teknik Üniversitesi",
      period: "2018 - 2022",
      description: "Yazılım geliştirme, algoritma tasarımı ve veri yapıları konusunda kapsamlı eğitim aldım. Web teknolojilerine odaklanarak çeşitli projeler geliştirdim.",
      achievements: ["Onur Öğrencisi (3.75/4.00 GPA)", "Web Geliştirme Kulübü Başkanı"]
    },
    {
      id: 3,
      degree: "Yazılım Geliştirme Bootcamp",
      institution: "Kodluyoruz",
      period: "Haziran 2020 - Ağustos 2020",
      description: "12 haftalık yoğun bir program ile modern web geliştirme tekniklerini, React ve JavaScript ekosistemini öğrendim. Bitirme projesi olarak e-ticaret uygulaması geliştirdim.",
      achievements: ["En İyi Proje Ödülü", "100+ Saat Uygulama"]
    }
  ];

  return (
    <section id="education" style={{ padding: "5rem 0", backgroundColor: "white" }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Eğitim</h2>
        
        <div>
          {educations.map((edu) => (
            <div key={edu.id} style={styles.educationItem}>
              <div>
                <h3 style={styles.degree}>{edu.degree}</h3>
                <p style={styles.institution}>{edu.institution}</p>
                <p style={styles.period}>{edu.period}</p>
              </div>
              
              <div>
                <p style={styles.description}>{edu.description}</p>
                
                {edu.achievements.length > 0 && (
                  <div style={{ marginTop: "0.75rem" }}>
                    <h4 style={styles.achievementTitle}>Başarılar:</h4>
                    <ul style={styles.achievementList}>
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} style={styles.achievementItem}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 