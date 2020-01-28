import React from "react";
import Item from "./Item";

function TitleList(props) {
  let titles = "";
  if (props.movies) {
    titles = props.movies.map(function (title, i) {
      if (i < 5) {
        return (
          <Item key={title.id} movie={title} />
        );  
      } 
      return (<div key={title.id} />);
    }); 
  } 
  
  return (
    <div 
      className="TitleList"
      style={titleStyle} 
      data-loaded={props.movies && props.movies.length > 0}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {titles}
        </div>
      </div>
    </div>
  );
}

const titleStyle = {
    width: '50%',
    margin: '40px auto'
}
export default TitleList;