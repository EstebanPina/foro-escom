import DualPage from "../components/dualPage";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
const Login = () => {
  return (
    <DualPage image="LoginImage.png">
      <div className="text-center flex flex-col justify-center gap-6 w-1/2">
        <h1 className=" text-4xl font-bold text-blue-900">FOROESCOM</h1>
        <h2 className=" text-4xl font-light">INICIA SESIÓN</h2>
        <form className="flex flex-col justify-center  gap-4 px-6">
          <div className=" flex gap-2 rounded-3xl bg-gray-200 p-2">
            <PersonIcon />
            <input type="text" className="bg-transparent outline-none" placeholder="Boleta o correo" />
          </div>
          <div className="flex gap-2 rounded-3xl bg-gray-200 p-2 ">
            <LockIcon/>
            <input type="password" className="bg-transparent outline-none" placeholder="Contraseña" />

          </div>
          <div className="flex justify-center">
          <button className=" bg-gradient-to-r w-2/3 from-blue-400 to-blue-900 hover:p-4 duration-200 text-white font-bold text-xl">INGRESAR</button>
          </div>
        </form>
        <div className="my-8">
          <h4>¿No tienes cuenta?</h4>
          <a href="/registro" className=" border-b-2 border-indigo-700 text-indigo-700 cursor-pointer hover:text-lg duration-200">Registrate aquí</a>
        </div>
      </div>
    </DualPage>
  );
}

export default Login;