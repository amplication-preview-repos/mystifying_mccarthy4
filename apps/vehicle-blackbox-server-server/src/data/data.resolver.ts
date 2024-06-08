import * as graphql from "@nestjs/graphql";
import { DataResolverBase } from "./base/data.resolver.base";
import { Data } from "./base/Data";
import { DataService } from "./data.service";

@graphql.Resolver(() => Data)
export class DataResolver extends DataResolverBase {
  constructor(protected readonly service: DataService) {
    super(service);
  }
}
