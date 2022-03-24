import { useSession, getSession } from "next-auth/react";
import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

// {styles.container}

export default function Home() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {},
  });

  if (status === "loading") {
    return <Login />;
  }

  return (
    <div className="h-screen bg-slate-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* HEADER */}
      <Header />

      <main className="flex">
        <Sidebar />

        <Feed />
        {/*widgets*/}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
