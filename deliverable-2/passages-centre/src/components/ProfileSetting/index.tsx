import React from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonAvatar,
  IonDatetime,
  IonSelectOption,
  IonInput,
  IonSelect,
  IonGrid,
  IonCol,
  IonRow,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { logOutOutline } from "ionicons/icons";
import "./styles.css";
import Copyright from "./../Copyright";
import { Redirect } from "react-router";

type MyProps = {
  location: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: { username: string };
  };
};

type MyState = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  gender: string;
  new_username: string;
  needFetch: number;
  needReceiveUsername: number;
  redirect: boolean;
};

class ProfileSetting extends React.Component<MyProps, MyState> {
  state: MyState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    gender: "",
    new_username: "",
    needFetch: 1,
    needReceiveUsername: 1,
    redirect: false,
  };

  constructor(props: any) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.onSaveChange = this.onSaveChange.bind(this);
    this.receiveUsername = this.receiveUsername.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  async onSaveChange() {
    // send a cors http request
    const res = await fetch("http://localhost:5000/set_profile", {
      method: "post",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        birthday: this.state.birthday,
        gender: this.state.gender,
      }),
    });

    const data = await res.json();
    if (res.status === 200) {
      console.log(data);
    } else {
      console.log(data.message);
    }
  }

  // fetch data from database

  receiveUsername() {
    if (this.state.needReceiveUsername === 1) {
      this.setState({ username: this.props.location.state.username });
      this.setState({ needReceiveUsername: 0 });
    }
    // console.log(this.state.username);
  }

  async fetchData() {
    if (this.state.needFetch === 1) {
      // send a cors http request
      const res = await fetch(
        "http://localhost:5000/profile/" + this.state.username,
        {
          method: "get",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        // get data in http response
        console.log(data);
      } else {
        console.log(data.message);
      }
      // this.setState({ needFetch: 0 });
      this.setState({
        password: "********",
        needFetch: 0,
        email: data.data.email,
      });
    }
  }

  goBack() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      // return <Redirect to="/Profile"/>;
      
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
      <IonPage>
        {this.receiveUsername()}
        <IonHeader>
          <IonToolbar color="danger">
            <IonTitle>User Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={this.goBack}>Back to Profile</IonButton>
          </IonButtons>
          <IonButtons slot="secondary">
            <IonButton >
              <IonIcon slot="icon-only" icon={logOutOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonContent color="tertiary">
          <IonGrid>
            <IonRow className="RowContainer">
              <IonCol size="5">
                <IonItem color="secondary" className="IonItem">
                  <IonAvatar slot="start">John Wick</IonAvatar>
                  <IonLabel>Your Personal Information</IonLabel>
                </IonItem>

                <IonItem color="secondary" className="IonItem">
                  <IonLabel position="floating">Username</IonLabel>
                  <IonInput
                    onIonChange={(e) =>
                      this.setState({ new_username: e.detail.value! })
                    }
                    value={this.state.username}
                  ></IonInput>
                </IonItem>

                <IonItem color="secondary" className="IonItem">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    onIonChange={(e) =>
                      this.setState({ password: e.detail.value! })
                    }
                    value="********"
                  ></IonInput>
                </IonItem>

                <IonItem color="secondary" className="IonItem">
                  <IonLabel position="floating">First Name</IonLabel>
                  <IonInput
                    onIonChange={(e) =>
                      this.setState({ firstName: e.detail.value! })
                    }
                  ></IonInput>
                </IonItem>
                <IonItem color="secondary" className="IonItem">
                  <IonLabel position="floating">Last Name</IonLabel>
                  <IonInput
                    onIonChange={(e) =>
                      this.setState({ lastName: e.detail.value! })
                    }
                  ></IonInput>
                </IonItem>

                <IonItem color="secondary" className="IonItem">
                  <IonLabel position="floating">Email Address</IonLabel>
                  <IonInput
                    onIonChange={(e) =>
                      this.setState({ email: e.detail.value! })
                    }
                    value={this.state.email}
                  ></IonInput>
                </IonItem>

                <IonItem color="secondary" className="IonItem">
                  <IonLabel position="floating">Birth date</IonLabel>
                  <IonDatetime
                    onIonChange={(e) =>
                      this.setState({ birthday: e.detail.value! })
                    }
                  ></IonDatetime>
                </IonItem>

                <IonItem color="secondary" className="IonItem">
                  <IonLabel position="floating">Gender</IonLabel>
                  <IonSelect
                    onIonChange={(e) =>
                      this.setState({ gender: e.detail.value! })
                    }
                  >
                    <IonSelectOption value="">Male</IonSelectOption>
                    <IonSelectOption value="nes">Female</IonSelectOption>
                    <IonSelectOption value="n64">
                      Prefer not to tell
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem
                  button
                  onClick={() => {
                    this.onSaveChange();
                  }}
                  color="secondary"
                  className="IonItem"
                >
                  <IonLabel>Save Changes</IonLabel>
                </IonItem>

                <IonItem
                  button
                  onClick={() => {
                    this.fetchData();
                  }}
                  color="secondary"
                  className="IonItem"
                >
                  <IonLabel>See My Info </IonLabel>
                </IonItem>

                <IonItem color="secondary" className="IonItem">
                  <Copyright />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}

export default ProfileSetting;
