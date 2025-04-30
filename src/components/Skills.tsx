"use client";

export default function Skills() {
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
    card: {
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "2rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      color: "#1d1d1f"
    },
    skillName: {
      color: "#374151"
    },
    skillPercent: {
      fontSize: "0.875rem",
      color: "#6b7280"
    },
    progressBg: {
      height: "0.5rem",
      backgroundColor: "#e5e7eb",
      borderRadius: "9999px",
      overflow: "hidden"
    },
    progressBar: {
      height: "100%",
      backgroundColor: "#0071e3",
      borderRadius: "9999px"
    }
  };

  const skillCategories = [
    {
      id: 1,
      name: "Geliştirme",
      skills: [
        { name: "AI", level: 90 },
        { name: "Python", level: 90 },
        { name: "Blockchain", level: 90 },
        { name: "Solidity", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Php", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      id: 2,
      name: "Tasarım",
      skills: [
        { name: "UI/UX", level: 85 },
        { name: "Responsive Design", level: 90 },
      ]
    },
    {
      id: 3,
      name: "Araçlar & Diğer",
      skills: [
        { name: "Git", level: 85 },
        { name: "REST API", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" style={{ padding: "5rem 0", backgroundColor: styles.appleGray }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Yetenekler</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
          {skillCategories.map((category) => (
            <div key={category.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{category.name}</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {category.skills.map((skill) => (
                  <div key={skill.name} style={{ marginBottom: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={styles.skillName}>{skill.name}</span>
                      <span style={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div style={styles.progressBg}>
                      <div 
                        style={{ 
                          ...styles.progressBar,
                          width: `${skill.level}%` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <p style={{ color: "#4b5563", maxWidth: "36rem", margin: "0 auto" }}>
            Sürekli kendimi geliştirmeye ve yeni teknolojileri öğrenmeye odaklanıyorum. 
            Kullanıcı deneyimini ön planda tutarak, performans ve erişilebilirlik konularında 
            titizlikle çalışıyorum.
          </p>
        </div>
      </div>
    </section>
  );
} 