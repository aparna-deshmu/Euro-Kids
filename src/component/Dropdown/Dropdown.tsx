import { Dropdown } from "primereact/dropdown";
import "./Dropdown.css";
import { memo, useEffect } from "react";

const Select = (props: any) => {
 
  useEffect(() => {
    if (props?.selectedData) {
      props?.setValue(
        props?.name,
        props?.options?.filter(
          (item: any) => item[props?.findKey] === props?.selectedData
        )[0] || ""
      );
    }
  }, [props?.options, props?.selectedData, props?.customField]);

  return (
    <>
      <label className="Text_Secondary Input_Label">
        {props?.label && (`${props?.label}`)}
        {props?.require && <span className="text-red-600"> *</span>}
      </label>
      <div className={`${props?.invalid ? "errorBorder" : ""}`}>
        <Dropdown
          className={`${props?.className} w-full`}
          placeholder={(`Please Select`)}
          {...props}
          filter={props?.filter === true ? true : false}
          options={props?.options || []}

        />
      </div>
    </>
  );
};

export default memo(Select);
