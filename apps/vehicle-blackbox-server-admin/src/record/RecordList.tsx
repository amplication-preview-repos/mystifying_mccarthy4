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
import { DATA_TITLE_FIELD } from "../data/DataTitle";
import { VEHICLE_TITLE_FIELD } from "../vehicle/VehicleTitle";

export const RecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Records"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="vehicle" source="vehicle.id" reference="Vehicle">
          <TextField source={VEHICLE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
