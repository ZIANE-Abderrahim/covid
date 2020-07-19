import axios from 'axios';
export default class corona {
    constructor() {}
    async getResults() {
        try {
            const res = await axios(`https://disease.sh/v2/countries/Morocco`);
            const da = await axios(`https://api.thevirustracker.com/free-api?countryTimeline=MA`);
            const dy=await axios(`https://disease.sh/v3/covid-19/historical/Morocco?lastdays=30`);
            this.dd=dy.data.timeline;
            console.log(dy.data.timeline)
            this.global = res.data;
            this.daily = da.data.timelineitems[0];
        } catch (err) {
            console.log(err)
        }
    }
};