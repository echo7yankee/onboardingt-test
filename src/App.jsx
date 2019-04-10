import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import OpeningHours from "./components/OpeningHours/OpeningHours";
import Titles from "./components/OpeningHours/Titles";
import { createOpeningHours } from "./components/OpeningHours/types";

class App extends Component {
  state = {
    openingHours: [createOpeningHours()],
    message: "",
    maxLimit: 230,
    valid: false
  };

  handleMessage = e => {
    this.setState({
      message: e.target.value,
      maxLimit: e.target.maxLength - e.target.value.length
    });
  };

  handleInput = (e, id) => {
    //const rules = new RegExp(/^[0-9-:]+$/);
    const rules = new RegExp(/^[0-9-:]+$|^$/);

    const valid = rules.test(e.target.value);
    console.log(valid);

    if (valid === false) {
      return;
    }

    this.setState({
      openingHours: this.state.openingHours.map(openingHour => {
        if (openingHour.id === id) {
          openingHour = {
            ...openingHour,
            [e.target.id]: e.target.value
          };
        }

        return openingHour;
      })
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

  handleDeleteItem = id => {
    this.setState({
      openingHours: this.state.openingHours.filter(openingHour => {
        return openingHour.id !== id;
      })
    });
  };

  handleClearItems = () => {
    this.setState({
      openingHours: [createOpeningHours()]
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
    //console.log(this.state.openingHours);
    // console.log(this.state.message);
    // console.log(this.state.maxLimit);

    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Titles />
          <form onSubmit={this.handleSubmit}>
            <OpeningHours
              length={this.state.openingHours.length}
              handleInput={this.handleInput}
              handleDays={this.handleDays}
              handleMessage={this.handleMessage}
              handleDeleteItem={this.handleDeleteItem}
              handleClearItems={this.handleClearItems}
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
