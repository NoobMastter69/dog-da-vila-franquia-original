import React, { useState } from "react";

// Estilos otimizados para responsividade 📱
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
    padding: "15px", // Adicionado para garantir margem em telas muito pequenas
  },
  container: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    // NOVO: Padding adaptável
    padding: "clamp(30px, 8vw, 50px) clamp(20px, 6vw, 40px)",
    textAlign: "center",
    boxShadow: "0 0 25px rgba(0,0,0,0.4)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.2)",
    width: "100%", // Alterado de 90% para 100% (o padding no overlay controla a margem)
    maxWidth: "480px",
    boxSizing: "border-box", // Garante que o padding não aumente a largura total
  },
  title: {
    // NOVO: Fonte responsiva com clamp(MIN, IDEAL, MAX)
    fontSize: "clamp(1.8rem, 7vw, 2.5rem)",
    color: "#ff8c00",
    fontWeight: "bold",
    marginBottom: "10px",
    letterSpacing: "1px",
  },
  subtitle: {
    // NOVO: Fonte responsiva
    fontSize: "clamp(1rem, 4vw, 1.2rem)",
    color: "#eee",
    marginBottom: "40px",
  },
  button: {
    display: "block",
    padding: "16px 24px",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "clamp(1rem, 4vw, 1.1rem)", // NOVO: Fonte responsiva
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
  const [tela, setTela] = useState<"inicio" | "lojas">("inicio");
  
  // NOVO: Estados de hover individuais para cada botão
  const [hoverOrder, setHoverOrder] = useState(false);
  const [hoverFranchise, setHoverFranchise] = useState(false);
  const [hoverLoja1, setHoverLoja1] = useState(false);
  const [hoverLoja2, setHoverLoja2] = useState(false);
  const [hoverLoja3, setHoverLoja3] = useState(false);
  const [hoverBack, setHoverBack] = useState(false);

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        {tela === "inicio" && (
          <>
            <h1 style={styles.title}>Seja bem-vindo!</h1>
            <p style={styles.subtitle}>O que você deseja fazer?</p>
            <div style={styles.options}>
              <button
                onClick={() => setTela("lojas")}
                style={{
                  ...styles.button,
                  ...styles.orderButton,
                  ...(hoverOrder ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setHoverOrder(true)}
                onMouseLeave={() => setHoverOrder(false)}
              >
                Fazer um Pedido
              </button>

              <button
                onClick={onFranchiseClick}
                style={{
                  ...styles.button,
                  ...styles.franchiseButton,
                  ...(hoverFranchise ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setHoverFranchise(true)}
                onMouseLeave={() => setHoverFranchise(false)}
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
                style={{
                  ...styles.button,
                  ...styles.lojaButton,
                  ...(hoverLoja1 ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setHoverLoja1(true)}
                onMouseLeave={() => setHoverLoja1(false)}
              >
                Dog da Vila - Jd. Rosana
              </a>
              <a
                href="https://pedido.anota.ai/loja/dog-da-vila2"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.button,
                  ...styles.lojaButton,
                  ...(hoverLoja2 ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setHoverLoja2(true)}
                onMouseLeave={() => setHoverLoja2(false)}
              >
                Dog da Vila - Jd. Independência
              </a>
              <a
                href="https://pedido.anota.ai/loja/fabuloso-dog-da-vila-hot-dog-burguers"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.button,
                  ...styles.lojaButton,
                  ...(hoverLoja3 ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setHoverLoja3(true)}
                onMouseLeave={() => setHoverLoja3(false)}
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