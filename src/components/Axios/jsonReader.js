import axios from "axios";

export default {
    // created: function() {
    //     fetch('data/db.json')
    //       .then(r => r.json())
    //       .then(json => {
    //         this.db = json
    //       })
    getProducts(){
        return axios.get('/data/products.json');
    },    
    getUpperProducts(){
        return axios.get('/data/upperProducts.json');
    }
}