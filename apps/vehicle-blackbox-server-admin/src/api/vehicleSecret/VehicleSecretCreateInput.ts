import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type VehicleSecretCreateInput = {
  key?: string | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
