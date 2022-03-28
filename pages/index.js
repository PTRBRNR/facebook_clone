import { useSession, getSession } from "next-auth/react";
import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

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
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // get the user
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
