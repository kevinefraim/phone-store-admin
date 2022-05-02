const ErrorForm = ({ error }) => {
  return (
    <>
      <h6 className="text-white text-center bg-red-500 p-1 mt-1 rounded">
        {error}
      </h6>
    </>
  );
};

export default ErrorForm;
