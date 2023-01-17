const DualPage = ({children,image}) => {
  return ( 
  <div className=" flex flex-row min-h-full justify-center">
    <div className="flex w-1/2 min-h-screen justify-center items-center content-center align-middle">
      {children}
    </div>
    <div className=" flex w-1/2 min-h-screen justify-center items-center content-center align-middle">
      <img className="  w-full" src={image}></img>
    </div>
  </div> );
}
 
export default DualPage;