import React, { useState } from "react";
import { ShoppingBag, Store, ArrowLeft, MapPin } from "lucide-react";

const overlay: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  zIndex: 1000,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  padding: "0",
};

const container: React.CSSProperties = {
  background: "rgba(15, 15, 15, 0.90)",
  borderRadius: "24px 24px 0 0",
  padding: "28px 24px 40px",
  textAlign: "center",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderBottom: "none",
  boxShadow: "0 -8px 32px rgba(0,0,0,0.5)",
  width: "100%",
  maxWidth: "540px",
  minHeight: "70vh",
  margin: "0 auto",
  boxSizing: "border-box",
  fontFamily: "'Inter', 'Poppins', system-ui, sans-serif",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const title: React.CSSProperties = {
  fontSize: "clamp(1.6rem, 6vw, 2.2rem)",
  color: "#ff8c00",
  fontWeight: 700,
  marginBottom: "8px",
  letterSpacing: "-0.3px",
  lineHeight: 1.2,
};

const subtitle: React.CSSProperties = {
  fontSize: "clamp(0.9rem, 3.5vw, 1rem)",
  color: "rgba(220,220,220,0.8)",
  marginBottom: "20px",
  fontWeight: 400,
};

const options: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const baseBtn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "15px 24px",
  color: "#fff",
  border: "none",
  borderRadius: "14px",
  fontSize: "clamp(0.95rem, 3.5vw, 1.05rem)",
  fontWeight: 600,
  cursor: "pointer",
  textDecoration: "none",
  transition: "transform 0.18s ease, filter 0.18s ease",
  width: "100%",
  textAlign: "center",
  letterSpacing: "0.2px",
};

const orderBtn: React.CSSProperties = {
  background: "linear-gradient(135deg, #ff9500, #e65c00)",
  boxShadow: "0 4px 14px rgba(230,92,0,0.35)",
};

const franchiseBtn: React.CSSProperties = {
  background: "linear-gradient(135deg, #1c1c1e, #2c2c2e)",
  border: "1px solid rgba(255,255,255,0.1)",
  boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
};

const lojaBtn: React.CSSProperties = {
  background: "linear-gradient(135deg, #222, #3a3a3a)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
};

const backBtn: React.CSSProperties = {
  marginTop: "24px",
  background: "transparent",
  border: "1.5px solid rgba(255,140,0,0.6)",
  color: "#ff8c00",
  fontWeight: 600,
  borderRadius: "12px",
  padding: "11px 24px",
  cursor: "pointer",
  transition: "background 0.2s ease, border-color 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  width: "100%",
  fontSize: "0.95rem",
};

const hoverStyle: React.CSSProperties = {
  transform: "translateY(-2px)",
  filter: "brightness(1.1)",
};

const backHoverStyle: React.CSSProperties = {
  background: "rgba(255,140,0,0.15)",
  borderColor: "#ff8c00",
};

interface TelaDeEscolhaProps {
  onFranchiseClick: () => void;
}

export function TelaDeEscolha({ onFranchiseClick }: TelaDeEscolhaProps) {
  const [tela, setTela] = useState<"inicio" | "lojas">("inicio");
  const [hoverOrder, setHoverOrder] = useState(false);
  const [hoverFranchise, setHoverFranchise] = useState(false);
  const [hoverLoja1, setHoverLoja1] = useState(false);
  const [hoverLoja2, setHoverLoja2] = useState(false);
  const [hoverLoja3, setHoverLoja3] = useState(false);
  const [hoverBack, setHoverBack] = useState(false);

  return (
    <div style={overlay}>
      <div style={container}>
        {/* handle */}
        <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)", margin: "0 auto 20px" }} />

        {/* logo */}
        <img src="/images/logo2.PNG" alt="Dog da Vila" style={{ width: 80, height: "auto", margin: "0 auto 16px", display: "block", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }} />

        {tela === "inicio" && (
          <>
            <h1 style={title}>Seja bem-vindo!</h1>
            <p style={subtitle}>O que você deseja fazer?</p>
            <div style={options}>
              <button
                onClick={() => setTela("lojas")}
                style={{ ...baseBtn, ...orderBtn, ...(hoverOrder ? hoverStyle : {}) }}
                onMouseEnter={() => setHoverOrder(true)}
                onMouseLeave={() => setHoverOrder(false)}
              >
                <ShoppingBag size={20} />
                Fazer um Pedido
              </button>

              <button
                onClick={onFranchiseClick}
                style={{ ...baseBtn, ...franchiseBtn, ...(hoverFranchise ? hoverStyle : {}) }}
                onMouseEnter={() => setHoverFranchise(true)}
                onMouseLeave={() => setHoverFranchise(false)}
              >
                <Store size={20} />
                Quero ser um Franqueado
              </button>
            </div>
          </>
        )}

        {tela === "lojas" && (
          <>
            <h1 style={title}>Qual unidade você prefere?</h1>
            <p style={subtitle}>Escolha a mais próxima de você.</p>

            <div style={options}>
              <a
                href="https://pedido.anota.ai/loja/dogdavilaooriginal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...baseBtn, ...lojaBtn, ...(hoverLoja1 ? hoverStyle : {}) }}
                onMouseEnter={() => setHoverLoja1(true)}
                onMouseLeave={() => setHoverLoja1(false)}
              >
                <MapPin size={18} />
                Jd. Rosana
              </a>
              <a
                href="https://pedido.anota.ai/loja/dog-da-vila2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...baseBtn, ...lojaBtn, ...(hoverLoja2 ? hoverStyle : {}) }}
                onMouseEnter={() => setHoverLoja2(true)}
                onMouseLeave={() => setHoverLoja2(false)}
              >
                <MapPin size={18} />
                Jd. Independência
              </a>
              <a
                href="https://pedido.anota.ai/loja/fabuloso-dog-da-vila-hot-dog-burguers"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...baseBtn, ...lojaBtn, ...(hoverLoja3 ? hoverStyle : {}) }}
                onMouseEnter={() => setHoverLoja3(true)}
                onMouseLeave={() => setHoverLoja3(false)}
              >
                <MapPin size={18} />
                Un. Caieiras
              </a>
            </div>

            <button
              style={{ ...backBtn, ...(hoverBack ? backHoverStyle : {}) }}
              onMouseEnter={() => setHoverBack(true)}
              onMouseLeave={() => setHoverBack(false)}
              onClick={() => setTela("inicio")}
            >
              <ArrowLeft size={16} />
              Voltar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
