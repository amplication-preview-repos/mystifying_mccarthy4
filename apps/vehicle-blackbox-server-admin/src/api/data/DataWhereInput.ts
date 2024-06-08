import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";

export type DataWhereInput = {
  begin?: DateTimeNullableFilter;
  data?: JsonFilter;
  dataType?: "CAN" | "IMU" | "GPS";
  digest?: StringNullableFilter;
  end?: DateTimeNullableFilter;
  id?: StringFilter;
  records?: RecordListRelationFilter;
};
