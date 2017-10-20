class campaignStatsController {
    constructor(Campaign, $stateParams, Notification) {
        "ngInject";
        this._Campaign = Campaign;
        this._Notification = Notification;

        this.campaignId = $stateParams.campaignId;
        this.getCampaignStats(this.campaignId);
        this.getCampaigns();

        this.chartConfig = {
            chart: {
                type: 'spline'
            },
            xAxis: {
                categories: []
            },
            yAxis: {
                title: {
                    text: 'Impressions'
                }
            },
            series: [{
                data: []
            }],
            title: {
                text: false
            },
            legend: {
                enabled: false
            },
            credits: false
        }
    }

    getCampaignStats(id) {
        this._Campaign.getCampaignStats(id)
            .then(
                data => {
                    this.campaignStats = data;
                    this.campaignStats.forEach(item => {
                        this.chartConfig.series[0].data.push(item.impressions);
                        this.chartConfig.xAxis.categories.push(item.date);
                    });
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
                    this.currentCampaign = this.campaigns.find(item => item.id === this.campaignId);
                },
                err => {
                    this._Notification.error(err.data.error.message);
                }
            );
    }
}

export default campaignStatsController;
