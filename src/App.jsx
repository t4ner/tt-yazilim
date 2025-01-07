import { lazy, Suspense, memo, useEffect } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Daha küçük chunk'lar için route-based code splitting
const Benefits = lazy(() =>
  import("./components/Benefits" /* webpackChunkName: "benefits" */)
);
const Collaboration = lazy(() =>
  import("./components/Collaboration" /* webpackChunkName: "collaboration" */)
);
const Pricing = lazy(() =>
  import("./components/Pricing" /* webpackChunkName: "pricing" */)
);
const Roadmap = lazy(() =>
  import("./components/Roadmap" /* webpackChunkName: "roadmap" */)
);

// Performanslı loading component
const LoadingFallback = memo(() => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="loading-spinner" />
  </div>
));

// Route bazlı component yükleme
const RouteBasedSuspense = memo(({ children }) => (
  <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
));

const App = memo(() => {
  useEffect(() => {
    // Loading ekranını kaldır
    const loadingScreen = document.getElementById("loading");
    if (loadingScreen) {
      // Yumuşak bir geçiş için fade-out efekti
      loadingScreen.style.transition = "opacity 0.5s";
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 500);
    }
  }, []);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <RouteBasedSuspense>
            <Benefits />
            <Collaboration />
            <Pricing />
            <Roadmap />
          </RouteBasedSuspense>
        </main>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
});

App.displayName = "App";
export default App;
