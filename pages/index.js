import Head from "next/head";

import Header from "../components/Header";

// {styles.container}

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* HEADER */}
      <Header />

      <main>
        {/*sidebar*/}
        {/*feed*/}
        {/*widgets*/}
      </main>
    </div>
  );
}
