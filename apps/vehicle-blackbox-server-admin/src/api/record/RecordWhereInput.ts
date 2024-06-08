import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DataWhereUniqueInput } from "../data/DataWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type RecordWhereInput = {
  begin?: DateTimeNullableFilter;
  data?: DataWhereUniqueInput;
  end?: DateTimeNullableFilter;
  id?: StringFilter;
  vehicle?: VehicleWhereUniqueInput;
};
