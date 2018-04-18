import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Lead.css";
import Button from 'antd/lib/button';

function Lead(props) {
  return (<div className="lead">
      <span> <Button type="primary">{props.firstname}</Button> </span>
      <span>{props.firstname} {props.lastname}</span>
    </div>
  );
}

Lead.propTypes = {
  firstname: PropTypes.string.isRequired
};

export default Lead;
