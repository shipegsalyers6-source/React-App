import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ButtonDKF from "./components/ButtonDKF";
import ButtonCWM from "./components/ButtonCWM";
import AlertDismissDKF from "./components/AlertDismissDKF";
import AlertDismissCWM from "./components/AlertDismissCWM";
import { useState } from "react";

let items = [
  "Denmark",
  "Athens",
  "New Mexico",
  "Ibiza",
  "Mississippi",
  "Orlando",
];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && (
          <AlertDismissCWM onClose={() => setAlertVisibility(false)}>
            Mosh's Dismissable Alert
          </AlertDismissCWM>
        )}
        <ButtonCWM color="secondary" onClick={() => setAlertVisibility(true)}>
          Mosh's Dynamic Button
        </ButtonCWM>
      </div>
      <br />
      <br />
      <div>
        <AlertDismissDKF>
          I'm a dismissable alert &ndash; we hope!
          <br />
          Eye yam, but I'm not dynamic...
        </AlertDismissDKF>
      </div>
      <br />
      <div>
        <ButtonDKF text="Success!" />
      </div>
      <br />
      <br />
      <div>
        <Alert>
          <h1>
            Hello World
            <em>
              <strong>!</strong>
            </em>
          </h1>
        </Alert>
      </div>
      <br />
      <div>
        <ListGroup
          items={items}
          heading="Places"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
