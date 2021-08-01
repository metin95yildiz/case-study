import { Provider } from "react-redux";
import Head from "next/head";
import { useStore } from "../store";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Head>
          <title>Umbrella Group</title>
          <meta name="description" content="Our business is life itself" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
