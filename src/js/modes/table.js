import axios from 'axios';
export default class corona {
    constructor() {}
    async getResults() {
        try {
            const res = await axios(`https://disease.sh/v2/countries`)
            const gl = await axios(`https://disease.sh/v2/all`);
            this.result = res.data;
            
            this.global = gl.data;
        } catch (err) {
            alert(err)
        }
    }
};