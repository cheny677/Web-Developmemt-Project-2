import React from "react";
import {
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonPage,
  IonButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonSearchbar,
} from "@ionic/react";
import { search, download, settings } from "ionicons/icons";
import UploadedVideos from "./../UploadedVideos";
import UploadedPhotos from "./../UploadedPhotos";
import UploadedDrawings from "./../UploadedDrawings";
import { Redirect } from "react-router";
import Upload from "./../Upload";
// import { settings } from "cluster";

type MyProps = {
  location: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: { currUsername: string };
  };
};

type MyState = {
  selectedTab: number;
  redirect: boolean;
  username: string;
  needUpdateUsername: number;
  // new: string;
};

class Profile extends React.Component<MyProps, MyState> {
  state: MyState = {
    selectedTab: 0,
    redirect: false,
    username: "",
    needUpdateUsername: 1,
  };
  receiveUsername() {
    if (this.state.needUpdateUsername === 1) {
      this.setState({ username: this.props.location.state.currUsername });
      this.setState({ needUpdateUsername: 0 });
    }
    // console.log(this.state.username);
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: "/ProfileSetting",
            state: { username: this.state.username },
          }}
        />
      );
    }
    this.receiveUsername();
    return (
      <IonPage>
        <IonContent color="secondary">
          {/* first tool bar */}
          <IonToolbar color="dark">
            <IonButtons slot="secondary">
              <Upload username={this.state.username}/>

              {/* <IonButton fill="solid" color="tertiary">
                Upload Photos
                <IonIcon slot="end" icon={cloudUpload} />
              </IonButton>

              <IonButton fill="solid" color="warning">
                Upload Videos
                <IonIcon slot="end" icon={cloudUpload} />
              </IonButton>

              <IonButton fill="solid" color="danger">
                Upload Drawings
                <IonIcon slot="end" icon={cloudUpload} />
              </IonButton> */}

              <IonButton>
                <IonIcon slot="icon-only" icon={download}></IonIcon>
              </IonButton>

              <IonButton
                onClick={() => {
                  this.setState({ redirect: true });
                }}
              >
                <IonIcon slot="icon-only" icon={settings}></IonIcon>
              </IonButton>
            </IonButtons>

            <IonTitle>All Your Works</IonTitle>
          </IonToolbar>
          {/* the search bar */}
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton onClick={() => {}}>
                <IonIcon slot="icon-only" icon={search} />
              </IonButton>
            </IonButtons>
            <IonSearchbar placeholder="Search Your Works" />
          </IonToolbar>

          {/* tabs for selecting photos, drawings and videos */}
          <IonToolbar>
            <IonSegment color="tertiary" value="all">
              <IonSegmentButton
                value="photos"
                onClick={() => this.setState({ selectedTab: 0 })}
              >
                Photos
              </IonSegmentButton>
              <IonSegmentButton
                value="drawings"
                onClick={() => this.setState({ selectedTab: 1 })}
              >
                Drawings
              </IonSegmentButton>
              <IonSegmentButton
                value="videos"
                onClick={() => this.setState({ selectedTab: 2 })}
              >
                Videos
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
          {/* display the selected content */}
          {this.state.selectedTab === 0 && <UploadedPhotos />}
          {this.state.selectedTab === 1 && <UploadedDrawings />}
          {this.state.selectedTab === 2 && <UploadedVideos />}
        </IonContent>
      </IonPage>
    );
  }
}

export default Profile;
