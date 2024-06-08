import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const VehicleSecretCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
