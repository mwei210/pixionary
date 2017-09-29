import React from 'react';
import { withRouter } from 'react-router-dom';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeedPhotos();
  }

  render() {
    if (!this.props.photos) {
      return (<div>Loading...</div>);
    }
    return (
      <div className="feed-index-container">
        { this.props.photos.map(photo => (
          <FeedIndexItem
            photo={photo}
            key={photo.id}
          />
        )) }
      </div>
    );
  }

}

export default withRouter(FeedIndex);
