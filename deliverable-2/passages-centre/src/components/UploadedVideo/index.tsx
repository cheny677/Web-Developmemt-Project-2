import React from "react";
import {
  IonCard,
  IonItem,
} from "@ionic/react";
import "./styles.css";
import { Player, BigPlayButton, ControlBar } from "video-react";

// import ReactPlayer from "react-player";

// import v1 from "./../../images/videos/v1.mp4";

type MyProps = {
  title: string;
  description: string;
  subtitle: string;
  video: string;
};

class UploadedVideo extends React.Component<MyProps> {
  render() {
    return (
      <IonCard button className="card">
        {/* <img src={madison} alt="madison" /> */}
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=DLX62G4lc44&t=859s" /> */}
        <IonItem>
          <Player
            playsInline
            // poster="https://material-ui.com/static/images/grid-list/morning.jpg"
            src={this.props.video}
            fluid=""
          >
            <BigPlayButton position="center" />
            <ControlBar autoHide={false} className="my-class" />
          </Player>
        </IonItem>

        {/* <IonCardHeader>
          <IonCardSubtitle>{this.props.subtitle}</IonCardSubtitle>
          <IonCardTitle>{this.props.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{this.props.description}</IonCardContent> */}
      </IonCard>
    );
  }
}

export default UploadedVideo;
