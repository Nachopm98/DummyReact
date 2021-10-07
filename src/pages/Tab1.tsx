import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';



const Tab1: React.FC = () => {
  return (
    <><IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>This is a dummy test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>

      <IonCard class="potato">
      <IonCardHeader>
        <IonCardSubtitle>This is a test</IonCardSubtitle>
        <IonCardTitle>Hello world</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin
g, remaining essentially unchanged. It was popularise
d in the 1960s with the 
      </IonCardContent>
      </IonCard>
      </IonPage></>
    
  );
};

export default Tab1;
