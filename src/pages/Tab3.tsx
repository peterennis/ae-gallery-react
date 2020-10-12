import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Namigram</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src="/assets/png/corin-min.png" alt="corin" />
        <img src="/assets/png/arehta-min.png" alt="arehta" />
        <img src="/assets/png/raymond-min.png" alt="raymond" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
