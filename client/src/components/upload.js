import React, { Component } from "react";
import upload from "../api/upload";
import { useParams } from "react-router-dom";

class App extends Component {
  /* let { id } = useParams(); */

  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    const eventId = this.props.eventId;

    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    formData.append("eventId", eventId);

    // Details of the uploaded file
    console.log(this.state.selectedFile);
    console.log(formData);
    // Request made to the backend api
    // Send formData object
    upload.uploadEventImage(formData);
    window.location.reload();
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div class="text-gray-700 font-playfair">
          {this.state.selectedFile.name}
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4 class="text-gray-700 font-oswald">Choisis ta photo avant d'envoyer</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <input class="font-oswald text-gray-700" type="file" onChange={this.onFileChange} />
          <button class="bg-cyan-600 rounded-md text-white p-2 font-oswald"
            onClick={this.onFileUpload}
            data-buttonText="Your label here."
          >
            Poste !
          </button>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default App;
