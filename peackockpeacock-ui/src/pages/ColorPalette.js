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
        <IonItem style={{ padding: "20px", borderRadius: "50px" }}>
          <IonLabel>Color</IonLabel>
          <IonSelect
            onIonChange={(e) => setColor(e.detail.value)}
            value={color}
          >
            <IonSelectOption value="Yellow">Yellow</IonSelectOption>
            <IonSelectOption value="Orange">Orange</IonSelectOption>
            <IonSelectOption value="Red">Red</IonSelectOption>
            <IonSelectOption value="Pink">Pink</IonSelectOption>
            <IonSelectOption value="Violet">Violet</IonSelectOption>
            <IonSelectOption value="Blue">Blue</IonSelectOption>
            <IonSelectOption value="Green">Green</IonSelectOption>
            <IonSelectOption value="Brown">Brown</IonSelectOption>
            <IonSelectOption value="Gray">Gray</IonSelectOption>
          </IonSelect>
        </IonItem>

        <div className="containerGrid">
          {filteredColor.map((item) =>
            item.Color.map((innerItem) => (
              <div className="itemGrid" key={innerItem.ColorName}>
                <IonCard>
                  <IonCardHeader
                    style={{
                      backgroundColor: innerItem.HexCode,
                      height: "5em",
                    }}
                  ></IonCardHeader>
                  <IonCardContent>
                    <h4 class="ion-text-capitalize">
                      {innerItem.ColorName.toLowerCase()}
                    </h4>

                    <IonLabel>{innerItem.HexCode}</IonLabel>
                  </IonCardContent>
                </IonCard>
              </div>
            ))
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
