import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:8000";

const SendRegisterDataToServer = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/register`, data)
        if(response.data.success){
            toast.success(response.data.message)
            return response
        }
        toast.error(response.data.message)    
        
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

const SendOtpDataToServer = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/otp`, data)
        toast.success(response?.data?.message)    
        return response
        
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

const SendLoginDataToServer = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/login`, data)
        if(response.data.success){
            toast.success(response.data.message)
            return response
        }
        toast.error(response.data.message)    
        
    } catch (error) {
        toast.error(error.response.data.message)
    }
};

const refreshToken = window.localStorage.getItem('token')

const getUserDataFromServer = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/getuser`, {refreshToken})

        return response
    } catch (error) {
        toast.error(error.response.data.message)
    }
}



export {SendRegisterDataToServer, SendOtpDataToServer, SendLoginDataToServer, getUserDataFromServer
}