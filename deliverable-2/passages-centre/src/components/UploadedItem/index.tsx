import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent} from '@ionic/react';
import madison from './static/madison.jpg'
import "./styles.css";

const UploadedItem: React.FC = () => {
  return (
    <IonCard button className="card">
      <img src={madison} alt="madison" />
      <IonCardHeader>
        <IonCardSubtitle>Destination</IonCardSubtitle>
        <IonCardTitle>Madison, WI</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
      </IonCardContent>
    </IonCard>
  );
};

export default UploadedItem;