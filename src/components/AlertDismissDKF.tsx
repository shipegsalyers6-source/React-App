import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AlertDismissDKF = ({ children }: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show">
        {children}
      </div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </>
  );
};

export default AlertDismissDKF;
