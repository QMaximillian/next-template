import Head from "next/head";

export default function Home() {
  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      <Head>
        <title>Next Template Repo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={
          "border-2 border-black h-full w-full flex flex-col justify-center items-center"
        }
      >
        <div className="font-bold text-4xl">
          Welcome to my Next Template Repo
        </div>
        <div className="font-semibold underline">Using:</div>
        <div>TailwindCSS</div>
      </main>
    </div>
  );
}
