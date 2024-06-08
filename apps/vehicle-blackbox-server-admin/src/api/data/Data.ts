import { JsonValue } from "type-fest";
import { Record } from "../record/Record";

export type Data = {
  begin: Date | null;
  createdAt: Date;
  data: JsonValue;
  dataType?: "CAN" | "IMU" | "GPS" | null;
  digest: string | null;
  end: Date | null;
  id: string;
  records?: Array<Record>;
  updatedAt: Date;
};
