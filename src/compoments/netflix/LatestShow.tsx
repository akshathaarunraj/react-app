interface LatestShowProps {
  thumbnailUrl: string;
  title: string;
  category: string;
  publishedOn: string;
  children: string; //if any text is passed inside html tag use 'children'
  time?: string; //if its optional use '?' symbol
}

const LatestShow = (props: LatestShowProps) => {
  console.log("props:", props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={props.thumbnailUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
        <p className="card-text">{props.time}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="badge rounded-pill text-bg-warning">
            {props.category}
          </span>
        </li>
        <li className="list-group-item fst-italic">{props.publishedOn}</li>
      </ul>
      <div className="card-body">
        <button className="btn btn-primary">Watch now</button>
      </div>
    </div>
  );
};

export default LatestShow;
