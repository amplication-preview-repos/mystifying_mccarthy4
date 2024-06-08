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

import { DATA_TITLE_FIELD } from "./DataTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const DataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="begin" source="begin" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="Data type" source="dataType" />
        <TextField label="digest" source="digest" />
        <TextField label="end" source="end" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Record" target="dataId" label="Records">
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
      </SimpleShowLayout>
    </Show>
  );
};
