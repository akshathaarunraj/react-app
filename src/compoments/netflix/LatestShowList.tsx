import LatestShow from "./LatestShow";

//using props (sending data from parent to child component)
const LatestShowList = () => {
  return (
    <div className="row">
      <div className="col-sm-3">
        <LatestShow
          title="Props 1"
          thumbnailUrl="https://placehold.co/400x300/ffff00/00000/png"
          category="Thriller"
          time="Today"
          publishedOn="13/9/2024"
        >
          Props example 1 implementation"
        </LatestShow>
      </div>
      <div className="col-sm-3">
        <LatestShow
          title="Props2"
          thumbnailUrl="https://placehold.co/400x300/ff0000/00000/png"
          category="Thriller"
          publishedOn="12/9/2024"
        >
          Props example 2 implementation
        </LatestShow>
      </div>
    </div>
  );
};

export default LatestShowList;
