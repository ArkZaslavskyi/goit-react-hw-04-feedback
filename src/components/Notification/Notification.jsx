import PropTypes from "prop-types";

const Notification = ({ message }) => (
    <p>{message}</p>
);

Notification.propType = {
    message: PropTypes.string.isRequired,
}

export default Notification;
