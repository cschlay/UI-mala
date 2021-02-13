import "tailwindcss/tailwind.css";

/**
 * Wraps each page inside.
 *
 * @param {*} param0
 */
const CustomApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
