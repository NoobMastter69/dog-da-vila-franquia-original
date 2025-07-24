import React from "react";

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(10px)",
  },
  container: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "50px 40px",
    textAlign: "center",
    boxShadow: "0 0 25px rgba(0,0,0,0.4)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.2)",
    width: "90%",
    maxWidth: "480px",
  },
  title: {
    fontSize: "2.5em",
    color: "#ff8c00",
    fontWeight: "bold",
    marginBottom: "10px",
    letterSpacing: "1px",
  },
  subtitle: {
    fontSize: "1.2em",
    color: "#eee",
    marginBottom: "40px",
  },
  button: {
    display: "block",
    padding: "16px 24px",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.1em",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
  },
  orderButton: {
    background: "linear-gradient(135deg, #ff8c00, #ff6700)",
    boxShadow: "0 4px 15px rgba(255,140,0,0.5)",
  },
  franchiseButton: {
    background: "linear-gradient(135deg, #1f1f1f, #3a3a3a)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.6)",
  },
  buttonHover: {
    transform: "scale(1.03)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};

interface TelaDeEscolhaProps {
  onFranchiseClick: () => void;
}

export function TelaDeEscolha({ onFranchiseClick }: TelaDeEscolhaProps) {
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <h1 style={styles.title}>Seja bem-vindo!</h1>
        <p style={styles.subtitle}>O que você deseja fazer?</p>

        <div style={styles.options}>
          {/* FAZER PEDIDO */}
          <a
            href="https://pedido.anota.ai/loja/dog-da-vila2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.button, ...styles.orderButton }}
            onMouseOver={(e) =>
              Object.assign(e.currentTarget.style, styles.buttonHover)
            }
            onMouseOut={(e) =>
              Object.assign(e.currentTarget.style, styles.orderButton)
            }
          >
            🍔 Fazer um Pedido
          </a>

          {/* SER FRANQUEADO */}
          <button
            onClick={onFranchiseClick}
            style={{ ...styles.button, ...styles.franchiseButton }}
            onMouseOver={(e) =>
              Object.assign(e.currentTarget.style, styles.buttonHover)
            }
            onMouseOut={(e) =>
              Object.assign(e.currentTarget.style, styles.franchiseButton)
            }
          >
            💼 Quero ser um Franqueado
          </button>
        </div>
      </div>
    </div>
  );
}
