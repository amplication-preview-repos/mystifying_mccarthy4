import { JsonValue } from "type-fest";
import { Vehicle } from "../vehicle/Vehicle";

export type Dbc = {
  bytes: JsonValue;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  vehicles?: Array<Vehicle>;
  version: string | null;
};
