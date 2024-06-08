import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RecordTitle } from "../record/RecordTitle";

export const DataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="begin" source="begin" />
        <div />
        <SelectInput
          source="dataType"
          label="Data type"
          choices={[
            { label: "CAN", value: "CAN" },
            { label: "IMU", value: "IMU" },
            { label: "GPS", value: "GPS" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="digest" source="digest" />
        <DateTimeInput label="end" source="end" />
        <ReferenceArrayInput
          source="records"
          reference="Record"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
