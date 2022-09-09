import React from "react";
import TextField from '@mui/material/TextField';

const TextForm = (props) => {
  return (
    <div className="contact-text">
      <TextField
        fullWidth={true}
        margin={"dense"}
        label={props.label}
        type={props.type} 
        variant={props.variant}
        multiline={props.multiline}
        row={props.row}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default TextForm;