import AuthService from "../services/auth.services";

export default class AuthController{
    static async register(req,res) {
        const user = await AuthService.register(req);
    }
}