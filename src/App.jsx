import { lazy, Suspense, memo } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy loading ile bileşenleri yükleme
const Benefits = lazy(() => import("./components/Benefits"));
const Collaboration = lazy(() => import("./components/Collaboration"));
const Pricing = lazy(() => import("./components/Pricing"));
const Roadmap = lazy(() => import("./components/Roadmap"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="loading-spinner" />
  </div>
);

const App = memo(() => {
  return (
    <>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TT Yazılım",
            "description": "Profesyonel web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri",
            "url": "https://ttyazilim.com.tr/",
            "logo": "https://ttyazilim.com.tr/logo.png",
            "image": "https://ttyazilim.com.tr/og-image.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-539-323-9896",
              "contactType": "customer service",
              "areaServed": "TR",
              "availableLanguage": "Turkish"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TR"
            },
            "sameAs": [
              "https://instagram.com/tt_yazilim",
              "https://facebook.com/ttyazilim",
              "https://linkedin.com/company/ttyazilim"
            ]
          }
        `}
      </script>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <Benefits />
            <Collaboration />
            <Pricing />
            <Roadmap />
          </Suspense>
        </main>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
});

App.displayName = "App";
export default App;
