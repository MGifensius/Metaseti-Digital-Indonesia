import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface LanguageSwitcherProps {
  compact?: boolean;
}

export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="inline-flex items-center bg-gray-100 rounded-full backdrop-blur-sm border border-gray-200"
      style={{ 
        padding: compact ? '3px' : '4px',
        gap: '2px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <button
        onClick={() => setLanguage('en')}
        className={`
          relative font-medium rounded-full transition-all duration-300
          ${language === 'en' 
            ? 'text-black' 
            : 'text-gray-500 hover:text-gray-700'
          }
        `}
        style={{
          padding: compact ? '4px 12px' : '7px 20px',
          fontSize: compact ? '11px' : '14px',
          lineHeight: 1.2,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {language === 'en' && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 bg-white rounded-full shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLanguage('id')}
        className={`
          relative font-medium rounded-full transition-all duration-300
          ${language === 'id' 
            ? 'text-black' 
            : 'text-gray-500 hover:text-gray-700'
          }
        `}
        style={{
          padding: compact ? '4px 12px' : '7px 20px',
          fontSize: compact ? '11px' : '14px',
          lineHeight: 1.2,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {language === 'id' && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 bg-white rounded-full shadow-sm"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">ID</span>
      </button>
    </div>
  );
}
