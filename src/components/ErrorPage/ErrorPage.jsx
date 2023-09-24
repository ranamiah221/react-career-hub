import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        
            <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-7xl font-bold">Oops!!!</h1>
            <Link className="border border-[black] mt-10 p-3 rounded-lg text-2xl font-medium text-gray-600" to='/'>Go Back to Home</Link>
        </div>
              
     
    
      
    );
};

export default ErrorPage;