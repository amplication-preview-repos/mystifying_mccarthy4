import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VehicleSecretService } from "./vehicleSecret.service";
import { VehicleSecretControllerBase } from "./base/vehicleSecret.controller.base";

@swagger.ApiTags("vehicleSecrets")
@common.Controller("vehicleSecrets")
export class VehicleSecretController extends VehicleSecretControllerBase {
  constructor(protected readonly service: VehicleSecretService) {
    super(service);
  }
}
