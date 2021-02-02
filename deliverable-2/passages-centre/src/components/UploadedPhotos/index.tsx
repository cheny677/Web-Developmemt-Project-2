import React from "react";
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";
import "./styles.css";
import UploadedPhoto from "./../UploadedPhoto";
// import { isThisTypeNode } from "typescript";
import pic1 from "./../../images/photos/pic1.jpg";
import pic2 from "./../../images/photos/pic2.jpg";
import pic3 from "./../../images/photos/pic3.jpg";
import pic4 from "./../../images/photos/pic4.jpg";

class Photo {
  title: string;
  description: string;
  subtitle: string;
  picture: string;

  constructor(
    title: string,
    description: string,
    subtitle: string,
    picture: string
  ) {
    this.title = title;
    this.description = description;
    this.subtitle = subtitle;
    this.picture = picture;
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
    picture: string;
  }[];
  photos: Photo[];
  needUpdate: number;
};

class UploadedPhotos extends React.Component<MyProps, MyState> {
  state: MyState = {
    needUpdate: 1,
    data: [
      {
        title: "Madison, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        picture: pic1,
      },
      {
        title: "Amazing, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        picture: pic2,
      },
      {
        title: "Amazing, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        picture: pic3,
      },

      {
        title: "Amazing, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        picture: pic4,
      },
    ],
    photos: [],
  };

  generatePhotos() {
    // display photos if needed
    if (this.state.needUpdate === 1) {
      for (let i = 0; i < this.state.data.length; i++) {
        let photo = new Photo(
          this.state.data[i].title,
          this.state.data[i].description,
          this.state.data[i].subtitle,
          this.state.data[i].picture
        );
        this.state.photos.push(photo);
      }
      this.setState({ needUpdate: 0 });
    }
  }

  render() {
    return (
      <IonContent color="info">
        <div className="c">
          {this.generatePhotos()}
          {/* {console.log(typeof pic1)} */}
          <IonGrid>
            {this.state.photos.map((photo) => (
              <IonRow className="RowContainer">
                <IonCol size="6" className="RowContainer">
                  <UploadedPhoto
                    title={photo.title}
                    description={photo.description}
                    subtitle={photo.subtitle}
                    picture={photo.picture}
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

export default UploadedPhotos;
