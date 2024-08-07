import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="card text-center rounded-4 w-75">
      <div className="card-header">
        <p className="fw-lighter">{props.title}</p>
        <h2 className="fw-bold ">{props.price}</h2>
      </div>
      <div className="card-body text-start">
        <ul className="list-unstyled">
          {props.features.map((feature, index) => {
            const [status, text] = feature.split(":");
            return (
              <li
                key={index}
                className={status === "excluded" ? "text-muted" : ""}
              >
                {status === "included" ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faTimes} />
                )}{" "}
                {text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer">
        <button type="button" className="btn btn-primary rounded-5 col-9">
          Button
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
