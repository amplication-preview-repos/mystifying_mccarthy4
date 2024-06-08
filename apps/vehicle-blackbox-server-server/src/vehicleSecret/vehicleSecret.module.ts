import { Module } from "@nestjs/common";
import { VehicleSecretModuleBase } from "./base/vehicleSecret.module.base";
import { VehicleSecretService } from "./vehicleSecret.service";
import { VehicleSecretController } from "./vehicleSecret.controller";
import { VehicleSecretResolver } from "./vehicleSecret.resolver";

@Module({
  imports: [VehicleSecretModuleBase],
  controllers: [VehicleSecretController],
  providers: [VehicleSecretService, VehicleSecretResolver],
  exports: [VehicleSecretService],
})
export class VehicleSecretModule {}
