import { Calendar } from "primereact/calendar";
import React, { memo, useEffect, useState } from "react";
import "./Calendar.css";
import { twMerge } from "tailwind-merge";

const DateCalendar = (props: any) => {
 
  const [format, setFormat] = useState<any | null>()
  const dateFormatJOSN: any = [
    { DATE_FORMAT: "DD-MM-YYYY", DATE_CONVERTER: "103", FORMAT_DATE: "dd-mm-yy" },

    { DATE_FORMAT: "MM-DD-YYYY", DATE_CONVERTER: "103", FORMAT_DATE: "mm-dd-yy" },
    { DATE_FORMAT: "DD-MMM-YYYY", DATE_CONVERTER: "103", FORMAT_DATE: "dd-MM-yy" }
  ]

  

  return (
    <div className={`${props?.invalid ? "errorBorder" : ""}`}>
      <div className={twMerge(props?.containerclassname)}>
        <span className="p-input-icon-left w-full">
          <label className="Text_Secondary Input_Label" htmlFor={props?.id}>
            {(`${props?.label}`)}
            {props?.require && <span className="text-red-600"> *</span>}
          </label>

          <Calendar
            value={props?.value}
            dateFormat={format}
            placeholder={"dd-mm-yyyy"}
            {...props}
          />
        </span>
      </div>
    </div>
  );
};

export default memo(DateCalendar);
