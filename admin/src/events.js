// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  multiline,
  EmailField,
  ReferenceField,
  NumberInput,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ImageInput,
  ImageField,
  Create,
  DateInput,
} from "react-admin";

export const EventList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="owner" />
      <TextField source="name" />
      <TextField source="description" />
      <TextField source="private" />
      <TextField source="categoryId" />
      <TextField source="nbPlace" />
      <TextField source="city" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="id" reference="events">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const EventCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="owner" />
      <TextInput source="name" />
      <TextInput multiline resettable source="description" />
      <TextInput source="private" />
      <TextInput source="categoryId" />
      <TextInput source="nbPlace" />
      <TextInput source="city" />
      <TextInput source="link" />

      <DateInput source="date" />
    </SimpleForm>
  </Create>
);
