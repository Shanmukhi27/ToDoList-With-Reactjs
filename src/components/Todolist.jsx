import React from "react";

function Todolist(props) {
  // const [isDone,setfun]=useState(false);
  //   function handleClick(){
  //          setfun((prev)=>{
  //            return !prev;
  //          })
  //   }

  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.items}
    </li>
  );
}

export default Todolist;
