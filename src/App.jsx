import { profileData, links, socialLinks } from './data/profile';
import Icon from './components/Icon';
import './index.css';

function App() {
  return (
    <div 
      className="min-h-screen flex justify-center px-5 py-10 bg-[url('/src/assets/image/FondoEstrellado.png')]"
    >
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <div className="text-center animate-[fadeIn_0.6s_ease-out]">
          <img 
            src={profileData.avatar} 
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
      </div>
    </div>
  );
}

export default App;