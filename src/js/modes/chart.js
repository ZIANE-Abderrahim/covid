import axios from 'axios';
export default class corona {
    constructor() {}
    async getResults() {
        try {
            const gl = await axios(`https://disease.sh/v2/all`);
            const all = await axios(`https://disease.sh/v2/historical/all?lastdays=30`);
            const ctn = await axios(`https://disease.sh/v2/continents`)
            this.global = gl.data;
            this.deaths = all.data;
            this.continent = ctn.data;
        } catch (err) {
            alert(err)
        }
    }
};