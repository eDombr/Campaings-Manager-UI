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
     * changeStatus - changes status of campaign by id
     * @param {*} id - campaign's id
     * @param {*} isActivate - parameter to check a status
     */
    changeStatus(id, isActivate) {
        if (isActivate) {
            return this._$http.post(`${this.baseUrl}/${id}/deactivate`);
        } else {
            return this._$http.post(`${this.baseUrl}/${id}/activate`);
        }
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
