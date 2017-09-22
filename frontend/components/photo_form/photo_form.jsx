import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoContactForm from './photo_contact_form';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      url: "",
      title: "",
      description: ""
    };
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
  }

  render() {
    return (
      <div className="photo-form-container">
        <PhotoContactForm/>
        <div className="photo-text-form-container">
          <form className="photo-text-form" onSubmit={this.handleSubmit}>
            <label>Title:
              <input
                type="text"
                onChange={this.update("title")}
                value={this.state.title}/>
            </label>
            <label>Description:
              <textarea
                onChange={this.update("description")}
                value={this.state.description}/>
            </label>
            <input
              className="button"
              type="submit"
              value="Share"/>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoForm);
