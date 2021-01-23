import axios from "axios";

const url = 'https://randomuser.me/api/?results=50&nat=us';

export default {
    getUsers: function () {
        return axios.get(url);
    }
};


// import axios from "axios";

// export default {
//     getUsers: function () {
//         return axios.get('https://randomuser.me/api/?results=50&nat=us');
//     }
// };
