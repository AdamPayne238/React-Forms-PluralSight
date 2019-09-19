import React from "react";

//Numbers Start At TextInput.js where we start to build a reusable Input Component to use instead of individual title, author, and category input forms....lame!
// #15 import TextInput
import TextInput from './common/TextInput';

function CourseForm(props) {
  return (
    <form>
      {/* #16 Remove this Code and then add TextInput to <input id="title" etccc
      
        <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field"> 

          #16 added TextInput in place of input*/}
          <TextInput
            id="title"
            // #20 Add Label Prop and set to title
            label="title"
            // #17 *Remove* type="text"
            //Add onChange and pass onTitleChange from ManageCoursePage.js
            //Now onChange
            onChange={props.onChange}
            name="title"
            // #18 *Remove* className="form-control"
            //set Value to props.course.title from empty string ""
            value={props.course.title}
          />
        {/* #19 Remove Closing Divs 
        </div>
      </div> */}

      {/* Author is a select input and not a textinput therefore we will leave this alone for now */}
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            //set Value to props.course.authorId
            //The || says if the value is null then set it to an empty string ""
            //instead of throwing an error on react inspect tools
            //JS logical OR operator || 
            value={props.course.authorId || ""}
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

          {/* #21 RINSE AND REPEAT FOR CATEGORY */}
          <TextInput
            id="category"
            //added onCHange to allow typing in catory input field
            label="category"
            onChange={props.onChange}
            name="category"
            //set Value to props.course.catagory from empty string ""
            value={props.course.category}
          />


      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
