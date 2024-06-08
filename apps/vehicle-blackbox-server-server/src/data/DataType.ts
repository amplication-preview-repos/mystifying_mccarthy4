import { registerEnumType } from "@nestjs/graphql";

export enum DataType {
    Can = "CAN",
    Imu = "IMU",
    Gps = "GPS"
}

registerEnumType(DataType, {
    name: "DataType",
  });