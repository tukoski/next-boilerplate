import React from "react";
// import PropTypes from 'prop-types';
import { Button } from "antd";

function FeelButton({ feel, onClick }) {
  return <Button onClick={onClick}>No mames wey i'm feeling {feel}</Button>;
}

FeelButton.defaultProps = {
  feel: "happy"
}

export default FeelButton;
