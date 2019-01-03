import React, { Component } from "react";

interface CustomInputProps {
  className?: string;
  id?: string;
  value?: string;
  name?: string;
  onChange?: any;
  type?: string;
}

class CustomInput extends Component<CustomInputProps> {
  render() {
    return (
      <input
        id={this.props.id}
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.value);
  };
}

export default CustomInput;
