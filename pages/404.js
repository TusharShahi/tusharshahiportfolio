const Custom404 = () => {
  return (
    <div className="Custom404Div">
      <h1>Page Not Found</h1>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const theme = req.cookies.themeSwitch ?? "LIGHT";
  return {
    props: {
      theme
    } // will be passed to the page component as props
  };
};

export default Custom404;
