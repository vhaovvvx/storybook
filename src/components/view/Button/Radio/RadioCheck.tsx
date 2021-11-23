import React, { ReactNode, useState } from "react";
import "./RadioCheck.scss";

interface BtnRadioP {
  disabled?: Boolean;
  check?: boolean;
  children?: ReactNode;
  valueOptions?: number;
  clickHandle?: Function | undefined;
  name?: string;
  valueData: string;
}

const RadioCheck = ({
  valueData,
  name,
  disabled,
  check,
  valueOptions,
  clickHandle,
  ...props
}: BtnRadioP) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      if (clickHandle) {
        clickHandle(valueOptions, name);
      }
    }
  };

  return (
    <label className={`container radio ${disabled ? "disabled" : ""}`}>
      <label htmlFor={valueData} style={{ cursor: "pointer" }}>
        {valueData}
      </label>
      <input
        autoComplete="off"
        type="radio"
        name={name}
        value={valueData}
        id={valueData}
        className="disabled"
        onChange={handleChange}
        defaultChecked={check}
      />
      <label className="checkmark radio" htmlFor={valueData}></label>
    </label>
  );
};

export default RadioCheck;
