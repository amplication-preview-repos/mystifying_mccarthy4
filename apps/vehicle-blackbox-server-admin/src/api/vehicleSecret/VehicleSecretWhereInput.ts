import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type VehicleSecretWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  vehicle?: VehicleWhereUniqueInput;
};
