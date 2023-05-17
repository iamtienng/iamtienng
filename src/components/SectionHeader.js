import Head from "next/head";

const SectionHeader = ({ title, favIconUrl }) => {
  return (
    <Head>
      <title>I am Tien Nguyen</title>
      <meta name="description" content="iamtienng's corner" />
      <link rel="icon" href={favIconUrl} />
    </Head>
  );
};

export default SectionHeader;
