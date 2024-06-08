import { VehicleSecret as TVehicleSecret } from "../api/vehicleSecret/VehicleSecret";

export const VEHICLESECRET_TITLE_FIELD = "key";

export const VehicleSecretTitle = (record: TVehicleSecret): string => {
  return record.key?.toString() || String(record.id);
};
