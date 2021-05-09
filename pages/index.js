import Head from "next/head";
import requests from "../utils/request";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Result from "../components/Result";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Result results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return { props: { results: request.results } };
}
