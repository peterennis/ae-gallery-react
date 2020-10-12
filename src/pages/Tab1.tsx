import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Timeline</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
