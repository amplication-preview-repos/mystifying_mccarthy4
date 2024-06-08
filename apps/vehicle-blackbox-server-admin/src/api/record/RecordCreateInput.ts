import { DataWhereUniqueInput } from "../data/DataWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type RecordCreateInput = {
  begin?: Date | null;
  data?: DataWhereUniqueInput | null;
  end?: Date | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
