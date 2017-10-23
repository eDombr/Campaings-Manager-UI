class CampaignService {
    constructor($http, BASE_URL) {
        'ngInject';

        this._$http = $http;

        this.baseUrl = BASE_URL;
    }

    /**
     * getCampaigns - gets all campaigns
     */
    getCampaigns() {
        return this._$http.get(`${this.baseUrl}`);
    }

    /**
     * activateStatus - activates status of campaign by id
     * @param {*} id - campaign's id
     */
    activateStatus(id) {
        return this._$http.post(`${this.baseUrl}/${id}/activate`);
    }

    /**
     * deactivateStatus - deactivates status of campaign by id
     * @param {*} id - campaign's id
     */
    deactivateStatus(id) {
        return this._$http.post(`${this.baseUrl}/${id}/deactivate`);
    }

    /**
     * getCampaignStats - gets stats for specific campaign by id
     * @param {*} id - campaign's id
     */
    getCampaignStats(id) {
        return this._$http.get(`${this.baseUrl}/${id}/stats`);
    }
}

export default CampaignService;
