import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "TT Yazılım - Profesyonel Web Tasarım ve Yazılım Ajansı",
  description = "Modern, hızlı ve kullanıcı dostu web siteleri geliştiriyoruz.",
  canonical = "https://ttyazilim.com.tr/",
  image = "https://ttyazilim.com.tr/og-image.jpg",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "${title}",
            "description": "${description}",
            "url": "${canonical}"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
