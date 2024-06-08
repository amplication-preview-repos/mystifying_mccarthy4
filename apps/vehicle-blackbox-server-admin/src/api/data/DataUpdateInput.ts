import { InputJsonValue } from "../../types";
import { RecordUpdateManyWithoutDataItemsInput } from "./RecordUpdateManyWithoutDataItemsInput";

export type DataUpdateInput = {
  begin?: Date | null;
  data?: InputJsonValue;
  dataType?: "CAN" | "IMU" | "GPS" | null;
  digest?: string | null;
  end?: Date | null;
  records?: RecordUpdateManyWithoutDataItemsInput;
};
