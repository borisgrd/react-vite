import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button type="button" class="btn-close" data-bs-dismiss></button>
    </div>
  );
};

export default Alert;
