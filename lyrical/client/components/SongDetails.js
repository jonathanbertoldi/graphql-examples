import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import fetchSong from '../queries/fetchSong';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetails extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) return <div>Loading...</div>;

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

const queryOptions = {
  options: ({ params }) => ({
    variables: { id: params.id }
  })
};

export default graphql(fetchSong, queryOptions)(SongDetails);
