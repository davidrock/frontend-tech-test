import React, { Component, ChangeEvent } from "react";
import CustomInput from "../components/forms/CustomInput";

export default class Login extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      nome: ""
    };

    // this.setNome = this.setNome.bind(this);
  }

  setNome = (nome: string) => {
    this.setState({ nome: nome });
    console.log(this.state);
  };

  public render() {
    return (
      <div className="container">
        <div>Faça seu login</div>
        <CustomInput id="nome" type="text" onChange={this.setNome} />
      </div>
    );
  }
}
