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
    static async login(mail, pass)
    {
        await $api
        .post('auth/login', "grant_type=&username=" + mail + "&password=" + pass + "&scope=&client_id=&client_secret=")
        .then (function (response)
        {
            return 0;
        })
        .catch (function (error) 
        {
            return error;
        })
    }
}