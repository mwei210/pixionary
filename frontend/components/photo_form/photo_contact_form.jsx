import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = "mo58dvgg";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/doo201f3d/image/upload";

class PhotoContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.onImageDrop = this.onImageDrop.bind(this);
    this.state = {
      uploadedFileCloudinaryURL: ""
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
                        .field("file", file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryURL: response.body.secure_url
        })
        this.props.setURL(this.state.uploadedFileCloudinaryURL);
      }
    });
  }

  render() {
    return (
      <div className="file-upload-container">
        <div className="file-upload">
          <Dropzone className="dropzone"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}>
            <div className="dropzone-text-preview">
              {
                this.state.uploadedFileCloudinaryURL === "" ?
                <p>Drag and drop an image, or click to select a file to upload.</p> :
                <div>
                  <img src={this.state.uploadedFileCloudinaryURL} />
                </div>
              }
            </div>
          </Dropzone>
        </div>
      </div>
    )
  }
}

export default PhotoContactForm;
