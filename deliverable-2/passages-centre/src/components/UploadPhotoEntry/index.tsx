// import Photo from "../UploadedPhotos/index"
import React from "react";
// import { Redirect } from "react-router";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonInput,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonButton,
} from "@ionic/react";
import "./styles.css";

type MyState = {
    title: string;
    subtitle: string;
    description: string;
    picture: string;
  };


class UploadPhotoEntry extends React.Component<MyState> {
    state = {
        title: "",
        subtitle: "",
        description: "",
        picture: ""
    }

    render() {
        return (

            <IonContent>
            {/* <form> */}
            <IonHeader translucent className="Header">
              <IonToolbar>
                <IonTitle className="Text">Upload your Photo</IonTitle>
              </IonToolbar>
            </IonHeader>
    
            <IonGrid>
            <IonRow className="RowContainer">
                <IonCol size="4">
                  <IonItem>
                    <IonInput
                      name="img"
                      type="text"
                      placeholder={"Image"}
                      onIonChange={(e) =>
                        this.setState({ picture: e.detail.value! })
                      }
                      required
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
    
              <IonRow className="RowContainer">
                <IonCol size="4">
                  <IonItem>
                    <IonInput
                      name="title"
                      type="text"
                      placeholder={"Title"}
                      onIonChange={(e) =>
                        this.setState({ title: e.detail.value! })
                      }
                      required
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
    
              <IonRow className="RowContainer">
                <IonCol size="4">
                  <IonItem>
                    <IonInput
                      name="subtitle"
                      type="text"
                      placeholder={"Subtitle"}
                      onIonChange={(e) =>
                        this.setState({ subtitle: e.detail.value! })
                      }
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>

              <IonRow className="RowContainer">
                <IonCol size="4">
                  <IonItem>
                    <IonInput
                      name="description"
                      type="text"
                      placeholder={"Description"}
                      onIonChange={(e) =>
                        this.setState({ description: e.detail.value! })
                      }
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
    
              <IonRow>
                <IonCol className="RowContainer">
                  <IonButton
                    size="large"
                    type="submit"
                    onClick={this.onUpload}
                    // routerLink="/Profile"
                  >
                    Upload
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
            {/* </form> */}
          </IonContent>
        )
    }

    async onUpload() {
        // send a cors http request
          const res = await fetch(`http://localhost:5000/upload_item/svision/photo/title`, {
            method: "post",
            credentials: "include",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: this.state["title"],
              subtitle: this.state["subtitle"],
              description: this.state["description"],
              picture: this.state["picture"]
            }),
          });
          // get data in http response
          const data = await res.json();
          console.log(data);
        }
}

export default UploadPhotoEntry