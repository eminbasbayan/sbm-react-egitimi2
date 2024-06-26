import PropTypes from "prop-types";
import "./Button.css";

function Button({ size, type = "primary", children, onClick, className }) {
  const sizeClass = `btn-${size}`;
  const typeClass = `btn-${type}`;
  const classNames = `btn ${typeClass} ${sizeClass} ${className}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger"]),
  size: PropTypes.oneOf(["xl", "lg", "sm"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
