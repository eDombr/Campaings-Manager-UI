class campaignStatsController {
  constructor(Campaign, $stateParams) {
    "ngInject";
    this.name = 'campaignStats';
    this._Campaign = Campaign;
    this.campaignId = $stateParams.campaignId;
    this.getCampaignStats(this.campaignId);
    this.getCampaigns();

    this.chartConfig = {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        title: {
            text: 'Impressions'
        }
      },
      // plotOptions: {
      //     line: {
      //         dataLabels: {
      //             enabled: true
      //         },
      //         enableMouseTracking: false
      //     }
      // },
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
        }
      )
  }

  getCampaigns() {
    this._Campaign.getCampaigns()
      .then(
        data => {
          this.campaigns = data;
          this.currentCampaign = this.campaigns.find(item => item.id === this.campaignId);
        }
      );
  }
}

export default campaignStatsController;
