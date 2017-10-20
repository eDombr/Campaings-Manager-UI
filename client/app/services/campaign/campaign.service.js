class CampaignService {
    constructor($http) {
        'ngInject';

        this._$http = $http;
        this.baseUrl = 'https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io'
    }

    getCampaigns() {
        return this._$http.get(`${this.baseUrl}/campaigns`)
            .then(result => {
                return result.data;
            });
    }

    activateStatus(id) {
        return this._$http.post(`${this.baseUrl}/campaigns/${id}/activate`)
    }

    deactivateStatus(id) {
        return this._$http.post(`${this.baseUrl}/campaigns/${id}/deactivate`)
    }

    getCampaignStats(id) {
        return this._$http.get(`${this.baseUrl}/campaigns/${id}/stats`)
            .then(result => {
                return result.data;
            })
    }
}

export default CampaignService;