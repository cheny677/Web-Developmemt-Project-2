import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import "./styles.css";
// import pic1 from "./static/pic1.jpg";

type MyProps = {
  title: string;
  description: string;
  subtitle: string;
  drawing: string;
};

class UploadedDrawing extends React.Component<MyProps> {
  render() {
    return (
      <IonCard button className="card">
        <img src={this.props.drawing} alt="madison" />
        <IonCardHeader>
          <IonCardSubtitle>{this.props.subtitle}</IonCardSubtitle>
          <IonCardTitle>{this.props.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{this.props.description}</IonCardContent>
      </IonCard>
    );
  }
}

export default UploadedDrawing;
