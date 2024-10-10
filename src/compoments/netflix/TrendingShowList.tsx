import React, { useState } from "react";
import TrendingShow from "./TrendingShow";
interface Show {
  title: string;
  description: string;
}
const TrendingShowList = () => {
  // State
  let [resolution, setResolution] = useState<String>("HD");
  const [trendingShows] = useState<Show[]>([
    {
      title: "test data 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi 1",
    },
    {
      title: "test data 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi 2",
    },
    {
      title: "test data 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi 3",
    },
  ]);

  // Event handler function
  const handleChangeResolution = () => {
    setResolution("4K");
  };

  return (
    <div className="row">
      <h5>
        Enjoy watching the shows in {resolution}
        <button
          className="btn btn-secondary btn-small ms-2"
          onClick={handleChangeResolution}
        >
          Change Resolution
        </button>
      </h5>
      <div className="col-sm-4 mb-4 mb-sm-0">
        <TrendingShow {...trendingShows[0]} />
      </div>
      <div className="col-sm-4 mb-4 mb-sm-0">
        <TrendingShow {...trendingShows[1]} />
      </div>
      <div className="col-sm-4 mb-4 mb-sm-0 ">
        <TrendingShow {...trendingShows[2]} />
      </div>
    </div>
  );
};

export default TrendingShowList;
