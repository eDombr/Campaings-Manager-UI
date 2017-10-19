// let userService = function() {

// }

class CampaignService {
    constructor($http) {
        'ngInject';

        this._$http = $http;
    }

    getCampaigns() {
        return this._$http.get('https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns')
            .then(result => {
                console.log(result);
                return result.data;
            });
    }

    activateStatus(id) {
        return this._$http.post(`https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns/${id}/activate`)
            .then(result => {
                console.log(result);
                return result;
            });
    }

    deactivateStatus(id) {
        return this._$http.post(`https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns/${id}/deactivate`)
            .then(result => {
                console.log(result);
                return result;
            });
    }

    getCampaignStats(id) {
        return this._$http.get(`https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns/${id}/stats`)
            .then(result => {
                console.log(result);
                return result.data;
            })
    }
}

export default CampaignService;