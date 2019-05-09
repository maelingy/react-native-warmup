import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image  } from 'react-native';

export default class FetchExample extends React.Component {
  state = {
    isLoading: true,
    shibes: [],
    error: null
  };
  fetchUsers() {
    fetch(`http://shibe.online/api/shibes?count=[1]&urls=[true]&httpsUrls=[true]`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          shibes: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, shibes, error } = this.state;
    return (
      <React.Fragment>
        <Text>Random Shibe Generator</Text>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          shibes.map(shibe => {
            const {  } = shibe;
            return (
              <View key={""}>
                <Image source={{uri: 'https://cdn.shibe.online/shibes/' + shibe + '.jpg'}}
                  style={{width: 400, height: 400}} />
              </View>
            );
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </React.Fragment>
    );
  }
}

