import React from "react";
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
  IonAvatar,
  IonAlert,
} from "@ionic/react";
import "./styles.css";
import Copyright from "./../Copyright";

type MyState = {
  username: string;
  email: string;
  password: string;
  pwConfirm: string;
  showAlert: boolean;
};
class SignUp extends React.Component<MyState> {
  state: MyState = {
    username: "Name",
    email: "Your Email Address",
    password: "Your Password",
    pwConfirm: "Enter Your Password Again",
    showAlert: false,
  };

  constructor(props: any) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
  }

  async onRegister() {
    // send a cors http request
    if (this.state.password === this.state.pwConfirm) {
      const res = await fetch("http://localhost:5000/register", {
        method: "post",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state["username"],
          password: this.state["password"],
          email: this.state["email"],
        }),
      });
      // get data in http response
      const data = await res.json();
      console.log(data);
    } else {
      this.setState({ showAlert: true });
    }
  }

  render() {
    return (
      <IonContent color="tertiary">
        <IonAlert
          isOpen={this.state.showAlert}
          onDidDismiss={() => this.setState({ showAlert: false })}
          header={"Creating account failed"}
          // subHeader={"Re-enter your password!"}
          message={"Your passwords do not matech! Re-enter your password!"}
          buttons={["Okay!"]}
        />
        {/* <form> */}
        <IonHeader translucent className="Header">
          <IonToolbar>
            <IonTitle className="Text">Create your account!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow className="RowContainer">
            <IonCol size="4" className="RowContainer">
              <IonAvatar>
                <img
                  src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                  alt="logo"
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonRow className="RowContainer">
            <IonCol size="4">
              <IonItem>
                <IonInput
                  name="name"
                  type="text"
                  placeholder={this.state.username}
                  onIonChange={(e) =>
                    this.setState({ username: e.detail.value! })
                  }
                  clearInput
                  required
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="RowContainer">
            <IonCol size="4">
              <IonItem>
                <IonInput
                  name="email"
                  type="email"
                  placeholder={this.state.email}
                  onIonChange={(e) => this.setState({ email: e.detail.value! })}
                  required
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow className="RowContainer">
            <IonCol size="4">
              <IonItem>
                <IonInput
                  name="password"
                  type="password"
                  placeholder={this.state.password}
                  onIonChange={(e) =>
                    this.setState({ password: e.detail.value! })
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
                  name="confirm"
                  type="password"
                  placeholder={this.state.pwConfirm}
                  onIonChange={(e) =>
                    this.setState({ pwConfirm: e.detail.value! })
                  }
                  required
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="RowContainer">
              <IonButton size="large" type="submit" onClick={this.onRegister}>
                Register
              </IonButton>
              <IonButton size="large" type="submit" routerLink="/LogIn">
                Log In
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="RowContainer">
              <Copyright />
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* </form> */}
      </IonContent>
    );
  }
}

export default SignUp;
