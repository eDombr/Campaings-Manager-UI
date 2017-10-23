class campaignStatsController {
    constructor($stateParams, Campaign, CHART_CONFIG) {
		"ngInject";

        this._Campaign = Campaign;
		this.chartConfig = CHART_CONFIG;
		this.campaignId = $stateParams.campaignId;
        
        this.init();
    }

    /**
     * init - initial initialization
     */
    init() {
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
                    this.chartConfig.series[0].data = [];
                    this.chartConfig.xAxis.categories = [];

					// transform a campaign stats's data to a data for charts
					if(this.campaignStats) {
						this.campaignStats.forEach(item => {
							this.chartConfig.series[0].data.push(item.impressions);
							this.chartConfig.xAxis.categories.push(item.date);
						});
					}
                }
            )
    }

    /**
     * setCurrentCompaign - sets current campaign and changes data for the chart of stats
     * @param {*} id - campaign's id
     */
    setCurrentCompaign(id) {
        this.currentCampaign = this.campaigns.find(item => item.id === id);
        this.getCampaignStats(id);
    }

    getCampaigns() {
        this._Campaign.getCampaigns()
            .then(
                data => {
					this.campaigns = data;

					// finding the current campaign by an id from stateParams
					if (this.campaigns) {
						this.currentCampaign = this.campaigns.find(item => item.id === this.campaignId);
					}
                }
            );
    }
}

export default campaignStatsController;
