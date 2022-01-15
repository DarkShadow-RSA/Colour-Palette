import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import socialColour from "./SocialAppColor.json";
import "./Tab1.css";

const Tab1 = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Peacock-UI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value)}
        ></IonSearchbar>

        <IonGrid>
          {socialColour
            .filter((name) =>
              name.Name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((item) => (
              <IonCard key={item.Name}>
                <IonRow>
                  <IonCardHeader>{item.Name}</IonCardHeader>
                </IonRow>
                <IonRow>
                  {item.Color.map((colorItem) => (
                    <IonCol
                      key={colorItem}
                      style={{ backgroundColor: colorItem, height: "4em" }}
                    ></IonCol>
                  ))}
                </IonRow>
                <IonRow className="ion-text-center">
                  {item.Color.map((colorItem) => (
                    <IonCol key={colorItem}>{colorItem}</IonCol>
                  ))}
                </IonRow>
              </IonCard>
            ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
