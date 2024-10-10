import React from "react";
import LatestShowList from "../compoments/netflix/LatestShowList";
import TrendingShowList from "../compoments/netflix/TrendingShowList";
import RecommendedShowList from "../compoments/netflix/RecommendedShowList";
import { Helmet } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";

const NetflixPage = () => {
  return (
    <div className="container my-5">
      <Helmet>
        <title>Netflix</title>
      </Helmet>
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <h1 className="text-body-emphasis">Welcome to Netflix</h1>
        <p className="lead">
          Browse, Watch Netflix Originals. Manage watchlist as well!
        </p>
      </div>
      <div className="mt-3">
        <h3>Latest Shows | Props Demo</h3>
        <LatestShowList />
      </div>

      <div className="mt-5 pt-1">
        <hr />
        <h3>Latest Shows | States and Events Demo</h3>
        <TrendingShowList />
      </div>
      <div className="mt-5 pt-1">
        <hr />
        <h3>
          Recommended Shows | States, Events and conditional Rendering Demo
        </h3>
        <ErrorBoundary
            fallback={
              <div className="alert alert-danger">Something went wrong</div>
            }>
              
            </ErrorBoundary>
        <RecommendedShowList />
      </div>
    </div>
  );
};

export default NetflixPage;
