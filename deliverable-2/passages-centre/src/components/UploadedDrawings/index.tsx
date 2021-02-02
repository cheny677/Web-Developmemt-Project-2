import React from "react";
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";
// import "./styles.css";
import UploadedDrawing from "./../UploadedDrawing";
import d1 from "./../../images/drawings/d1.jpeg";
import d2 from "./../../images/drawings/d2.jpg";
import d3 from "./../../images/drawings/d3.jpg";
import d4 from "./../../images/drawings/d4.jpg";

class Drawing {
  title: string;
  description: string;
  subtitle: string;
  drawing: string;

  constructor(
    title: string,
    description: string,
    subtitle: string,
    drawing: string
  ) {
    this.title = title;
    this.description = description;
    this.subtitle = subtitle;
    this.drawing = drawing;
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
    drawing: string;
  }[];
  drawings: Drawing[];
  needUpdate: number;
};

class UploadedDrawings extends React.Component<MyProps, MyState> {
  state: MyState = {
    needUpdate: 1,
    data: [
      {
        title: "Madison, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        drawing: d1,
      },
      {
        title: "Amazing, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        drawing: d2,
      },
      {
        title: "Amazing, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        drawing: d3,
      },

      {
        title: "Amazing, WI",
        subtitle: "Destination",
        description:
          "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        drawing: d4,
      },
    ],
    drawings: [],
  };

  generateDrawings() {
    // display photos if needed
    if (this.state.needUpdate === 1) {
      for (let i = 0; i < this.state.data.length; i++) {
        let drawing = new Drawing(
          this.state.data[i].title,
          this.state.data[i].description,
          this.state.data[i].subtitle,
          this.state.data[i].drawing
        );
        this.state.drawings.push(drawing);
      }
      this.setState({ needUpdate: 0 });
    }
  }

  render() {
    return (
      <IonContent color="info">
        <div className="c">
          {this.generateDrawings()}
          {/* {console.log(typeof pic1)} */}
          <IonGrid>
            {this.state.drawings.map((drawing) => (
              <IonRow className="RowContainer">
                <IonCol size="6" className="RowContainer">
                  <UploadedDrawing
                    title={drawing.title}
                    description={drawing.description}
                    subtitle={drawing.subtitle}
                    drawing={drawing.drawing}
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

export default UploadedDrawings;
