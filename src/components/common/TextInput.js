import React from "react";

// #14 Return to CourseForm.js to put our new TextInput component to use!

// #10 
// Anytime we create a reusable component that we expect to be used by a lot of people, it is especially important to declare propTypes.
import PropTypes from 'prop-types';

//#1
// Copied title input to start
//This Component is being created to eliminate all forms on CourseForm.js
//We are doing this to keep code dry so,
//Lets create a reusable TextInput Component
function TextInput(props){

    // #8 
    //if props.error is set, and the error isnt an empty string, then add another class to this string.
    //now apply calculated class in div at 9
    let wrapperClass = "form-group";

    // #8 if (props.error && props.error.length > 0){ //ORIG #8 before #13

    // #13 **Look at number 8 example before this**
    //We no longer need to check if props.error exists because we know its there,
    //Now we can simply check if the length is greater than 0.
    if (props.error.length > 0){

        //info: has-error class will add a red line arond the input when its in an error state.
        wrapperClass += " has-error";
    }
    //What we are essentially doing above is:
    //Concatenating strings to dynamically add an extra class name


    //#2
    //First remove anything hardcoded specifically for the title input
    //so we can make this component truly reusable
    return(
    
    // #9
    // added {wrapperClass} in place of "form-group"
    <div className={wrapperClass}>
    
    {/* #3 added {props.id} in place of "title" 
    and changed >Title< to >{props.label}< */}
    <label htmlFor={props.id}>{props.label}</label>
    <div className="field">
      <input
        // #4 added {props.id} in place of "title"
        id={props.id}
        type="text"
        onChange={props.onChange}
        // #5 added {props.name} in place of "title"
        name={props.name}
        className="form-control"
        // #6 added props.value in place of  props.course.title
        value={props.value}
      />
    </div>
    {/* #7 Display Validation Errors */}
    {/* #7 Read Below Code as:
    If there is an error passed in on props, then i want to display a div that displays that error. Display an error, if it occurs, inside this div
    #7 IF THERE's AN ERROR, DiSPLAY THIS DIV */}
    { props.error && <div className="alert alert-danger">{props.error}</div>}
  </div>
    );
}

// #11
// Requre id, name, label, and the onChange handler, make value and error optional.
TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};

// #12
// Declare default prop for error
TextInput.defaultProps = {
    //if no error, then default to empty string (so it doesnt break react code)
    error: ""
};

export default TextInput;