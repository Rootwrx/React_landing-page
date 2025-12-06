import Button from "./Button";

const ButtonGroup = () => {
  return (
    <div className="flex gap-5  justify-center items-center mx-auto max-w-[600px] mt-10">
      <Button variant="primary">start building</Button>
      <Button variant="secondary">schedule a demo</Button>
    </div>
  );
};

export default ButtonGroup;
