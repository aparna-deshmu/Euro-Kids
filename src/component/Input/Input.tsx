import React, { memo } from 'react'
import { InputText } from 'primereact/inputtext';
import './Input.css'
import { twMerge } from 'tailwind-merge'


const InputField = (props: any) => {
 
    return (

        <div className={`${props?.invalid ? 'errorBorder' : ''}`}>
            <div className={twMerge(props?.containerclassname)}>
                <span className="p-input-icon-left w-full">
                    {props?.type === "search" && <i className="pi pi-search ml-3" />}
                    {props?.label &&
                        <label className='Text_Secondary Input_Label'>
                            {(`${props?.label}`)}
                            {props?.require && <span className='text-red-600'> *</span>}
                        </label>
                    }
                    <InputText
                        {...props}
                        placeholder={(`Please Enter`)}
                        className={twMerge(props.className, `${props?.error && "requiredField"}`)}
                        disabled={props?.disabled === true ? "disabled" : ""}
                        type={props?.type}
                    />
                    <p className='Helper_Text mt-1 text-red-600'> {props?.invalidMessage} </p>
                </span>
            </div>
        </div>
    )
}

export default memo(InputField)