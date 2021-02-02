import React from "react";
import { Redirect } from "react-router";
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
  IonAvatar,
  IonButton,
} from "@ionic/react";
import "./styles.css";
import Copyright from "./../Copyright";

type MyState = {
  username: string;
  password: string;
  redirect: boolean;
};

class LogIn extends React.Component<MyState> {
  state: MyState = {
    username: "Name",
    password: "Your Password",
    redirect: false,
  };

  constructor(props: any) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
  }

  async onSignIn() {
    // send a cors http request
    const res = await fetch("http://localhost:5000/login", {
      method: "post",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state["username"],
        password: this.state["password"],
      }),
    });

    const data = await res.json();
    if (res.status === 200) {
      // get data in http response
      console.log(data);
      // let u = data.data.username
      // console.log(u)
      this.setState({ redirect: true });
    } else {
      console.log(data.message);
    }
  }

  render() {
    // if response status == 200, set redirect in state to true
    // render Profile page
    const { redirect } = this.state;
    if (redirect) {
      // return <Redirect to="/Profile"/>;
      // console.log(this.state)
      return (
        <Redirect
          to={{
            pathname: "/Profile",
            state: { currUsername: this.state.username },
          }}
        />
      );
    }

    return (
      <IonContent color="secondary">
        {/* <form> */}
        <IonHeader translucent className="Header">
          <IonToolbar>
            <IonTitle className="Text">Log into your account!</IonTitle>
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

          <IonRow>
            <IonCol className="RowContainer">
              <IonButton
                size="large"
                type="submit"
                onClick={this.onSignIn}
                // routerLink="/Profile"
              >
                Log in
              </IonButton>
              <IonButton size="large" type="submit" routerLink="/SignUp">
                Sign Up
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

export default LogIn;
