class campaignsListController {

    constructor(Campaign, CAMPAIGN_STATUSES) {
        'ngInject';

        this._Campaign = Campaign;

        this.campaignStatuses = CAMPAIGN_STATUSES;
        this.campaigns = [];
        
        this.getCampaigns();
    }

    getCampaigns() {
        this._Campaign.getCampaigns()
            .then(
                data => {
                    this.campaigns = data;
                    
                    // check campaign's status and add 'isActive' property
                    if (this.campaigns) {
                        this.campaigns.forEach(campaign => {
                            if (this.checkStatus(campaign.status)) {
                                campaign.isActive = true;
                                return;
                            }
                            campaign.isActive = false;
                        })
                    }
                }
            );
    }

    changeStatus(id, isActive) {
            this._Campaign.changeStatus(id, isActive)
                .then(
                    data => {
                        // toggle status for specific campaign
                        let campaignToActivate = this.campaigns.find(campaign => campaign.id === id);
                        if (campaignToActivate) {
                            campaignToActivate.isActive = !campaignToActivate.isActive;
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
        return status === this.campaignStatuses.active;
    }

}

export default campaignsListController;
