import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const res = await axios(`https:disease.sh/v2/countries/${this.query}`);
            this.result = res.data;
        } catch (err) {
            alert(err)
        }
    }
};