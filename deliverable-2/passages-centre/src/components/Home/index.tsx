import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonButton,
  IonButtons,
} from "@ionic/react";
import "./styles.css";

type MyProps = {
  // 前面是props名字，后面是type
  // for exaaample
  //   message: string;
};

type MyState = {
  // 前面是state名字，后面是type
  // for exaaample
  //   username: string;
  //   password: string;
};

class Home extends React.Component<MyProps, MyState> {
  state: MyState = {
    // 前面是state名字，后面是state的内容
    // for exaaample
    // username: "Name",
    // password: "Your Password",
  };
  render() {
    return (
      <IonContent className="background">
        {/* <div className="background">your code goes here</div> */}

        <IonGrid>
          <IonRow>
            <IonCol size="12" className="RowContainer">
              <IonButtons>
                <IonButton
                  color="primary"
                  size="large"
                  fill="outline"
                  href="./Login"
                >
                  Log in
                </IonButton>
                <IonButton
                  color="danger"
                  size="large"
                  fill="outline"
                  href="./SignUp"
                >
                  Sign up
                </IonButton>
              </IonButtons>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  }
}

export default Home;
