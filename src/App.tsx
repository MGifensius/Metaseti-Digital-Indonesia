import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { lazy, Suspense, Component, ReactNode } from 'react';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import PageTransitionOverlay from './components/PageTransitionOverlay';

// Lazy-load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const AiIntegration = lazy(() => import('./pages/AiIntegration'));
const CustomDevelopment = lazy(() => import('./pages/CustomDevelopment'));
const BrandingMarketing = lazy(() => import('./pages/BrandingMarketing'));
const Procurement = lazy(() => import('./pages/Procurement'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Error Boundary Component
class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#000',
          color: '#fff',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: 'sans-serif'
        }}>
          <div style={{ maxWidth: '600px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>⚠️ Error</h1>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
              Something went wrong loading the application.
            </p>
            <pre style={{
              background: '#222',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'left',
              overflow: 'auto',
              fontSize: '14px'
            }}>
              {this.state.error?.message || 'Unknown error'}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: '20px',
                padding: '12px 24px',
                background: '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// AnimatedRoutes component to handle page transitions
function AnimatedRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services/ai-integration" element={<AiIntegration />} />
        <Route path="/services/custom-development" element={<CustomDevelopment />} />
        <Route path="/services/branding-marketing" element={<BrandingMarketing />} />
        <Route path="/services/procurement" element={<Procurement />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <LanguageProvider>
          <SmoothScroll>
            <ScrollToTop />
            <PageTransitionOverlay />
            <AnimatedRoutes />
          </SmoothScroll>
        </LanguageProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
