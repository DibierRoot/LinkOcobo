import { useState } from 'react';
import { profileData, links, socialLinks } from './data/profile';
import Icon from './components/Icon';
import './index.css';

const concerts = [
  // { id: 1, date: "15/04/2026", city: "Bogotá", venue: "Club La Casa", ticketUrl: "#" }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConcertsClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div 
      className="min-h-screen flex justify-center px-5 py-10 bg-[url('/public/FondoEstrellado.png')]"
    >
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="text-center animate-[fadeIn_0.6s_ease-out]">
          <img 
            src="/Foto.jpg"
            alt={profileData.name} 
            className="w-28 h-28 rounded-full border-4 mx-auto mb-4 object-cover"
            style={{ borderColor: profileData.buttonColor, boxShadow: '0 4px 20px rgba(233, 69, 96, 0.3)' }}
          />
          <h1 className="text-2xl font-bold text-white mb-1">{profileData.name}</h1>
          <p className="text-sm font-medium mb-2" style={{ color: profileData.buttonColor }}>{profileData.username}</p>
          <p className="text-sm text-gray-400 max-w-[320px]">{profileData.bio}</p>
        </div>

        <div className="w-full flex flex-col gap-3">
          {links.map((link, index) => (
            link.id === 5 ? (
              <button
                key={link.id}
                onClick={handleConcertsClick}
                className="flex items-center gap-3 px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-RosadoOcobo"
                style={{ 
                  color: profileData.buttonTextColor,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  animationDelay: `${0.1 + index * 0.05}s`
                }}
              >
                <Icon name={link.icon} />
                <span>{link.title}</span>
              </button>
            ) : (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-RosadoOcobo"
                style={{ 
                  color: profileData.buttonTextColor,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                  animationDelay: `${0.1 + index * 0.05}s`
                }}
              >
                <Icon name={link.icon} />
                <span>{link.title}</span>
              </a>
            )
          ))}
        </div>

        <div className="flex gap-5 mt-4 animate-[fadeIn_0.6s_ease-out_0.4s_backwards]">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 p-2"
            >
              <Icon name={social.platform} size={28} />
            </a>
          ))}
        </div>

        <footer className="mt-6 text-xs text-gray-400 animate-[fadeIn_0.6s_ease-out_0.5s_backwards]">
          <p>© 2026 {profileData.name}</p>
        </footer>

        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">🎟️ Próximos Conciertos</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="space-y-4">
                {concerts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-4xl mb-4">🎸</p>
                    <p className="text-white text-lg font-medium">¡Hasta ahora no hay conciertos nené!</p>
                    <p className="text-gray-400 mt-2">Pendiente a nuestras redes 🔔</p>
                  </div>
                ) : (
                  concerts.map((concert) => (
                    <div 
                      key={concert.id}
                      className="bg-gray-800 rounded-xl p-4 flex justify-between items-center hover:bg-gray-700 transition-colors"
                    >
                      <div>
                        <p className="text-pink-400 font-semibold">{concert.date}</p>
                        <p className="text-white font-medium">{concert.city}</p>
                        <p className="text-gray-400 text-sm">{concert.venue}</p>
                      </div>
                      <a
                        href={concert.ticketUrl}
                        className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Tickets
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;