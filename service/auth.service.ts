import { AuthRequest } from "@/lib/types/auth";
import { http } from "@/utils/http";

const ServiceId = {
    LOGIN: '/api/v1/auth/login',
    SIGNUP: '/api/v1/auth/signup',
}

const login = (data: AuthRequest) => {
    return http.post(ServiceId.LOGIN, data);
}

const register = async(data : AuthRequest) =>{
    return await http.post(ServiceId.SIGNUP, data)
}

export const authService = {
    login,
    register
}

export default authService;