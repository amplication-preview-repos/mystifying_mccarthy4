import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleSecretServiceBase } from "./base/vehicleSecret.service.base";

@Injectable()
export class VehicleSecretService extends VehicleSecretServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
