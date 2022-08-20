import Experience from "../src/components/Exp/Experience";
const ExperiencePage = () => <Experience />;

export const getServerSideProps = async ({ req }) => {
  const theme = req.cookies.themeSwitch ?? "LIGHT";
  return {
    props: {
      theme
    } // will be passed to the page component as props
  };
};

export default ExperiencePage;
