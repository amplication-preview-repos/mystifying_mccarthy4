import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DbcWhereUniqueInput } from "../dbc/DbcWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";
import { VehicleSecretListRelationFilter } from "../vehicleSecret/VehicleSecretListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VehicleWhereInput = {
  color?: StringNullableFilter;
  dbc?: DbcWhereUniqueInput;
  id?: StringFilter;
  image?: JsonFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  name?: StringNullableFilter;
  records?: RecordListRelationFilter;
  secrets?: StringNullableFilter;
  trim?: StringNullableFilter;
  typeField?: StringNullableFilter;
  vehicleSecrets?: VehicleSecretListRelationFilter;
  vin?: StringNullableFilter;
  year?: IntNullableFilter;
};
