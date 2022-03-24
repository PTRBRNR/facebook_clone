import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );

  function Auth({ children }) {
    const { data: session, status } = useSession({ required: true });
    const isUser = session?.isUser;
    if (isUser) {
      return children;
    }
  }
}

export default MyApp;
