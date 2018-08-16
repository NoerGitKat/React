import React from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const { listName, activities } = this.props.listProp;
    return (
      <div id={`${listName}Container`}> 
        <ListHeader title={listName} />
        { 
          // Here I am mapping thorugh the activities array within the listProp object 
          // I am assigning each object within to a separate <ListItem /> component instance.
        }
        {activities.map((activity, i) => (
          <ListItem key={i} activityProp={activity} />
        ))}
      </div>
    );
  }
}

export default List;
