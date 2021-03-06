import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import query from "../queries/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const body = {
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query }]
    };

    this.props.mutate(body).then(() => hashHistory.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            type="text"
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
