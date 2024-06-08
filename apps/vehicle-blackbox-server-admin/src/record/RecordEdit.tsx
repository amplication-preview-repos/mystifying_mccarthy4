import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DataTitle } from "../data/DataTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const RecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="begin" source="begin" />
        <ReferenceInput source="data.id" reference="Data" label="data">
          <SelectInput optionText={DataTitle} />
        </ReferenceInput>
        <DateTimeInput label="end" source="end" />
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
