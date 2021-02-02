import React from "react";
import { IonButton, IonGrid, IonCol, IonRow } from "@ionic/react";
// import { cloudUpload } from "ionicons/icons";
// import "./styles.css";
// import { isConstructorDeclaration } from 'typescript';

type MyProps = {
  username: string;
};

type Mystate = {
  selectedFile: any;
};

class Upload extends React.Component<MyProps, Mystate> {
  state: Mystate = {
    // Initially, no file is selected
    selectedFile: null,
  };

  constructor(props: any) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  cancel() {
    this.setState({ selectedFile: null });
  }
  async onFileUpload() {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("file", this.state.selectedFile);

    // Details of the uploaded file
    // console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    const res = await fetch(
      `http://localhost:5000/upload_item/usr_name/category/${this.state.selectedFile.name}`,
      {
        method: "post",
        credentials: "include",
        mode: "cors",
        body: formData,
      }
    );
    console.log(res.json());
    this.setState({ selectedFile: null });
  }

  onFileChange(event: any) {
    this.setState({ selectedFile: event.target.files[0] });
  }

  render() {
    // {
    //   console.log(this.props.username);
    // }
    if (this.state.selectedFile) {
      return (
        <IonGrid>
          {/* <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
            <button onClick={this.onFileUpload}>upload</button>
          </div> */}
          <IonRow>
            <IonCol>File Details:</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>File Name: {this.state.selectedFile.name}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>File Type: {this.state.selectedFile.type}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton fill="solid" color="danger" onClick={this.onFileUpload}>upload</IonButton>
            </IonCol>
            <IonCol>
              <IonButton fill="solid" color="danger" onClick={this.cancel}>Cancel</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      );
    }

    return (
      <IonButton fill="solid" color="tertiary" shape="round">
        Upload File
        
        <input type="file" onChange={this.onFileChange} />
        
      </IonButton>
    );
  }
}

export default Upload;
