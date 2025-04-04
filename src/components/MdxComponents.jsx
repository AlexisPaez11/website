const ImgWithClass = ({ className = "", ...props }) => (
  <img {...props} className={`default-img-class ${className}`} loading="lazy" />
);

const components = {
  img: ImgWithClass,
};

export default components;