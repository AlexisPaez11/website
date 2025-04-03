import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "./components/article/Back";

const ArticlePage = () => {
  const { articleSlug } = useParams();
  const [MDXContent, setMDXContent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    import(`./articles/${articleSlug}.mdx`)
      .then(module => setMDXContent(() => module.default))
      .catch(() => setError("No se pudo cargar el artículo."));
  }, [articleSlug]);

  if (error) return <p>{error}</p>;
  if (!MDXContent) return <p>Cargando...</p>;

  return (
    <section className="article-section">
      <div className="article-container">
        <Back />
        <MDXContent />
      </div>
    </section>
  );
};

export default ArticlePage;