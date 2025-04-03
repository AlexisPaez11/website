import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props) => <h1 className="custom-title" {...props} />,
  p: (props) => <p className="custom-paragraph" {...props} />,
};

export default function MDXLayout({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}