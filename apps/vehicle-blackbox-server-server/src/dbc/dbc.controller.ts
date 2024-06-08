import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DbcService } from "./dbc.service";
import { DbcControllerBase } from "./base/dbc.controller.base";

@swagger.ApiTags("dbcs")
@common.Controller("dbcs")
export class DbcController extends DbcControllerBase {
  constructor(protected readonly service: DbcService) {
    super(service);
  }
}
