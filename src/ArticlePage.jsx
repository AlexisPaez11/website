import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import Back from "./components/article/Back";

const components = {
  div: (props) => <div {...props} />, // No es necesario hacer la verificación manualmente
};

const ArticlePage = () => {
  const { articleSlug } = useParams();
  const [MDXContent, setMDXContent] = useState(null);

  useEffect(() => {
    import(`./articles/${articleSlug}.mdx`)
      .then((module) => setMDXContent(() => module.default))
      .catch(() => setMDXContent(null)); // Manejar errores simplemente con null
  }, [articleSlug]);

  if (!MDXContent) return;

  return (
    <section className="article-section">
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



