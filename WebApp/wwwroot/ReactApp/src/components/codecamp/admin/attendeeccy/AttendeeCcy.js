import React, {Component} from 'react';
//import PropTypes from 'prop-types';

//import axios from 'axios';


class AttendeeCcy extends Component {
  render() {
    return (

      <div className="container-main speakers">

        <hr/>

        <div className="row">
          <div className="col-12">
            <div className="speakers-list">
              <div className="row flex-row">


                <div className="col-12">
                  <div className="d-flex align-items-center">
                    <input id="checkBox" type="checkbox"></input><span>&nbsp;&nbsp;</span>
                    <span>Peter Kellner</span><span>&nbsp;&nbsp;</span>
                    <button className="btn">Edit</button>
                    <span>&nbsp;&nbsp;</span>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>



    );
  }
}

AttendeeCcy.propTypes = {};
AttendeeCcy.defaultProps = {};

export default AttendeeCcy;
