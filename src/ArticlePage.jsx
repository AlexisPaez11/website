// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { MDXProvider } from "@mdx-js/react";
// import Back from "./components/article/Back";

// const components = {
//   div: (props) => <div {...props} />, // No es necesario hacer la verificación manualmente
// };

// const ArticlePage = () => {
//   const { articleSlug } = useParams();
//   const [MDXContent, setMDXContent] = useState(null);

//   useEffect(() => {
//     import(`./articles/${articleSlug}.mdx`)
//       .then((module) => setMDXContent(() => module.default))
//       .catch(() => setMDXContent(null)); // Manejar errores simplemente con null
//   }, [articleSlug]);

//   if (!MDXContent) return;

//   return (
//     <section className="article-section">
//       <div className="article-container">
//         <Back />
//         <MDXProvider components={components} key={articleSlug}>
//           <MDXContent />
//         </MDXProvider>
//       </div>
//     </section>
//   );
// };

// export default ArticlePage;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { Helmet } from "react-helmet-async"; 
import Back from "./components/article/Back";

// URL base de tu sitio, la necesitamos para convertir rutas relativas en absolutas
const SITE_BASE_URL = "https://www.alexispaez.dev";
const SITE_NAME = "Alexis Paez | Frontend Developer"; 

const components = {
  div: (props) => <div {...props} />,
};

const ArticlePage = () => {
  const { articleSlug } = useParams();
  const [MDXContent, setMDXContent] = useState(null);
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    import(`./articles/${articleSlug}.mdx`)
      .then((module) => {
        const { default: MDXComponent, frontmatter } = module;
        
        setMDXContent(() => MDXComponent);
        setMetadata(frontmatter || {});
      })
      .catch((error) => {
        console.error("Error al cargar el artículo MDX:", error);
        setMDXContent(null);
        setMetadata({});
      });
  }, [articleSlug]);

  if (!MDXContent) {
    return <div>Cargando o artículo no encontrado...</div>;
  }

  // Variables calculadas
  const absoluteImageUrl = metadata.image ? `${SITE_BASE_URL}${metadata.image}` : null;
  const articleAuthor = "Alexis Paez"; 
  // Detectamos si el artículo tiene datos de producto (Product)
  const isProductReview = !!metadata.product && !!metadata.price;

  return (
    <section className="article-section">
      <Helmet>
        {/* Metadatos SEO ESENCIALES */}
        <title>{metadata.title || 'Título por Defecto'}</title>
        <meta name="description" content={metadata.description || 'Descripción por defecto de mi sitio web'} />
        {metadata.keywords && <meta name="keywords" content={metadata.keywords} />}

        {/* URL CANÓNICA (Muy importante) */}
        {metadata.canonical && <link rel="canonical" href={metadata.canonical} />}

        {/* ETIQUETAS OPEN GRAPH (Redes Sociales) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        {metadata.canonical && <meta property="og:url" content={metadata.canonical} />}
        {absoluteImageUrl && <meta property="og:image" content={absoluteImageUrl} />}
        <meta property="og:site_name" content={SITE_NAME} />

        {/* ETIQUETAS TWITTER CARDS */}
        <meta name="twitter:card" content="summary_large_image" />
        {metadata.image && <meta name="twitter:image" content={absoluteImageUrl} />}
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        

        {/* 🚀 DATOS ESTRUCTURADOS (Schema Markup) - USANDO JSON.STRINGIFY */}
        {metadata.title && metadata.description && metadata.datePublished && metadata.canonical && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              
              "headline": metadata.title,
              "description": metadata.description,
              "image": absoluteImageUrl || undefined, 
              "datePublished": metadata.datePublished,
              "dateModified": metadata.datePublished, 
              "author": {
                "@type": "Person",
                "name": articleAuthor
              },
              "publisher": {
                "@type": "Organization",
                "name": SITE_NAME,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${SITE_BASE_URL}/logo192.png` 
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": metadata.canonical
              },
              
              // INYECCIÓN CONDICIONAL DE PROPIEDADES DE PRODUCTO/RESEÑA
              ...(isProductReview ? {
                "itemReviewed": {
                  "@type": "Product",
                  "name": metadata.product,
                  "image": absoluteImageUrl || undefined,
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": metadata.priceCurrency || "USD",
                    "price": metadata.price || "0",
                    "availability": "https://schema.org/InStock" 
                  },
                  "brand": {
                    "@type": "Brand",
                    "name": "Apple" 
                  }
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5" 
                }
              } : {})
            })}
          </script>
        )}
      </Helmet>
      {/* Fin de la Sección de Metadatos */}

      <div className="article-container">
        <Back />
        <MDXProvider components={components} key={articleSlug}>
          <MDXContent />
        </MDXProvider>
      </div>
    </section>
  );
};

export default ArticlePage;