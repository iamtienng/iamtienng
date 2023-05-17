import Head from "next/head";

const SectionHeader = ({ title, favIconUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="iamtienng's corner" />
      <link rel="icon" href={favIconUrl} />
    </Head>
  );
};

export default SectionHeader;
