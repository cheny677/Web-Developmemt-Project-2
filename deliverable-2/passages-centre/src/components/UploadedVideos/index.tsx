import React from "react";
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";
// import "./styles.css";
import UploadedVideo from "./../UploadedVideo";
// import ReactPlayer from "react-player";
import v1 from "./../../images/videos/v1.mp4";
import v2 from "./../../images/videos/v2.mp4";

class Video {
  title: string;
  description: string;
  subtitle: string;
  video: string;

  constructor(
    title: string,
    description: string,
    subtitle: string,
    video: string
  ) {
    this.title = title;
    this.description = description;
    this.subtitle = subtitle;
    this.video = video;
  }
}

type MyProps = {
  // 前面是props名字，后面是type
  // for exaaample
  //   message: string;
};

type MyState = {
  data: {
    title: string;
    subtitle: string;
    description: string;
    video: string;
  }[];
  videos: Video[];
  needUpdate: number;
};

class UploadedVideos extends React.Component<MyProps, MyState> {
  state: MyState = {
    needUpdate: 1,
    data: [
      {
        title: "Madison, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        video: v1,
      },
      {
        title: "Amazing, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        video: v2,
      },
    ],
    videos: [],
  };

  generateVideos() {
    // display photos if needed
    if (this.state.needUpdate === 1) {
      for (let i = 0; i < this.state.data.length; i++) {
        let video = new Video(
          this.state.data[i].title,
          this.state.data[i].description,
          this.state.data[i].subtitle,
          this.state.data[i].video
        );
        this.state.videos.push(video);
      }
      this.setState({ needUpdate: 0 });
    }
  }

  render() {
    return (
      <IonContent color="info">
        <div className="c">
          {this.generateVideos()}
          {/* {console.log(typeof pic1)} */}
          <IonGrid>
            {this.state.videos.map((video) => (
              <IonRow className="RowContainer">
                <IonCol size="10" className="RowContainer">
                  <UploadedVideo
                    title={video.title}
                    description={video.description}
                    subtitle={video.subtitle}
                    video={video.video}
                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </div>
      </IonContent>
    );
  }
}

export default UploadedVideos;
