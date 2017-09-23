import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoContactForm from './photo_contact_form';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setURL = this.setURL.bind(this);
    this.state = {
      url: "",
      title: "",
      description: ""
    };
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  }

  setURL(url) {
    this.setState({ url });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state)
      .then((data) => this.props.history.push(`/photos/${data.photo.id}`));
  }

  renderErrors() {
    return (
      <div className="form-error">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          className="photo-form-container"
          onSubmit={this.handleSubmit}>
          <div className="photo-upload">
            <PhotoContactForm setURL={this.setURL} />
          </div>
          <div className="photo-text-form-container">
            {this.renderErrors()}
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
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PhotoForm);
