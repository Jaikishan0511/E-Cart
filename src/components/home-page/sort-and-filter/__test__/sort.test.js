import React from "react";
import SortAndFilter from "../index";
import ReactTestRenderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
const SortAndFilterComp = (
    <Router>
      <SortAndFilter />
    </Router>
  );
describe("Actions", () => {
    describe("Render", () => {
      it("should be a valid React Element", () => {
        expect(React.isValidElement(<SortAndFilter />)).toBeTruthy();
      });
  
      it("should render without throwing an error", () => {
        expect(() =>
          ReactTestRenderer.create(SortAndFilterComp)
        ).not.toThrow();
      });
    });
  
    describe("Snapshots", () => {
      it("matches the default snapshot", () => {
        const tree = ReactTestRenderer.create(SortAndFilterComp).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });