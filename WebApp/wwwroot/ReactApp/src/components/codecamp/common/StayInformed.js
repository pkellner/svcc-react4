import React from 'react';

export default function StayInformed() {
  return (
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
  );
}
