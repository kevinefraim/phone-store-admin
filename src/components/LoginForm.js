import ErrorForm from "./ErrorForm";

const LoginForm = ({
  children,
  error,
  email,
  pass,
  handleLog,
  setEmail,
  setPass,
}) => {
  return (
    <form onSubmit={handleLog} className="bg-blue-primary p-5 w-[40%] rounded ">
      <div className="title flex flex-col items-center">
        <h2 className=" bg-white text-blue-primary text-center pb-0.5 inline-block w-1/4 rounded">
          Inicia Sesión
        </h2>
        {error && typeof error?.response.data?.msg === "string" && (
          <ErrorForm error={error?.response.data?.msg} />
        )}
      </div>
      <div className="flex flex-col m-2">
        <label className="text-white mb-1" htmlFor="email">
          Email de Usuario
        </label>
        <input
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          type="text"
          name="email"
          placeholder="Ingrese su email"
          className="p-1 rounded"
        />
        {error?.response.data?.msg.email && (
          <ErrorForm error={error?.response.data?.msg.email[0]} />
        )}
      </div>
      <div className="flex flex-col m-2">
        <label className="text-white mb-1" htmlFor="password">
          Contraseña
        </label>
        <input
          onChange={({ target }) => setPass(target.value)}
          value={pass}
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          min={0}
          className="p-1 rounded"
        />
        {error?.response.data?.msg.password && (
          <ErrorForm error={error?.response.data?.msg.password[0]} />
        )}
      </div>
      {children}
      <div className="flex justify-center">
        <button
          className="w-1/4 p-1  mt-2 bg-white text-blue-primary rounded"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
