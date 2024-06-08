import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VehicleListRelationFilter } from "../vehicle/VehicleListRelationFilter";

export type DbcWhereInput = {
  bytes?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  vehicles?: VehicleListRelationFilter;
  version?: StringNullableFilter;
};
