import { Dbc } from "../dbc/Dbc";
import { JsonValue } from "type-fest";
import { Record } from "../record/Record";
import { VehicleSecret } from "../vehicleSecret/VehicleSecret";

export type Vehicle = {
  color: string | null;
  createdAt: Date;
  dbc?: Dbc | null;
  id: string;
  image: JsonValue;
  make: string | null;
  model: string | null;
  name: string | null;
  records?: Array<Record>;
  secrets: string | null;
  trim: string | null;
  typeField: string | null;
  updatedAt: Date;
  vehicleSecrets?: Array<VehicleSecret>;
  vin: string | null;
  year: number | null;
};
