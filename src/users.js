import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'admin-on-rest'

export const UserList = (props) => (
  <List {...props} >
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
    </Datagrid>
  </List>
)