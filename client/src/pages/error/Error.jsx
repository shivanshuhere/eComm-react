import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Error() {

    const navigate = useNavigate()

    return (
        <>
            <div className="min-h-[70vh] flex flex-col items-center justify-center relative">
                <div className=" absolute top-6 left-44">
                  <p className=" text-gray-400">Home / <span className=" text-gray-800">404 Error</span></p>
                </div>
                <h1 className="text-8xl font-medium">404 Not Found </h1>
                <p className="text-lg">
                    Your visited page not found. You may go home page.
                </p>
                <div className=" w-full mt-10 flex justify-center">
                <Button text="Back to home page" width='w-72' height='h-12' handleonClick={()=>navigate('/')} />
                </div>
            </div>
        </>
    );
}

export default Error;
