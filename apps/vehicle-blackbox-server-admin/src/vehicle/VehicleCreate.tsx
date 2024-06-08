import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DbcTitle } from "../dbc/DbcTitle";
import { RecordTitle } from "../record/RecordTitle";
import { VehicleSecretTitle } from "../vehicleSecret/VehicleSecretTitle";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <ReferenceInput source="dbc.id" reference="Dbc" label="DBC">
          <SelectInput optionText={DbcTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="make" source="make" />
        <TextInput label="model" source="model" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="records"
          reference="Record"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecordTitle} />
        </ReferenceArrayInput>
        <TextInput label="secrets" source="secrets" />
        <TextInput label="trim" source="trim" />
        <TextInput label="type" source="typeField" />
        <ReferenceArrayInput
          source="vehicleSecrets"
          reference="VehicleSecret"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VehicleSecretTitle} />
        </ReferenceArrayInput>
        <TextInput label="vin" source="vin" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
