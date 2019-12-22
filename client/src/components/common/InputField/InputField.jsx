import {Input} from "antd";
import {getIn} from "formik";
import React   from "react";
import style   from './InputField.module.scss'
import cn      from "classnames";

export const InputField = ({field, form: {errors}, ...props}) => {
   const errorMessage = getIn(errors, field.name);

   return (
      <>
         <Input {...field}
                {...props}
                onBlur={(e) => e.preventDefault()}
                className={cn({[style.errorInput]: errorMessage}, props.className)}/>
         {errorMessage && <div style={{color: "red"}}>{errorMessage}</div>}
      </>
   );
};