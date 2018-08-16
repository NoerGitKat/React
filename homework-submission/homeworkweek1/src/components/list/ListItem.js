import React from "react";

const ListItem = ({ activityProp }) => {
  {
    // Destructuring again
  }
  const { description, deadline } = activityProp;
  return (
    <li>
      {
        // Here I am presenting the values found in the single activity object
      }
      {description}, {deadline}
    </li>
  );
};

export default ListItem;
