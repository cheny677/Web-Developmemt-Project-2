import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import UploadedItem from "./../UploadedItem"
import "./styles.css"

const UploadedContent: React.FC = () => (
  <IonContent>
    <IonGrid className="grid">
        <IonRow className="row">
            <IonCol>
                <div><UploadedItem /></div>
            </IonCol>
            <IonCol>
                <div><UploadedItem /></div>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <div><UploadedItem /></div>
            </IonCol>
            <IonCol>
                <div><UploadedItem /></div>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <div><UploadedItem /></div>
            </IonCol>
            <IonCol>
                <div><UploadedItem /></div>
            </IonCol>
        </IonRow>

    </IonGrid>
  </IonContent>
);

export default UploadedContent;