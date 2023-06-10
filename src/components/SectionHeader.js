import Head from "next/head";

const SectionHeader = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="iamtienng's corner" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SectionHeader;
