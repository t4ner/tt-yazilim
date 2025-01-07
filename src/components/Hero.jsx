import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, lazy, Suspense, memo } from "react";
import OptimizedImage from "./OptimizedImage";

const Generating = lazy(() => import("./Generating"));
const Notification = lazy(() => import("./Notification"));
const CompanyLogos = lazy(() => import("./CompanyLogos"));

const Hero = memo(() => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
      role="banner"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6" tabIndex="0">
            Hızlı. Şık. Güvenilir. <br />
            <span className="sr-only">
              TT Yazılım - Web Tasarım ve Yazılım Ajansı
            </span>
          </h1>
          <p className="body-1 mt-10 md:mt-0 text-base max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 md:text-xl font-mont tracking-wide">
            Profesyonel ekibimizle, markanızı bir adım öne çıkaracak yaratıcı ve
            etkili web siteleri tasarlıyoruz. Tanışmak için bizimle iletişime
            geçebilirsin.
          </p>
          <Button
            white
            href="https://wa.me/905393239896"
            aria-label="Bizimle iletişime geçin"
            role="button"
          >
            BİZE ULAŞIN
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <OptimizedImage
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="TT Yazılım Web Tasarım ve Yazılım Hizmetleri"
                  loading="eager"
                />

                <Suspense fallback={<div className="loading-placeholder" />}>
                  <Generating />
                </Suspense>

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <Suspense fallback={null}>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex tracking-tagline"
                    title="TT YAZILIM"
                  />
                </Suspense>
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>

        <Suspense fallback={null}>
          <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        </Suspense>
      </div>

      <BottomLine />
    </Section>
  );
});

Hero.displayName = "Hero";
export default Hero;
