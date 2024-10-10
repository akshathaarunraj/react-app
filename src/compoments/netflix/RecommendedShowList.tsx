import { useState } from "react";
import RecommendedShow from "./RecommendedShow";
const RecommendedShowList = () => {
  const [recommendedShows, setRecommendedShows] = useState([
    {
      id: 567346574,
      title: "The Planet Earth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
      category: "Infotainment",
      publishedOn: "2 days ago",
      thumbnailUrl: "https://placehold.co/400x300/ffff00/000000/png",
      isInWatchlist: false,
    },
    {
      id: 567567567,
      title: "The Planet of the Apes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
      category: "Action",
      publishedOn: "2 days ago",
      thumbnailUrl: "https://placehold.co/400x300/ff0000/000000/png",
      isInWatchlist: false,
    },
    {
      id: 567567568,
      title: "Ancient Aliens",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil adipisci perferendis unde architecto quisquam blanditiis commodi",
      category: "Documentary",
      publishedOn: "2 days ago",
      thumbnailUrl: "https://placehold.co/400x300/00ff00/000000/png",
      isInWatchlist: false,
    },
  ]);

  //event handler function
  const handleManageWatchList = (index: number) => {
    const duplicateShows = [...recommendedShows];
    duplicateShows[index].isInWatchlist = !duplicateShows[index].isInWatchlist;
    setRecommendedShows([...duplicateShows]);
  };

  // conditional rendering outside jsx

  if (recommendedShows && recommendedShows.length === 0) {
    return (
      <div className="alert alert-warning">
        Sorry !! Unable to find recommended shows. Please try again later.
      </div>
    );
  }

  //conditional rendering inside jsx using lists and keys

  return (
    <div className="row">
      {/* List and keys */}
      {recommendedShows.map((data, index) => {
        return (
          <div className="col-sm-3" key={data.id}>
            <RecommendedShow
              {...data}
              index={index}
              handleManageWatchList={handleManageWatchList}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedShowList;
