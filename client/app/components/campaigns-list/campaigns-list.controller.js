class campaignsListController {

    constructor(Campaign, Notification) {
        'ngInject';

        this.name = 'campaignsList';
        this._Campaign = Campaign;
        this.getCampaigns();
        this._Notification = Notification;
    }

    getCampaigns() {
        this._Campaign.getCampaigns()
            .then(
                data => {
                    this.campaigns = data;
                },
                err => {
                    this._Notification.error(err.data.error.message);
                }
            );
    }

    activateStatus(id) {
        this._Campaign.activateStatus(id)
            .then(
                data => {
                    let index = this.campaigns.findIndex(item => item.id === id);
                    this.campaigns[index].status = 'ACTIVE';
                },
                err => {
                    this._Notification.error(err.data.error.message);
                }
            )
    }

    deactivateStatus(id) {
        this._Campaign.deactivateStatus(id)
            .then(
                data => {
                    let index = this.campaigns.findIndex(item => item.id === id);
                    this.campaigns[index].status = 'INACTIVE';
                },
                err => {
                    this._Notification.error(err.data.error.message);
                }
            )
    }

    checkStatus(status) {
        return status === 'ACTIVE';
    }

}
  
export default campaignsListController;