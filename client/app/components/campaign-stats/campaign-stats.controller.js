import cloneDeep from 'lodash/cloneDeep';

class campaignStatsController {
    constructor(Campaign, $stateParams, Notification, CHART_CONFIG) {
		"ngInject";

        this._Campaign = Campaign;
        this._Notification = Notification;

		this.chartConfig = cloneDeep(CHART_CONFIG);
		
		this.campaignId = $stateParams.campaignId;
		this.campaigns = [];
		this.currentCampaign = {};

        this.getCampaignStats(this.campaignId);
        this.getCampaigns();
    }

    getCampaignStats(id) {
        this._Campaign.getCampaignStats(id)
            .then(
                data => {
					this.campaignStats = data;

					if(this.campaignStats) {
						this.campaignStats.forEach(item => {
							this.chartConfig.series[0].data.push(item.impressions);
							this.chartConfig.xAxis.categories.push(item.date);
						});
					}

                },
                err => {
                    this._Notification.error(err.data.error.message);
                }
            )
    }

    getCampaigns() {
        this._Campaign.getCampaigns()
            .then(
                data => {
					this.campaigns = data;

					if(this.campaigns) {
						this.currentCampaign = this.campaigns.find(item => item.id === this.campaignId);
					}
                },
                err => {
                    this._Notification.error(err.data.error.message);
                }
            );
    }
}

export default campaignStatsController;
