import { makeAutoObservable } from "mobx";

class UserStore{
    isAuthorized = false;
    user = 
    {
        "search_range_min": 0,
        "search_range_max": 0,
        "search_age_min": 0,
        "search_age_max": 0,
        "id": "",
        "user_id": "",
        "subscriber": null
    };
    
    questionnare = {};

    matches = {};

    questionareList = {};

    constructor()
    {
        makeAutoObservable(this);
    }

    setUser(userOBJ)
    {
        this.user.id = userOBJ.id;
        this.user.user_id = userOBJ.user_id;
        this.user.search_age_max = userOBJ.search_age_max;
        this.user.search_age_min = userOBJ.search_age_min;
        this.user.search_range_max = userOBJ.search_range_max;
        this.user.search_age_min = userOBJ.search_age_min;
    }
}

export default new UserStore()