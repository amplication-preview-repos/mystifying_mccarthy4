import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type VehicleSecretUpdateInput = {
  key?: string | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
