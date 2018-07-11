import axios from 'axios';
import qs from 'qs';
export default {
    getRestaurantList(context) {
        axios.get('https://easy-mock.com/mock/5b45cffb43b7ef2c8bf92b96/RestaurantsList')
            .then((response) => {
                context.commit('setRestaurantList', response.data);
            })    }

};
