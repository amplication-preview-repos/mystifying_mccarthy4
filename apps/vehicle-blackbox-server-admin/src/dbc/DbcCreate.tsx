import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VehicleTitle } from "../vehicle/VehicleTitle";

export const DbcCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="vehicles"
          reference="Vehicle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VehicleTitle} />
        </ReferenceArrayInput>
        <TextInput label="version" source="version" />
      </SimpleForm>
    </Create>
  );
};
