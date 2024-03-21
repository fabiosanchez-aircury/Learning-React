import React from "react";

interface AlertButtonProps{
    onClose: () => void
}

const AlertButton = ( {onClose} : AlertButtonProps) => {
  return (
    <div className="alert alert-info alert-dismissible fade show">
      <strong>Alert with close button visible</strong>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default AlertButton;
