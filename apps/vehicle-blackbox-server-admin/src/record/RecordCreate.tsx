import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DataTitle } from "../data/DataTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const RecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
