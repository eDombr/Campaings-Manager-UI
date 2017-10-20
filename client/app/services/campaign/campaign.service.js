class CampaignService {
    constructor($http) {
        'ngInject';

        this._$http = $http;

        this.baseUrl = 'https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns'
    }

    getCampaigns() {
        return this._$http.get(`${this.baseUrl}`)
            .then(this._$http.getDataFromResult);
    }

    activateStatus(id) {
        return this._$http.post(`${this.baseUrl}/${id}/activate`)
        then(this._$http.getDataFromResult);
    }

    deactivateStatus(id) {
        return this._$http.post(`${this.baseUrl}/${id}/deactivate`);
    }

    getCampaignStats(id) {
        return this._$http.get(`${this.baseUrl}/${id}/stats`)
            .then(this._$http.getDataFromResult);
    }
}

export default CampaignService;
