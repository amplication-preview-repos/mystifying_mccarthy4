import { Vehicle } from "../vehicle/Vehicle";

export type VehicleSecret = {
  createdAt: Date;
  id: string;
  key: string | null;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
