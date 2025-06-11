import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const InvestmentSection = () => {
  const videoFiles = [
    '/videos/dogvideo.mp4'
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  
  const videoRef = useRef(null);
  const [videoAspectRatio, setVideoAspectRatio] = useState(16 / 9);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoFiles.length);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleMetadata = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      setVideoAspectRatio(videoWidth / videoHeight);
    }
  };

  return (
    <section id="investimento" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-500">
          Investimento
        </h2>

        {/* 1. O CARD PRINCIPAL AGORA É UM FLEX CONTAINER NO PC (md:flex) */}
        {/* A largura máxima foi aumentada para 5xl para comportar as duas colunas */}
        <div className="bg-black/70 p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-5xl mx-auto md:flex md:items-center md:gap-8">
          
          {/* 2. COLUNA DO VÍDEO (metade da largura no PC) */}
          <div className="md:w-1/2">
            <div 
              className="relative w-full rounded-lg overflow-hidden bg-black"
              style={{ aspectRatio: videoAspectRatio }}
            >
              <video
                ref={videoRef}
                onLoadedMetadata={handleMetadata}
                key={videoFiles[currentVideoIndex]}
                className="w-full h-full object-contain"
                src={videoFiles[currentVideoIndex]}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onEnded={handleVideoEnded}
              >
                Seu navegador não suporta a tag de vídeo.
              </video>

              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          
          {/* 3. COLUNA DO TEXTO (outra metade da largura no PC) */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Loja Física:</h3>
            <p className="text-gray-300">
              Mergulhe na experiência completa Dog da Vila com a nossa loja física. Um espaço vibrante e acolhedor, projetado para encantar seus clientes e reforçar a identidade da marca. Ofereça um cardápio extenso, crie laços com a comunidade local e construa um negócio sólido e duradouro com nosso suporte especializado em cada etapa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;