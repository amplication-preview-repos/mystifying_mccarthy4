import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DBC_TITLE_FIELD } from "./DbcTitle";

export const DbcShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bytes" source="bytes" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="version" source="version" />
        <ReferenceManyField reference="Vehicle" target="dbcId" label="Vehicles">
          <Datagrid rowClick="show">
            <TextField label="color" source="color" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="DBC" source="dbc.id" reference="Dbc">
              <TextField source={DBC_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="image" source="image" />
            <TextField label="make" source="make" />
            <TextField label="model" source="model" />
            <TextField label="name" source="name" />
            <TextField label="secrets" source="secrets" />
            <TextField label="trim" source="trim" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="vin" source="vin" />
            <TextField label="year" source="year" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
