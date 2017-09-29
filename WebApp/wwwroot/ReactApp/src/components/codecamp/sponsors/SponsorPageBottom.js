import React, { Component } from 'react';

import { data } from './sponsors.json';
import DataApiSponsors from './DataApiSponsors';
import SponsorPageBottomItem from './SponsorPageBottomItem';

const api = new DataApiSponsors(data);

class SponsorPageBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsors: api.getSponsors(),
    };
  }

  render() {
    return (
      <div className="container-main">
        <div className="row">
          <div className="col-12">
            <div className="events-sponsors">
              <div className="events-sponsors__title">Our Sponsors</div>
              <div className="events-sponsors__tabs">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#gold-platinum-sponsors"
                      role="tab"
                      aria-expanded="true"
                    >
                      Gold &amp; Platinum
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#all-sponsors"
                      role="tab"
                      aria-expanded="false"
                    >
                      All The Sponsors
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane active"
                    id="gold-platinum-sponsors"
                    role="tabpanel"
                    aria-expanded="true"
                  >
                    {this.state.sponsors
                      .filter(
                        sponsor =>
                          sponsor.sponsorSupportLevel === 'Gold' ||
                          sponsor.sponsorSupportLevel === 'Platinum'
                      )
                      .map(item => (
                        <SponsorPageBottomItem
                          key={item.id}
                          id={item.id}
                          sponsorName={item.sponsorName}
                          webSite={item.webSite}
                        />
                      ))}
                  </div>
                  <div
                    className="tab-pane"
                    id="all-sponsors"
                    role="tabpanel"
                    aria-expanded="false"
                  >
                    {this.state.sponsors
                      .filter(
                        sponsor =>
                          sponsor.sponsorSupportLevel === 'Gold' ||
                          sponsor.sponsorSupportLevel === 'Platinum' ||
                          sponsor.sponsorSupportLevel === 'Silver'
                      )
                      .map(item => (
                        <SponsorPageBottomItem
                          key={item.id}
                          id={item.id}
                          sponsorName={item.sponsorName}
                          webSite={item.webSite}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div className="events-sponsors__buttons">
                <a href="/sponsor" className="btn btn-primary">
                  Sponsor this event
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SponsorPageBottom;
