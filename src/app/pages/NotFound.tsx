import { useState, useEffect } from 'react';

const Page404 = () => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [clickCount, setClickCount] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonPositions, setButtonPositions] = useState<Array<{x: number, y: number}>>([]);

  const trollMessages = [
    "Hé ! Cette page n'existe pas, comme tes compétences en navigation !",
    "404... comme le nombre de fois où tu t'es perdu aujourd'hui !",
    "Tu cherches quoi exactement ? Ta dignité ? Elle n'est pas ici non plus !",
    "Oups ! Page introuvable. As-tu essayé de l'éteindre et de le rallumer ?",
    "Félicitations ! Tu as découvert le néant numérique !",
    "Cette page est partie en vacances. Contrairement à toi, visiblement.",
    "Error 404: Talent not found.",
    "Tu as réussi à casser mon site. Bravo champion !",
    "Si tu cliques encore une fois, je lance une boucle infinie !",
    "Sérieusement ? Tu continues à cliquer ? Tu n'as rien de mieux à faire ?",
  ];

  const runAway = () => {
    setPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    });
    setRotation(Math.random() * 360);
    setScale(0.8 + Math.random() * 0.4);
    setClickCount(clickCount + 1);
    
    if (clickCount < trollMessages.length) {
      setMessages([...messages, trollMessages[clickCount]]);
      // Ajoute une position aléatoire pour le nouveau bouton
      setButtonPositions([...buttonPositions, {
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10
      }]);
    } else {
      setMessages([...messages, "Ok tu m'as eu... Retourne à l'accueil maintenant !"]);
      setButtonPositions([...buttonPositions, { x: 50, y: 50 }]);
    }
    
    if (clickCount === 7) {
      setIsRunning(true);
    }
  };

  const handleButtonHover = (index: number) => {
    if (Math.random() > 0.3 || clickCount > 15) return; // 70% de chance de fuir, sauf après 15 clics
    
    const newPositions = [...buttonPositions];
    newPositions[index] = {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    };
    setButtonPositions(newPositions);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setRotation(prev => prev + 5);
        setScale(prev => (prev > 1.5 ? 0.8 : prev + 0.01));
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden p-4 relative">
      {/* Éléments de fond qui bougent */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-6xl opacity-10 text-purple-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`
            }}
          >
            404
          </div>
        ))}
      </div>
      
      {/* Titre qui bouge */}
      <div 
        className="text-8xl font-bold mb-8 cursor-pointer select-none relative z-10"
        style={{
          transform: `rotate(${rotation}deg) scale(${scale})`,
          left: `calc(${position.x}% - 50%)`,
          top: `calc(${position.y}% - 50%)`,
          position: 'absolute',
          transition: 'transform 0.3s ease, left 0.5s ease, top 0.5s ease',
          textShadow: '0 0 10px #ff00ff, 0 0 20px #00ffff',
          color: isRunning ? '#ff00ff' : 'white'
        }}
        onClick={runAway}
      >
        404
      </div>
      
      {/* Messages troll avec boutons */}
      <div className="mt-64 w-full max-w-2xl">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className="mb-8 p-3 bg-gray-800 rounded-lg text-lg animate-bounce-in relative"
            style={{
              animationDelay: `${index * 0.1}s`,
              opacity: isRunning ? Math.random() * 0.5 + 0.5 : 1
            }}
          >
            <p className="mb-4">{message}</p>
            
            {/* Bouton troll qui fuit */}
            <a 
              href="/"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-bold transition-all hover:scale-105 absolute"
              style={{
                left: `${buttonPositions[index]?.x || 50}%`,
                transform: 'translateX(-50%)',
                transition: 'left 0.3s ease, top 0.3s ease, background-color 0.2s ease',
                animation: isRunning ? 'pulse 1s infinite' : 'none'
              }}
              onMouseEnter={() => handleButtonHover(index)}
            >
              Allez clique pour retourner à l'accueil
            </a>
          </div>
        ))}
      </div>
      
      {/* Bouton de retour à l'accueil */}
      {clickCount > 10 && (
        <a 
          href="/"
          className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-bold transition-all hover:scale-105 relative z-20"
          style={{
            animation: isRunning ? 'pulse 1s infinite' : 'none'
          }}
        >
          STOP ! Retour RÉEL à l'accueil
        </a>
      )}
      
     
    </div>
  );
};

export default Page404;