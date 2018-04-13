import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    const body = {
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    };

    this.props.mutate(body).then(() => this.setState({ content: '' }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          type="text"
          onChange={(event) => this.setState({ content: event.target.value })}
          value={this.state.content}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
