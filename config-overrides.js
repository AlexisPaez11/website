const { override, addWebpackModuleRule } = require("customize-cra");

// module.exports = override(
//   addWebpackModuleRule({
//     test: /\.mdx?$/,
//     use: [
//       {
//         loader: "@mdx-js/loader",
//         options: {
//           remarkPlugins: [require("remark-gfm"), require("remark-directive")],
//           rehypePlugins: [require("rehype-attr")]
//         }
//       }
//     ]
//   })
// );

// Definir los plugins requeridos, asegurando que obtenemos la función correcta (default export)
const remarkGfm = require("remark-gfm");
const remarkDirective = require("remark-directive");
const remarkFrontmatter = require("remark-frontmatter");
const remarkMdxFrontmatter = require("remark-mdx-frontmatter");

// Función de ayuda para manejar los CommonJS (require) vs. ES Module (.default)
const getPlugin = (module) => (module && module.default) ? module.default : module;


module.exports = override(
  addWebpackModuleRule({
    test: /\.mdx?$/,
    use: [
      {
        loader: "@mdx-js/loader",
        options: {
          remarkPlugins: [
            // Usar la función de ayuda para asegurar que estamos pasando la función del plugin
            getPlugin(remarkGfm), 
            getPlugin(remarkDirective),
            
            // 1. Frontmatter con la opción 'yaml', asegurando que obtenemos la función
            [getPlugin(remarkFrontmatter), ['yaml']], 
            
            // 2. MdxFrontmatter, asegurando que obtenemos la función
            getPlugin(remarkMdxFrontmatter),
          ],
          // Probablemente rehype-attr también necesite esto, vamos a verificar.
          rehypePlugins: [getPlugin(require("rehype-attr"))] 
        }
      }
    ]
  })
);