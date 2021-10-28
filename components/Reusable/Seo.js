import Head from "next/head";

const Seo = ({ title }) => {
  return (
    <Head>
      <title>
        {`Frontend Mentor | Space tourism website ${title && title}`}
      </title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
  );
};

export default Seo;
