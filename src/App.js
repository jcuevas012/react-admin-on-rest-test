import React, { Component } from 'react';
import { Admin, jsonServerRestClient, Resource, Delete} from 'admin-on-rest';
import {PostList, PostEdit, PostCreate } from './posts'
import { UserList } from './users'
class App extends Component {
  render() {
    return (
      <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} remove={Delete} />
        <Resource name="users" list={UserList} />
      </Admin>
    );
  }
}

export default App;
