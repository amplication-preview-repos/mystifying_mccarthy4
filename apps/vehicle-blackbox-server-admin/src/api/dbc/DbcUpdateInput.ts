import { InputJsonValue } from "../../types";
import { VehicleUpdateManyWithoutDbcsInput } from "./VehicleUpdateManyWithoutDbcsInput";

export type DbcUpdateInput = {
  bytes?: InputJsonValue;
  name?: string | null;
  vehicles?: VehicleUpdateManyWithoutDbcsInput;
  version?: string | null;
};
