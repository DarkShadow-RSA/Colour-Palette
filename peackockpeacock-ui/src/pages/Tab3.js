import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import "./Tab2.css";
import { colorPalette, options } from "ionicons/icons";
import ColorPalette from "./ColorPalette.json";
import { useEffect, useState } from "react";

const Tab2 = () => {
  const [color, setColor] = useState("Red");
  const [filteredColor, setFilteredColor] = useState(
    ColorPalette.filter((employee) => employee.GroupColor == color)
  );

  useEffect(() => {
    setFilteredColor(
      ColorPalette.filter((employee) => employee.GroupColor == color)
    );
  }, [color]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Peacock-UI</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard
                button
                detail
                // routerLink={`/my/entries/view/${entry.id}`}
              >
                <IonCardHeader>Dark Mode</IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard button detail routerLink={`/my/entries/view/dark`}>
                <IonCardHeader>Popular Brands</IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
