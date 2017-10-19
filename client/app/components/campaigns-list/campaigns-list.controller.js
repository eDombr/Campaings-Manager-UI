class campaignsListController {

    constructor(Campaign) {
        'ngInject';

        this.name = 'campaignsList';
        this._Campaign = Campaign;
        this.getCampaigns();
    }

    getCampaigns() {
        this._Campaign.getCampaigns()
            .then(
                data => {
                    console.log(data);
                    this.campaigns = data;
                }
            );
    }

    activateStatus(id) {
        this._Campaign.activateStatus(id)
            .then(
                data => {
                    let index = this.campaigns.findIndex(item, () => item.id = id);
                    this.campaigns[index].status = 'ACTIVE';
                }
            )
    }

    deactivateStatus(id) {
        console.log(id);
        this._Campaign.deactivateStatus(id)
            .then(
                data => {
                    let index = this.campaigns.findIndex(item, () => item.id = id);
                    this.campaigns[index].status = 'INACTIVE';
                }
            )
    }

    checkStatus(status) {
        return status === 'ACTIVE';
    }

}
  
export default campaignsListController;