import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DBC_TITLE_FIELD } from "../dbc/DbcTitle";

export const VehicleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vehicles"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
