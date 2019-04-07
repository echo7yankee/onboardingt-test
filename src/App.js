import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import OpeningHours from "./components/OpeningHours/OpeningHours";
import Titles from "./components/OpeningHours/Titles";
import { createOpeningHours } from "./components/OpeningHours/types";

class App extends Component {
  state = {
    openingHours: [createOpeningHours()],
    message: "",
    maxLimit: 230
  };

  handleMessage = e => {
    this.setState({
      message: e.target.value,
      maxLimit: e.target.maxLength - e.target.value.length
    });
  };

  handleInput = (e, id) => {
    const newOpeningHours = this.state.openingHours.map(openingHour => {
      if (openingHour.id === id) {
        openingHour = {
          ...openingHour,
          [e.target.id]: e.target.value
        };
      }
      return openingHour;
    });

    this.setState({
      openingHours: newOpeningHours
    });
  };

  handleDays = (openingHoursId, dayId) => {
    const newOpeningHours = this.state.openingHours.map(openingHour => {
      if (openingHour.id === openingHoursId) {
        openingHour = {
          ...openingHour,
          days: openingHour.days.map(day => {
            if (day.id === dayId) {
              day = {
                ...day,
                toggle: !day.toggle
              };
            }
            return day;
          })
        };
      }
      return openingHour;
    });

    this.setState({
      openingHours: newOpeningHours
    });
  };

  addOpeningHours = () => {
    this.setState({
      openingHours: [...this.state.openingHours, createOpeningHours()]
    });
  };

  destroy = () => {
    this.setState({
      openingHours: [createOpeningHours()],
      message: "",
      maxLimit: 230
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.destroy();
  };

  render() {
    // console.log(this.state.openingHours);
    // console.log(this.state.message);
    // console.log(this.state.maxLimit);

    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Titles />
          <form onSubmit={this.handleSubmit}>
            <OpeningHours
              handleInput={this.handleInput}
              handleDays={this.handleDays}
              handleMessage={this.handleMessage}
              message={this.state.message}
              addOpeningHours={this.addOpeningHours}
              openingHours={this.state.openingHours}
              maxLimit={this.state.maxLimit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
