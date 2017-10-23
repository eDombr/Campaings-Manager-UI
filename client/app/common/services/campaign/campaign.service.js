class CampaignService {
    constructor($http, BASE_URL) {
        'ngInject';

        this._$http = $http;

        this.baseUrl = BASE_URL;
    }

    getCampaigns() {
        return this._$http.get(`${this.baseUrl}`);
    }

    activateStatus(id) {
        return this._$http.post(`${this.baseUrl}/${id}/activate`);
    }

    deactivateStatus(id) {
        return this._$http.post(`${this.baseUrl}/${id}/deactivate`);
    }

    getCampaignStats(id) {
        return this._$http.get(`${this.baseUrl}/${id}/stats`);
    }
}

export default CampaignService;
