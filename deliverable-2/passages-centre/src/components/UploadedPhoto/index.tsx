import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import "./styles.css";
// import madison from "./static/madison.jpg";

type MyProps = {
  title: string;
  description: string;
  subtitle: string;
  picture: string;
};

class UploadedPhoto extends React.Component<MyProps> {
  render() {
    return (
      <IonCard button className="card">
        <img src={this.props.picture} alt="madison" />
        <IonCardHeader>
          <IonCardSubtitle>{this.props.subtitle}</IonCardSubtitle>
          <IonCardTitle>{this.props.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{this.props.description}</IonCardContent>
      </IonCard>
    );
  }
}

export default UploadedPhoto;
