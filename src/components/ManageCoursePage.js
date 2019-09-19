import React, {useState} from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
  //Use array destructuring
  const [ course, setCourse ] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    catagory: ""

  });


  // #1 Way
  // function handleTitleChange(event){

    //to Avoid Mutating State, lets create a copy of the course object
      //Create updatedCourse and set it to the spread of course

    // const updatedCourse = {...course, title: event.target.value};

    //   updatedCourse.title = event.target.value; is the same as title: even.target.value
    // it just allows for more dry code by adding it into the same line as ...course
    // but seperating with a comma,,,

    //Now we can type in our inputs in title
    //Still need to add change handlers for author and catagory

  //   setCourse(updatedCourse);
  // }

  //#2 Explanation
  //Creating a changeHandler for each input can be daunting. Thankfully, there is a simple pattern for creating a single changeHandler for each form.
  //This is an example of replicating the above code to get the same input results for the Author Input. Could also copy paste and change to work for catagory.
  // # 2 Way is jsut a copy of #1 but changed name to fit author input
  // function handleAuthorChange(event){
  //   const updatedCourse = {...course, author: event.target.value};
  //   setCourse(updatedCourse);
  // }


  // #3 Way! The most dry and changed function to work for every input
  //This way allows us to not create a new handleChange for each input yay!

    //Adding ({ target }) instead of (event) is the same as constt { target } = event;
    function handleChange({ target }){
    
    //Set a property on this object based on the value of this variable.
    //event.target.name is equal to title so this will end up setting the title property
    const updatedCourse = {...course, [target.name]: target.value};

    setCourse(updatedCourse);
  }

  //#4 is more Dificult but the same as #3 just more dry
  //I hope all these steps help understanding the different and more dry ways to write this code.
  //#4
  // function handleChange({ target }){
  //   setCourse({
  //     ...course,
  //     [target.name]: target.value
  //   });
  // }

  return (

    <>
      <h2>Manage Course</h2>
      {/* changed onTitleChange to onChange, anddddd changed handleTitleChange to handleChange to allow use with every input and not just title (author and catagory are the other inputs)  */}
      <CourseForm course={course} onChange={handleChange} />
    </>

  );
};

export default ManageCoursePage;
