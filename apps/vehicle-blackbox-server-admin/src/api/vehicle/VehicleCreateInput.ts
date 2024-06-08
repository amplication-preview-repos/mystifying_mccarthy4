import { DbcWhereUniqueInput } from "../dbc/DbcWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RecordCreateNestedManyWithoutVehiclesInput } from "./RecordCreateNestedManyWithoutVehiclesInput";
import { VehicleSecretCreateNestedManyWithoutVehiclesInput } from "./VehicleSecretCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  color?: string | null;
  dbc?: DbcWhereUniqueInput | null;
  image?: InputJsonValue;
  make?: string | null;
  model?: string | null;
  name?: string | null;
  records?: RecordCreateNestedManyWithoutVehiclesInput;
  secrets?: string | null;
  trim?: string | null;
  typeField?: string | null;
  vehicleSecrets?: VehicleSecretCreateNestedManyWithoutVehiclesInput;
  vin?: string | null;
  year?: number | null;
};
