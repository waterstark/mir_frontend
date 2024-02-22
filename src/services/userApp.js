import $api from "../http";
import UserStore from './../store/store';

export default class UserService
{
    static async getQuest()
    {
        await $api
        .get('questionnaire/get_my_quest')
        .then (function (response)
        {
            UserStore.questionnare = response.data;
            return;
        })
        .catch (function (error) 
        {
            return 1;
        })
    }
    static async createQuest(userOBJ)
    {
        await $api
        .post('questionnaire', {
            "firstname": userOBJ.fullname,
            "lastname": "string",
            "gender": userOBJ.gender,
            "photo": "string",
            "country": "string",
            "city": "string",
            "about": userOBJ.about,
            "hobbies": userOBJ.interests,
            "height": 0,
            "goals": userOBJ.goal,
            "body_type": userOBJ.sport,
            "age": 2024 - userOBJ.birthDate.year
          })
          .then(function(response) {
            UserStore.questionnare = response.data;
            return;
          })
          .catch(function(error) {
            return 1;
          })
    }
    static async getQuestList()
    {
        await $api
        .get('questionnaire/list/0')
        .then (function (response)
        {
            UserStore.questionareList = response.data;
            return;
        })
        .catch (function (error) 
        {
            return 1;
        })
    }
    static async likeUser(userid, liked)
    {
        await $api
        .post('likes', {
            "liked_user_id": userid,
            "is_liked": liked
          })
        .then (function (response)
        {
            return;
        })
        .catch (function (error) 
        {
            alert('dablyadnerabotaet((((((((');
            return;
        })
    }
    static async getMatches()
    {
        await $api
        .get('matches')
        .then (function (response)
        {
            UserStore.matches = response.data;
            return;
        })
        .catch (function (error) 
        {
            return 1;
        })
    }
}