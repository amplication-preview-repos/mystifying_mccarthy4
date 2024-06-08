import { Data } from "../data/Data";
import { Vehicle } from "../vehicle/Vehicle";

export type Record = {
  begin: Date | null;
  createdAt: Date;
  data?: Data | null;
  end: Date | null;
  id: string;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
