import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Awesome cocktails",
        info:
          "Very awesomely awesome Very awesomely awesome Very awesomely awesome"
      },
      {
        icon: <FaBeer />,
        title: "Awesome Drinks",
        info:
          "Very awesomely awesome Very awesomely awesome Very awesomely awesome"
      },
      {
        icon: <FaHiking />,
        title: "Awesome site seeing",
        info:
          "Very awesomely awesome Very awesomely awesome Very awesomely awesome"
      },
      {
        icon: <FaShuttleVan />,
        title: "Awesome rides",
        info:
          "Very awesomely awesome Very awesomely awesome Very awesomely awesome"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
