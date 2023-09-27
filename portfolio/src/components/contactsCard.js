import React, { useState } from "react";
import "./contactsCard.css";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Alert, Button } from "@mui/material";

const ContactsForm = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const vertical = "bottom";
  const horizontal = "center";

  const handleSubmit = () => {
    setShowSnackbar(true);
  };

  const handleClose = () => {
    setShowSnackbar(false);
  };

  return (
    <div className="port-form">
      <div id='form'>
        <label>Your Name</label>
        <input type="text" placeholder="Write your favourite word"></input>
        <label>E-mail</label>
        <input type="email" placeholder="Just an email"></input>
        <label>Subject</label>
        <input type="text" placeholder="Not too important"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="I would love to connect :)" />
        <Button variant="outlined" className="contact-form-btn" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Sorry this is broken as of now!! Please feel free to write me an email. Thanks
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactsForm;
