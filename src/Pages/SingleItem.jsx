import { Link } from "react-router-dom";

const SingleItem = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="card bg-base-100 shadow-xl transition hover:scale-110 duration-150">
        <figure>
          <img src={props.image} />
        </figure>
        <div className="text-left">
          <h2 className="text-lg font-semibold mt-3">{props.name}</h2>
          <div className="card-actions flex items-center gap-8 my-5">
            <p className="font-semibold">${props.new_price}</p>
            <p>${props.old_price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;
