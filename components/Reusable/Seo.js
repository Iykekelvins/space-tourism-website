import Head from "next/head";

const Seo = ({ title }) => {
  return (
    <Head>
      <title>
        {`Frontend Mentor | Space tourism website ${title && title}`}
      </title>
    </Head>
  );
};

export default Seo;
