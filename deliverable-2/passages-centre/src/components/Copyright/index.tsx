import React, { Component } from "react";
import { IonText } from "@ionic/react";

class Copyright extends Component {
  render() {
    return (
      <div>
        <IonText color="danger">
          {"Copyright © "}
          {new Date().getFullYear()}
          {"."}
        </IonText>
      </div>
    );
  }
}

export default Copyright;
