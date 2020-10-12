import React from 'react';
import { camera } from 'ionicons/icons';
import {
  IonContent, IonFab, IonFabButton, IonHeader, IonIcon,
  IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton color="danger">
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent >
    </IonPage >
  );
};

export default Tab2;
