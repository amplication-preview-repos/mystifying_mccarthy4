import { VehicleSecretWhereInput } from "./VehicleSecretWhereInput";
import { VehicleSecretOrderByInput } from "./VehicleSecretOrderByInput";

export type VehicleSecretFindManyArgs = {
  where?: VehicleSecretWhereInput;
  orderBy?: Array<VehicleSecretOrderByInput>;
  skip?: number;
  take?: number;
};
