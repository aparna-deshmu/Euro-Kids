import React, { memo } from "react";
import "./Button.css";
import { Button } from 'primereact/button';

const Buttons = (props: any) => {
  return (
    <Button
      {...props}
      type={props?.type || "button"}
      className={`${props?.className}`}
      disabled={props?.disabled ? props.disabled : false}
      label={(`${props?.label}`)}
    />

  );
};

export default memo(Buttons);
