import { InputJsonValue } from "../../types";
import { RecordCreateNestedManyWithoutDataItemsInput } from "./RecordCreateNestedManyWithoutDataItemsInput";

export type DataCreateInput = {
  begin?: Date | null;
  data?: InputJsonValue;
  dataType?: "CAN" | "IMU" | "GPS" | null;
  digest?: string | null;
  end?: Date | null;
  records?: RecordCreateNestedManyWithoutDataItemsInput;
};
