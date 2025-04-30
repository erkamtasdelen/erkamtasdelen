"use client";

export default function Experience() {
  const styles = {
    appleDark: "#1d1d1f",
    appleGray: "#f5f5f7",
    appleBlue: "#0071e3",
    container: {
      maxWidth: "1200px",
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
    experienceItem: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "2rem",
      padding: "2rem",
      borderRadius: "1rem",
      transition: "background-color 0.3s ease",
      marginBottom: "3rem"
    },
    jobTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1d1d1f"
    },
    company: {
      fontSize: "1.25rem",
      color: "#4b5563"
    },
    period: {
      color: "#6b7280",
      marginTop: "0.5rem"
    },
    description: {
      color: "#4b5563",
      marginBottom: "1rem"
    },
    skillBadge: {
      display: "inline-block",
      padding: "0.25rem 0.75rem",
      backgroundColor: "rgba(0, 113, 227, 0.1)",
      color: "#0071e3",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      marginRight: "0.5rem",
      marginBottom: "0.5rem"
    }
  };

  const experiences = [
    {
      id: 1,
      title: "Full IT Support",
      company: "Bielinvest nl",
      period: "Eylül 2024 - Günümüz",
      description: "Tüm süreci yöneterek hollandaya yeni gelen lüks emlak firmasının IT desteğini sağlıyorum.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "Freelance",
      company: "Upwork",
      period: "Mart 2023 - Halen (2 yıl)",
      description: "Blockchain ve web tasarımı projelerinde freelance olarak hizmet veriyorum. Modern web uygulamaları ve blockchain çözümleri geliştiriyorum.",
      skills: ["HTML", "Programlama", "Web Geliştirme", "Blockchain"]
    },
    {
      id: 3,
      title: "CTO",
      company: "Ancient Warrior",
      period: "Ara 2021 - Halen (3 yıl 5 ay)",
      description: "Tam zamanlı CTO pozisyonunda teknik ekibi yönetiyorum. Program değerlendirme ve geliştirme süreçlerini yönetiyorum.",
      skills: ["Programlama", "Program Değerlendirme", "Teknik Liderlik", "Proje Yönetimi", "Ekip Yönetimi", "Blockchain"]
    },
    {
      id: 4,
      title: "Full Stack Engineer",
      company: "Regular Presale",
      period: "Mart 2021 - Halen (4 yıl 2 ay)",
      description: "Full Stack geliştirici olarak web uygulamaları ve program geliştirme projelerinde çalıştım. Frontend ve backend sistemleri tasarladım ve uyguladım.",
      skills: ["Programlama", "Program Geliştirme", "Full Stack", "Frontend", "Backend", "Web Uygulamaları"]
    },
    {
      id: 5,
      title: "Full Stack Engineer",
      company: "Joker Shop",
      period: "Şubat 2021 - Mart 2021 (2 ay)",
      description: "Kısa süreli pozisyonda HTML ve web teknolojileri ile e-ticaret uygulaması geliştirdim.",
      skills: ["HTML", "Programlama", "E-ticaret", "Web Geliştirme"]
    },
    {
      id: 6,
      title: "Full Stack Engineer",
      company: "Aftunsocr",
      period: "Oca 2021 - Oca 2021 (1 ay)",
      description: "Web tabanlı uygulamalar için HTML ve programlama hizmetleri sağladım. Kısa süreli projede frontend geliştirme yaptım.",
      skills: ["HTML", "Programlama", "Frontend", "Web Geliştirme"]
    }
  ];

  return (
    <section id="experience" style={{ padding: "5rem 0", backgroundColor: "white" }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Deneyim</h2>
        
        <div>
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              style={styles.experienceItem}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(245, 245, 247, 0.5)"}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
            >
              <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
                <h3 style={styles.jobTitle}>{exp.title}</h3>
                <p style={styles.company}>{exp.company}</p>
                <p style={styles.period}>{exp.period}</p>
              </div>
              
              <div style={{ flex: "2" }}>
                <p style={styles.description}>{exp.description}</p>
                <div>
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      style={styles.skillBadge}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 