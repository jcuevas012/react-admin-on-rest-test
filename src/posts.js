import React from 'react';
import { List, 
  Datagrid, 
  TextField, 
  EmailField, 
  ReferenceField, 
  EditButton, 
  DisabledInput,
  SelectInput,
  SimpleForm,
  TextInput,
  ReferenceInput,
  Edit,
  Create,
  Filter,
  LongTextInput,
  required }  from 'admin-on-rest'

export const PostList = (props) => (
  <List { ...props}  filters={<PostFilter/>} >
  <Datagrid>
    <TextField source="id"/>
    <TextField source="title" />
    <TextField source="body" />
    <EditButton/>
  </Datagrid>
  </List>
)

const PostTitle = ({ record }) => (
  <span> Post {record ? `${record.title}` : ''}</span>
)

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props} >
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput label="User" source="userId" reference="users" validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);
export const PostCreate = (props) => (
  <Create  {...props} >
    <SimpleForm>
      
      <ReferenceInput label="User" source="userId" reference="users" >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" alwaysOn>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);