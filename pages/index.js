const HomePage = () => {
  return <></>;
};

export const getServerSideProps = async ({ req }) => {
  const theme = req.cookies.themeSwitch ?? "LIGHT";
  return {
    props: {
      theme
    } // will be passed to the page component as props
  };
};

export default HomePage;
