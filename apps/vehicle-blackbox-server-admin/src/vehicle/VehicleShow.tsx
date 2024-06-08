import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DATA_TITLE_FIELD } from "../data/DataTitle";
import { VEHICLE_TITLE_FIELD } from "./VehicleTitle";
import { DBC_TITLE_FIELD } from "../dbc/DbcTitle";

export const VehicleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Record"
          target="vehicleId"
          label="Records"
        >
          <Datagrid rowClick="show">
            <TextField label="begin" source="begin" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="data" source="data.id" reference="Data">
              <TextField source={DATA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="end" source="end" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="VehicleSecret"
          target="vehicleId"
          label="VehicleSecrets"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="key" source="key" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
