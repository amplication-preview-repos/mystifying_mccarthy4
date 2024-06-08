import * as graphql from "@nestjs/graphql";
import { VehicleSecretResolverBase } from "./base/vehicleSecret.resolver.base";
import { VehicleSecret } from "./base/VehicleSecret";
import { VehicleSecretService } from "./vehicleSecret.service";

@graphql.Resolver(() => VehicleSecret)
export class VehicleSecretResolver extends VehicleSecretResolverBase {
  constructor(protected readonly service: VehicleSecretService) {
    super(service);
  }
}
