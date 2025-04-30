"use client";

import { useState } from 'react';

export default function Contact() {
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
    contactBox: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "3rem"
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "1rem"
    },
    contactTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1d1d1f",
      marginBottom: "1rem"
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      color: "#4b5563"
    },
    socialTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "#1d1d1f",
      marginBottom: "1rem",
      marginTop: "2rem"
    },
    socialIcons: {
      display: "flex",
      gap: "1rem"
    },
    socialIcon: {
      color: "#4b5563",
      transition: "color 0.3s ease"
    },
    formTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1d1d1f",
      marginBottom: "1rem"
    },
    formSuccess: {
      backgroundColor: "#f0fdf4",
      padding: "1rem",
      borderRadius: "0.5rem",
      color: "#166534",
      border: "1px solid #dcfce7"
    },
    formGroup: {
      marginBottom: "1rem"
    },
    formLabel: {
      display: "block",
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "0.25rem"
    },
    formInput: {
      width: "100%",
      padding: "0.75rem 1rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.5rem",
      outline: "none",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease"
    },
    formTextarea: {
      width: "100%",
      padding: "0.75rem 1rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.5rem",
      outline: "none",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      minHeight: "8rem",
      resize: "vertical" as const
    },
    submitButton: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#0071e3",
      color: "white",
      fontWeight: "500",
      borderRadius: "0.5rem",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      width: "100%"
    },
    iconSvg: {
      width: "1.25rem",
      height: "1.25rem",
      color: "#0071e3"
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Burada normalde bir API çağrısı yapılacak
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // 3 saniye sonra başarı mesajını kaldır
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <section id="contact" style={{ padding: "5rem 0", backgroundColor: styles.appleGray }}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        
        <div style={{ 
          maxWidth: "900px", 
          margin: "0 auto", 
          display: "flex", 
          flexDirection: "column",
          gap: "3rem"
        }}>
          <div style={{ 
            display: "flex", 
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "3rem"
          }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={styles.contactTitle}>İletişim Bilgileri</h3>
              <div style={styles.contactInfo}>
                <p style={styles.contactItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={styles.iconSvg} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                  </svg>
                  <span>erkamtasdelen@gmail.com</span>
                </p>
                <p style={styles.contactItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={styles.iconSvg} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+31 687726915</span>
                </p>
                <p style={styles.contactItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={styles.iconSvg} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Alkmaar, Netherlands</span>
                </p>
              </div>
              
              <div style={{ marginTop: "2rem" }}>
                <h3 style={styles.socialTitle}>Sosyal Medya</h3>
                <div style={styles.socialIcons}>
                  <a 
                    href="#" 
                    style={styles.socialIcon}
                    onMouseOver={(e) => e.currentTarget.style.color = styles.appleBlue}
                    onMouseOut={(e) => e.currentTarget.style.color = "#4b5563"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "1.5rem", height: "1.5rem" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    style={styles.socialIcon}
                    onMouseOver={(e) => e.currentTarget.style.color = styles.appleBlue}
                    onMouseOut={(e) => e.currentTarget.style.color = "#4b5563"}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "1.5rem", height: "1.5rem" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h3 style={styles.formTitle}>Mesaj Gönder</h3>
              
              {isSubmitted ? (
                <div style={styles.formSuccess}>
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.formLabel}>
                      İsim
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      style={styles.formInput}
                      placeholder="Adınız Soyadınız"
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.appleBlue;
                        e.target.style.boxShadow = "0 0 0 3px rgba(0, 113, 227, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.formLabel}>
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={styles.formInput}
                      placeholder="example@domain.com"
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.appleBlue;
                        e.target.style.boxShadow = "0 0 0 3px rgba(0, 113, 227, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  
                  <div style={styles.formGroup}>
                    <label htmlFor="message" style={styles.formLabel}>
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      style={styles.formTextarea}
                      placeholder="Mesajınızı buraya yazın..."
                      onFocus={(e) => {
                        e.target.style.borderColor = styles.appleBlue;
                        e.target.style.boxShadow = "0 0 0 3px rgba(0, 113, 227, 0.2)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d1d5db";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={styles.submitButton}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0062c4"}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.appleBlue}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 