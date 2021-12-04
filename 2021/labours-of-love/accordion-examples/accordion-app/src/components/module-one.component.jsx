import React, {useState} from "react";

import "./accordion.styles.css";

import {Data} from "./module-data.js";

import {BiDownArrow, BiRightArrow, BiRadioCircle} from "react-icons/bi";
import {HiDocumentText} from "react-icons/hi";

function ModuleOne() {
  const [click, setClick] = useState(false);

  const toggle = index => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <div className="accordion-container">
      {Data.map((item, index) => {
        if (item.module === "Orientation")
          return (
            <div
              className="accordion-wrapper"
              onClick={() => toggle(index)}
              key={index}
            >
              <div className="accordion-module-heading">
                <span>
                  {click === index ? <BiRightArrow /> : <BiDownArrow />}
                </span>
                <h1 className="accordion-header">
                  {item.module.toUpperCase()}
                </h1>
              </div>
              {click === index ? (
                <div className="accordion-dropdown">
                  <ul className="accordion-dropdown-items">
                    <li className="module-item">
                      <div className="item-info">
                        <div className="item-title" id="header">
                          {item.item0.toUpperCase()}
                        </div>
                      </div>
                    </li>
                    <li className="module-item">
                      <div className="module-item-wrapper">
                        <a href="#"></a>
                        <span className="item-icon">
                          <HiDocumentText />
                        </span>
                        <div className="item-info">
                          <div className="item-title">
                            <span className="item-name">
                              <a className="item-link" href="#">
                                {item.item1.toUpperCase()}
                              </a>
                            </span>
                          </div>
                          <div className="item-details">
                            <div className="requirement-description">
                              <span className="unfulfilled">View</span>
                            </div>
                          </div>
                        </div>
                        <div className="item-status">
                          <i className="icon-radio">
                            <BiRadioCircle />
                          </i>
                        </div>
                      </div>
                    </li>
                    <li className="module-item">
                      <div className="module-item-wrapper">
                        <a href="#"></a>
                        <span className="item-icon">
                          <HiDocumentText />
                        </span>
                        <div className="item-info">
                          <div className="item-title">
                            <span className="item-name">
                              <a className="item-link" href="#">
                                {item.item2.toUpperCase()}
                              </a>
                            </span>
                          </div>
                          <div className="item-details">
                            <div className="requirement-description">
                              <span className="unfulfilled">View</span>
                            </div>
                          </div>
                        </div>
                        <div className="item-status">
                          <i className="icon-radio">
                            <BiRadioCircle />
                          </i>
                        </div>
                      </div>
                    </li>
                    <li className="module-item">
                      <div className="module-item-wrapper">
                        <a href="#"></a>
                        <span className="item-icon">
                          <HiDocumentText />
                        </span>
                        <div className="item-info">
                          <div className="item-title">
                            <span className="item-name">
                              <a className="item-link" href="#">
                                {item.item3.toUpperCase()}
                              </a>
                            </span>
                          </div>
                          <div className="item-details">
                            <div className="requirement-description">
                              <span className="unfulfilled">View</span>
                            </div>
                          </div>
                        </div>
                        <div className="item-status">
                          <i className="icon-radio">
                            <BiRadioCircle />
                          </i>
                        </div>
                      </div>
                    </li>
                    <li className="module-item">
                      <div className="module-item-wrapper">
                        <a href="#"></a>
                        <span className="item-icon">
                          <HiDocumentText />
                        </span>
                        <div className="item-info">
                          <div className="item-title">
                            <span className="item-name">
                              <a className="item-link" href="#">
                                {item.item4.toUpperCase()}
                              </a>
                            </span>
                          </div>
                          <div className="item-details">
                            <div className="requirement-description">
                              <span className="unfulfilled">View</span>
                            </div>
                          </div>
                        </div>
                        <div className="item-status">
                          <i className="icon-radio">
                            <BiRadioCircle />
                          </i>
                        </div>
                      </div>
                    </li>
                    <li className="module-item">
                      <div className="module-item-wrapper">
                        <a href="#"></a>
                        <span className="item-icon">
                          <HiDocumentText />
                        </span>
                        <div className="item-info">
                          <div className="item-title">
                            <span className="item-name">
                              <a className="item-link" href="#">
                                {item.item5.toUpperCase()}
                              </a>
                            </span>
                          </div>
                          <div className="item-details">
                            <div className="requirement-description">
                              <span className="unfulfilled">View</span>
                            </div>
                          </div>
                        </div>
                        <div className="item-status">
                          <i className="icon-radio">
                            <BiRadioCircle />
                          </i>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          );
      })}
    </div>
  );
}

export default ModuleOne;
