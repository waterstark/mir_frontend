import $api from "../http";

export default class AuthService
{
    static async registration(mail, pass)
    {
        await $api
        .post('auth/register', {
            email : mail,
            password : pass
        })
        .then (function (response)
        {
            return response;
        })
        .catch (function (error) 
        {
            console.log(error)
        })
    }
}