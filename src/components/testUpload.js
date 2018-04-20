import React, { Component } from 'react';
//import database from '../firebase/firebase';
import FileUploader from 'react-firebase-file-uploader';
import {firebase} from '../firebase/firebase';



class ProfilePage extends Component {
  state = {
    avatar: '',
    isUploading: false,
    progress: 0,
    avatarURL: ''
  };
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error('err',error);
  }
  handleUploadSuccess = (filename) => {
    this.setState({avatar: filename, progress: 100, isUploading: false});
    firebase.storage().ref('images').child(filename).getDownloadURL().then((url) => {
        console.log(url);
        this.setState({avatarURL: url})
});
  };

  render() {
    return (
      <div>
        <form>
          <label>Avatar:</label>
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.avatarURL &&
            <img src={this.state.avatarURL} />
          }
          <FileUploader
            accept="images/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>
    );
  }
}

export default ProfilePage;