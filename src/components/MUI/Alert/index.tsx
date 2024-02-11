import { AlertTitle } from "@mui/material";
import Alert from "@mui/material/Alert";
import { FC } from "react";

const AlertComponent: FC = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl">Titleの追加</h1>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success Alert with an encouraging title.
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info Alert with an informative title.
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning Alert with a cautious title.
        </Alert>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error Alert with a scary title.
        </Alert>
      </div>
    </>
  );
};

export default AlertComponent;
