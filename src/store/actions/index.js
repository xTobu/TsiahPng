import axios from 'axios';
import qs from 'qs';
export default {
    // 取得餐廳名單
    getRestaurantList(context) {
        axios.get('https://easy-mock.com/mock/5b45cffb43b7ef2c8bf92b96/RestaurantsList')
            .then((response) => {
                context.commit('setRestaurantList', response.data);
            })    }

};


/**
 * 參考: https://www.jianshu.com/p/f73a6d2806a8
 */

/**
 * 如果之後要判斷Loading 
 * https://stackoverflow.com/questions/41835716/how-do-i-set-initial-state-in-vuex-2
 */