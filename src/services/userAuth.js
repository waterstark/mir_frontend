import $api from "../http";
import UserStore from './../store/store'

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
        let err = ''
        await $api
        .post('auth/login', {
            email: mail,
            password: pass
        })
        .then (function (response)
        {
            UserStore.isAuthorized = true;
            return;
        })
        .catch (function (error) 
        {
            err = error
        })
        if (err){
            switch (err.response.data.detail)
                {
                    case ('LOGIN_BAD_CREDENTIALS'):
                        return 'Username or password are incorrect'
                    default:
                        return 'Connection error'
                }
        }
    }
    static async logout()
    {
        await $api
        .post('auth/logout')
        .then(function(response)
        {
            console.log(response)
        })
    }
    static async getprofile()
    {
        let resp;
        await $api
        .get('users/me')
        .then (function (response)
        {
            UserStore.isAuthorized = true;
            UserStore.setUser(response.data);
            resp = response.data;
        })
        .catch (function (error) 
        {
            console.log(error)
            resp = ''
        })
        return resp
    }
    static async refresh()
    {
        await $api
        .get('auth/refresh')
        .then (function ()
        {
            UserStore.isAuthorized = true;
        })
        .catch (function (error) 
        {
            console.log(error)
        })
    }
}