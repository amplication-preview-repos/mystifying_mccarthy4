import { DbcWhereUniqueInput } from "../dbc/DbcWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RecordUpdateManyWithoutVehiclesInput } from "./RecordUpdateManyWithoutVehiclesInput";
import { VehicleSecretUpdateManyWithoutVehiclesInput } from "./VehicleSecretUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  color?: string | null;
  dbc?: DbcWhereUniqueInput | null;
  image?: InputJsonValue;
  make?: string | null;
  model?: string | null;
  name?: string | null;
  records?: RecordUpdateManyWithoutVehiclesInput;
  secrets?: string | null;
  trim?: string | null;
  typeField?: string | null;
  vehicleSecrets?: VehicleSecretUpdateManyWithoutVehiclesInput;
  vin?: string | null;
  year?: number | null;
};
