import React, { Component } from 'react';

import { data } from './sponsors.json';
import DataApiSponsors from './DataApiSponsors';

const api = new DataApiSponsors(data);

class SponsorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsors: api.getSponsors(),
    };
  }

  render() {
    return (
      <div>
        <div className="jumbo-common ">
          <div className="container-main">
            <div className="row">
              <div className="col-12">
                <div className="jumbo-common__tip">Name of the event</div>
                <div className="jumbo-common__content">
                  <h1 className="jumbo-common__title">Our Sponsors</h1>
                  <div className="jumbo-common__desc">
                    <strong>
                      SVCC appreciates our sponsors for their dedication and
                      contribution to the conference and the feeling is mutual.
                    </strong>
                    <br /> Bridging the gap between brand presence and brand
                    involvement, SVCC Sponsors provide specific initiatives that
                    benefit our attendees and registrants while enhancing the
                    overall SVCC experience.
                  </div>
                  <div className="jumbo-common__buttons">
                    <button className="btn btn-primary">
                      Become a sponsor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-main sponsors">
          <div className="row">
            <div className="col-12">
              <div className="sponsors-platinum">
                <div className="sponsors-title">Platinum Sponsors</div>
                <div className="sponsors-list">
                  <div className="sponsors-list__item featured-item">
                    <div className="column image">
                      <img
                        src="//d1syjrf5lltxmn.cloudfront.net/sponsorimage/20160929194412-902.jpg"
                        alt=""
                      />
                    </div>
                    <div className="column">
                      <div className="title">IBM</div>
                      <div className="featured">Featured sponsor</div>
                      <div className="description">
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                      </div>
                      <div className="website">
                        <a href="http://www.ibm.com/cloud">Website</a>
                      </div>
                    </div>
                  </div>
                  <div className="sponsors-list__item ">
                    <div className="column image">
                      <img
                        src="//d1syjrf5lltxmn.cloudfront.net/sponsorimage/20130809000158-747.jpg"
                        alt=""
                      />
                    </div>
                    <div className="column">
                      <div className="title">Microsoft</div>
                      <div className="description">
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                      </div>
                      <div className="website">
                        <a href="http://www.microsoft.com/">Website</a>
                      </div>
                    </div>
                  </div>
                  <div className="sponsors-list__item ">
                    <div className="column image">
                      <img
                        src="//d1syjrf5lltxmn.cloudfront.net/sponsorimage/20160928145335-725.jpg"
                        alt=""
                      />
                    </div>
                    <div className="column">
                      <div className="title">Dice</div>
                      <div className="description">
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        Lorem ipsum dolor sit amet
                      </div>
                      <div className="website">
                        <a href="http://dice.com">Website</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sponsors-title">Platinum Sponsors</div>
                <div className="sponsors-list-box">
                  <div className="sponsors-list-box__item featured-item">
                    <img
                      src="//d1syjrf5lltxmn.cloudfront.net/sponsorimage/20160929194412-902.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item ">
                    <img
                      src="//d1syjrf5lltxmn.cloudfront.net/sponsorimage/20130809000158-747.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item ">
                    <img
                      src="//d1syjrf5lltxmn.cloudfront.net/sponsorimage/20160928145335-725.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="sponsors-title">Gold Sponsors</div>
                <div className="sponsors-list-box">
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20160915194918-943.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20160921164338-968.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20160906211119-866.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20160930134638-729.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20160916202447-873.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20160920192522-708.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="sponsors-title">Silver Sponsors</div>
                <div className="sponsors-list-box">
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//d2zy29wfit83r0.cloudfront.net/sponsorimage/20130423165430-735.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//d2zy29wfit83r0.cloudfront.net/sponsorimage/20160713212934-966.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//d2zy29wfit83r0.cloudfront.net/sponsorimage/20130423165430-716.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//d2zy29wfit83r0.cloudfront.net/sponsorimage/20160923162054-827.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="sponsors-list-box-buttons">
                  <button className="btn btn-primary">
                    Sponsor this event
                  </button>
                </div>
                <div className="custom-dropdown-container js-custom-dropdown-container">
                  <div className="sponsors-title">
                    Community Sponsors
                    <a href="" className="sponsors-title-small">
                      Become a community sponsor
                    </a>
                  </div>
                  <div className="custom-dropdown js-custom-dropdown">
                    <div className="sponsors-dropdown-title">
                      Community Sponsors
                    </div>
                    <div className="sponsor-dropdown-description">
                      If you are interested in being a Community Sponsor, we ask
                      for three things:
                      <ol className="sponsors-dropdown-list">
                        <li>
                          <span className="square-icon square-icon--primary">
                            1
                          </span>{' '}
                          Do a mailing now to your members letting them know
                          about Code Camp
                        </li>
                        <li>
                          <span className="square-icon square-icon--primary">
                            2
                          </span>{' '}
                          Display the Code Camp Advertisement on your home page
                        </li>
                        <li>
                          <span className="square-icon square-icon--primary">
                            3
                          </span>{' '}
                          Do a final mailing 1 to 2 weeks before the Code Camp
                          event (Here are some sample announcements from
                          previous years).
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="sponsors-list-box padding-bottom">
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20130423165430-730.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20130423165430-721.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20130426064921-755.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20160823232428-967.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20130423165430-715.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20130424212052-756.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20130605003610-707.jpg"
                      alt=""
                    />
                  </div>
                  <div className="sponsors-list-box__item no-border smaller-item">
                    <img
                      src="//ddrt7tzfkdwdf.cloudfront.net/sponsorimage/20140724233920-925.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter-block">
            <div className="container-main">
              <div className="newsletter-block__title">
                Sign up to stay informed of our future events
              </div>
              <div className="newsletter-block__form">
                <form className="form-inline">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="My email"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-reversed-borders"
                  >
                    Ok
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SponsorList.defaultProps = {};

export default SponsorList;
