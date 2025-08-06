import React, { useState } from "react";

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
    width: "100%",
    textAlign: "center",
  },
  orderButton: {
    background: "linear-gradient(135deg, #ff8c00, #ff6700)",
    boxShadow: "0 4px 15px rgba(255,140,0,0.5)",
  },
  franchiseButton: {
    background: "linear-gradient(135deg, #1f1f1f, #3a3a3a)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.6)",
  },
  lojaButton: {
    background: "linear-gradient(135deg, #262626, #4d4d4d)",
    boxShadow: "0 4px 15px rgba(255,255,255,0.15)",
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
  backButton: {
    marginTop: "30px",
    background: "transparent",
    border: "2px solid #ff8c00",
    color: "#ff8c00",
    fontWeight: "600",
    borderRadius: "12px",
    padding: "12px 24px",
    cursor: "pointer",
    transition: "background 0.3s ease, color 0.3s ease",
  },
  backButtonHover: {
    background: "#ff8c00",
    color: "#fff",
  },
};

interface TelaDeEscolhaProps {
  onFranchiseClick: () => void;
}

export function TelaDeEscolha({ onFranchiseClick }: TelaDeEscolhaProps) {
  // estado que controla qual tela está sendo mostrada
  const [tela, setTela] = useState<"inicio" | "lojas">("inicio");
  // estado para hover do botão voltar
  const [hoverBack, setHoverBack] = useState(false);

  // efeitos hover comuns para botões principais
  const efeitoHover = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    Object.assign(e.currentTarget.style, styles.buttonHover);
  };
  const efeitoUnhover = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, tipo: "orderButton" | "franchiseButton" | "lojaButton") => {
    if (tipo === "orderButton") Object.assign(e.currentTarget.style, styles.orderButton);
    else if (tipo === "franchiseButton") Object.assign(e.currentTarget.style, styles.franchiseButton);
    else if (tipo === "lojaButton") Object.assign(e.currentTarget.style, styles.lojaButton);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        {tela === "inicio" && (
          <>
            <h1 style={styles.title}>Seja bem-vindo!</h1>
            <p style={styles.subtitle}>O que você deseja fazer?</p>
            <div style={styles.options}>
              {/* Botão Fazer Pedido */}
              <button
                onClick={() => setTela("lojas")}
                style={{ ...styles.button, ...styles.orderButton }}
                onMouseOver={efeitoHover}
                onMouseOut={(e) => efeitoUnhover(e, "orderButton")}
              >
                Fazer um Pedido
              </button>

              {/* Botão Quero ser Franqueado */}
              <button
                onClick={onFranchiseClick}
                style={{ ...styles.button, ...styles.franchiseButton }}
                onMouseOver={efeitoHover}
                onMouseOut={(e) => efeitoUnhover(e, "franchiseButton")}
              >
                Quero ser um Franqueado
              </button>
            </div>
          </>
        )}

        {tela === "lojas" && (
          <>
            <h1 style={styles.title}>Qual unidade você prefere?</h1>
            <p style={styles.subtitle}>Escolha a unidade mais próxima de você para fazer o pedido.</p>

            <div style={styles.options}>
              <a
                href="https://pedido.anota.ai/loja/dogdavilaooriginal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.lojaButton }}
                onMouseOver={efeitoHover}
                onMouseOut={(e) => efeitoUnhover(e, "lojaButton")}
              >
                Dog da Vila - Jd. Rosana
              </a>
              <a
                href="https://pedido.anota.ai/loja/dog-da-vila2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.lojaButton }}
                onMouseOver={efeitoHover}
                onMouseOut={(e) => efeitoUnhover(e, "lojaButton")}
              >
                Dog da Vila - Jd. Independência
              </a>
              <a
                href="https://pedido.anota.ai/loja/fabuloso-dog-da-vila-hot-dog-burguers"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...styles.button, ...styles.lojaButton }}
                onMouseOver={efeitoHover}
                onMouseOut={(e) => efeitoUnhover(e, "lojaButton")}
              >
                Dog da Vila - Un. Caieiras
              </a>
            </div>

            <button
              style={{
                ...styles.backButton,
                ...(hoverBack ? styles.backButtonHover : {}),
              }}
              onMouseEnter={() => setHoverBack(true)}
              onMouseLeave={() => setHoverBack(false)}
              onClick={() => setTela("inicio")}
            >
              ← Voltar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
