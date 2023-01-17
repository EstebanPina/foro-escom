import DualPage from "../components/dualPage";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import SchoolIcon from '@mui/icons-material/School';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Login = () => {
  return (
    <DualPage image="RegistroImage.png">
      <div className="text-center flex flex-col justify-center gap-6 w-1/2">
        <h2 className=" text-4xl font-light">REGISTRATE</h2>
        <form className="flex flex-col justify-center  gap-4 px-6">
          <div className=" flex gap-2 rounded-3xl bg-gray-200 p-2">
            <PersonIcon />
            <input type="text" className="bg-transparent outline-none " placeholder="Nombre" />
          </div>
          <div className=" flex gap-2 rounded-3xl bg-gray-200 p-2">
            <input type="text" className="bg-transparent outline-none " placeholder="Apellido" />
          </div>
          <div className=" flex gap-2 rounded-3xl bg-gray-200 p-2">
            <input type="text" className="bg-transparent outline-none " placeholder="Boleta*" />
          </div>
          <div className=" flex gap-2 rounded-3xl bg-gray-200 p-2">
            <SchoolIcon/>
            <input type="text" className="bg-transparent outline-none " placeholder="Carrera" />
          </div>
          <div className=" flex gap-2 rounded-3xl bg-gray-200 p-2">
            <MailOutlineIcon/>
            <input type="text" className="bg-transparent outline-none " placeholder="@alumno.ipn.mx" />
          </div>

          <div className="flex gap-2 rounded-3xl bg-gray-200 p-2 ">
            <LockIcon/>
            <input type="password" className="bg-transparent outline-none" placeholder="Contraseña" />
          </div>
          <div className="flex gap-2 rounded-3xl bg-gray-200 p-2 ">
            <input type="password" className="bg-transparent outline-none" placeholder="Confirmar Contraseña" />
          </div>
          <div className="flex justify-center">
          <button className=" bg-gradient-to-r w-2/3 from-blue-400 to-blue-900 hover:p-4 duration-200 text-white font-bold text-xl">REGISTRARSE</button>
          </div>
        </form>
        <div className="my-8">
          <h4>¿Ya tienes cuenta?</h4>
          <a href="/login" className=" border-b-2 border-indigo-700 text-indigo-700 cursor-pointer hover:text-lg duration-200">INICIA SESIÓN</a>
        </div>
      </div>
    </DualPage>
  );
}

export default Login;