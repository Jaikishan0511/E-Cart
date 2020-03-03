import React from "react";
import "./index.modules.scss";
import { withRouter } from "react-router-dom";
const SortAndFilter = props => {
  const SELECT_SORT = [
    { value: "Select" },
    { value: "Highest to lowest" },
    { value: "Lowest to highest" }
  ];
  const { setName, setData, setIsCategoryListOpen, data, name } = props;

  const onSortChange = event => {
    event.preventDefault();
    if (event.target.value !== null) {
      setName(event.target.value);
      if (event.target.value === "Highest to lowest") {
        let sortedData = props.data.sort((a, b) => {
          return b.price - a.price;
        });
        setData(sortedData);
      }
      if (event.target.value === "Lowest to highest") {
        let sortedData = data.sort((a, b) => {
          return a.price - b.price;
        });
        setData(sortedData);
      }
    }
  };

  const onHandleCategories = () => {
    setIsCategoryListOpen(true);
  };

  return (
    <div className="sort-container">
      <div className="category-link" onClick={onHandleCategories}>
        Choose Categories
      </div>
      <div className="header-sort">Sort By</div>
      <select
        className="custom-select"
        onChange={e => onSortChange(e)}
        value={name}
      >
        {SELECT_SORT.map((item, key) => {
          return (
            <option key={key} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default withRouter(SortAndFilter);
