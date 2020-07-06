import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactHtmlParser from "react-html-parser";

import "./SearchResults.css";

const SearchResults = ({ search, loading }) => {
  return (
    <TransitionGroup>
      {search
        ? search.map((item) => (
            <CSSTransition timeout={500} classNames="fade" key={item.pageid}>
              <a
                href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="item"
              >
                <div>
                  <strong>{item.title}</strong>
                  <p>{ReactHtmlParser(item.snippet)}</p>
                </div>
              </a>
            </CSSTransition>
          ))
        : ""}
    </TransitionGroup>
  );
};

export default SearchResults;
