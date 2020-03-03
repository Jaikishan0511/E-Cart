import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header";
import ProductContainer from "./products";
import Categories from "./categories";
import "./index.modules.scss";
import SortAndFilter from "./sort-and-filter";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("select");
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);

  let badgeArray = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const [badge, setBadge] = useState(badgeArray.length);
  const [screener, setScreener] = useState("All");
  
  const fetchData = async () => {
    const response = await axios.get("/api/products");
    localStorage.setItem(
      "products",
      JSON.stringify(response.data.products.products)
    );
    if (name === "Highest to lowest") {
      let sortedData = response.data.products.products.sort((a, b) => {
        return b.price - a.price;
      });
      setData(sortedData);
    }
    if (name === "Lowest to highest") {
      let sortedData = response.data.products.products.sort((a, b) => {
        return a.price - b.price;
      });
      setData(sortedData);
    }
    if (name === "select") {
      setData(response.data.products.products);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="HomePage">
        <Header
          setData={setData}
          badge={badge}
          setName={setName}
        />
        <div className="page-content">
          <Categories
            setName={setName}
            setData={setData}
            isCategoryListOpen={isCategoryListOpen}
            setIsCategoryListOpen={setIsCategoryListOpen}
            screener={screener}
            setScreener={setScreener}
          />
          <div className="product-filter">
            {data.length > 0 && (
              <SortAndFilter
                name={name}
                setName={setName}
                data={data}
                setData={setData}
                setIsCategoryListOpen={setIsCategoryListOpen}
              />
            )}
            <ProductContainer
              data={data}
              setBadge={setBadge}
              badge={badge}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
