class campaignStatsController {
  constructor(Campaign, $stateParams) {
    "ngInject";
    this.name = 'campaignStats';
    this._Campaign = Campaign;
    this.campaignId = $stateParams.campaignId;
    // console.log(this.campaignId);
    this.getCampaignStats(this.campaignId);
    this.getCampaigns();
  }

  getCampaignStats(id) {
    this._Campaign.getCampaignStats(id)
      .then(
        data => {
          console.log(data);
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
