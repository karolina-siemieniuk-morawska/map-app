import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const ValidationError = ({ content }) => {
  const ex = <FontAwesomeIcon icon={faTimes} />;

  return (
    <p className="validation-error">
      <span className="mr-2">{ex}</span>{content}
    </p>
  );
};
