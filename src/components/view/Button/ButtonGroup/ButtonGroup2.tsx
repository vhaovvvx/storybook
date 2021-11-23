import React, { ReactNode, useState } from "react";
import { ArrowDown } from "../../../../assets/icons/Icons";
import "./ButtonGroup2.scss";

interface ButtonGroup2 {
  children?: ReactNode;
  maxWidth?: string;
  title?: string;
  toggleDrop?: any;
  className?: string;
  name?: string;
}

const ButtonGroup2 = ({
  name,
  className,
  toggleDrop,
  maxWidth,
  title,
  ...props
}: ButtonGroup2) => {
  console.log(title);
  return (
    <React.Fragment>
      <button
        className={className}
        onClick={() => toggleDrop(name)}
        style={{
          maxWidth: `${maxWidth}px`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{title}</span>
          <ArrowDown></ArrowDown>
        </div>
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default ButtonGroup2;
