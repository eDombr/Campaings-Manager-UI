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
                    // finding the index of the activated campaign into the campaign's array
                    let index = this.campaigns.findIndex(item => item.id === id);

                    // if the index was found it would change the status on 'active'
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
                    // finding the index of the deactivated campaign into the campaign's array
                    let index = this.campaigns.findIndex(item => item.id === id);

                    // if the index was found it would change the status on 'active'
                    if(index !== -1 && this.campaigns) {
                        this.campaigns[index].status = this.statusConfig.inactive;
                    }
                }
            )
    }

    /**
     * checkStatus - checks campaign's status for displaying of necessary button
     * @param {*} status - campaign's status
     * @return - a boolean variable of status activation 
     */
    checkStatus(status) {
        return status === this.statusConfig.active;
    }

}

export default campaignsListController;
