import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';

import ReactTestRenderer from "react-test-renderer";


describe("Actions", () => {
    describe("Render", () => {
      it("should be a valid React Element", () => {
        expect(React.isValidElement(<App />)).toBeTruthy();
      });
  
      it("should render without throwing an error", () => {
        expect(() =>
          ReactTestRenderer.create(<App />)
        ).not.toThrow();
      });
    });
  
    describe("Snapshots", () => {
      it("matches the default snapshot", () => {
        const tree = ReactTestRenderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
