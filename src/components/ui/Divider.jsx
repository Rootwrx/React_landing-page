import Container from "./Container";

const Divider = () => {
  return (
    <Container
      className="my-4 h-px block w-full  bg-linear-to-r from-transparent via-primary-900/50 to-transparent"
      role="separator"
    />
  );
};

export default Divider;
