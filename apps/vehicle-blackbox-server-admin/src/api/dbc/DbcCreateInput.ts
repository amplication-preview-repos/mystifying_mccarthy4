import { InputJsonValue } from "../../types";
import { VehicleCreateNestedManyWithoutDbcsInput } from "./VehicleCreateNestedManyWithoutDbcsInput";

export type DbcCreateInput = {
  bytes?: InputJsonValue;
  name?: string | null;
  vehicles?: VehicleCreateNestedManyWithoutDbcsInput;
  version?: string | null;
};
