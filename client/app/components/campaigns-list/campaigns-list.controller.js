class campaignsListController {

    constructor(Campaign, STATUS_CONFIG) {
        'ngInject';

        this._Campaign = Campaign;

        this.statusConfig = STATUS_CONFIG;
        this.campaigns = [];
        
        this.getCampaigns();
    }

    getCampaigns() {
        this._Campaign.getCampaigns()
            .then(
                data => {
                    this.campaigns = data;
                }
            );
    }

    activateStatus(id) {
        this._Campaign.activateStatus(id)
            .then(
                data => {
                    let index = this.campaigns.findIndex(item => item.id === id);

                    if (index !== -1 && this.campaigns) {
                        this.campaigns[index].status = this.statusConfig.active;
                    }
                }
            )
    }

    deactivateStatus(id) {
        this._Campaign.deactivateStatus(id)
            .then(
                data => {
                    let index = this.campaigns.findIndex(item => item.id === id);

                    if(index !== -1 && this.campaigns) {
                        this.campaigns[index].status = this.statusConfig.inactive;
                    }
                }
            )
    }

    checkStatus(status) {
        return status === this.statusConfig.active;
    }

}

export default campaignsListController;
