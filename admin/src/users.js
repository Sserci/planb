// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  DateInput,
  BooleanInput,
} from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="password" />
      <EmailField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="id" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <DateInput source="birthdate" />
      <TextInput source="password" />
      <BooleanInput source="isAdmin" />
      <TextInput source="city" />
      <TextInput source="picture" />
    </SimpleForm>
  </Create>
);
