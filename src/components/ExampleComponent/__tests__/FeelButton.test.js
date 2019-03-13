import React from "react";
import { shallow } from "enzyme";
import FeelButton from "../";

describe("rendering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FeelButton />);
  });

  it("Should render a ant design's <Button />", () => {
    expect(wrapper.find("Button")).toHaveLength(1);
  });

  it("Should render default text", () => {
    expect(
      wrapper
        .find("Button")
        .prop("children")
        .join("")
    ).toEqual("No mames wey i'm feeling happy");
  });

  it("Should render text with prop", () => {
    wrapper.setProps({ feel: "Sad" });
    expect(
      wrapper
        .find("Button")
        .prop("children")
        .join("")
    ).toEqual("No mames wey i'm feeling Sad");
  });
});

describe("Interacting", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = { onClick: jest.fn() };
    wrapper = shallow(<FeelButton {...props} />);
  });

  describe("Clicking the button", () => {
    beforeEach(() => {
      wrapper.prop("onClick")();
    });

    it("should call the onClick callback", () => {
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
