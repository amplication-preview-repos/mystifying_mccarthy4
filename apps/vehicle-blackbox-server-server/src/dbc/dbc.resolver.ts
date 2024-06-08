import * as graphql from "@nestjs/graphql";
import { DbcResolverBase } from "./base/dbc.resolver.base";
import { Dbc } from "./base/Dbc";
import { DbcService } from "./dbc.service";

@graphql.Resolver(() => Dbc)
export class DbcResolver extends DbcResolverBase {
  constructor(protected readonly service: DbcService) {
    super(service);
  }
}
