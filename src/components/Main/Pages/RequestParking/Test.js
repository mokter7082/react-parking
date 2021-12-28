import axios from "axios";
import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var url = "http://parkingkoi.xyz/laravel_api/public/monthly-places-v2";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return <div></div>;
  }
}
