import React from "react";

interface TrendingShowProps {
  title: string;
  description: string;
}

const TrendingShow = (props: TrendingShowProps) => {
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingShow;
