class campaignsListController {

    constructor(Campaign, Notification) {
        'ngInject';

        this._Campaign = Campaign;
        this._Notification = Notification;

        this.statusConfig = {
            active: 'ACTIVE',
            inactive: 'INACTIVE'
        }
        
        this.getCampaigns();
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

                    if (index !== -1) {
                        this.campaigns[index].status = this.statusConfig.active;
                    }
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

                    if(index !== -1) {
                        this.campaigns[index].status = this.statusConfig.inactive;
                    }
                },
                err => {
                    this._Notification.error(err.data.error.message);
                }
            )
    }

    checkStatus(status) {
        return status === this.statusConfig.active;
    }

}

export default campaignsListController;
