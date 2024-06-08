import { Module } from "@nestjs/common";
import { DbcModuleBase } from "./base/dbc.module.base";
import { DbcService } from "./dbc.service";
import { DbcController } from "./dbc.controller";
import { DbcResolver } from "./dbc.resolver";

@Module({
  imports: [DbcModuleBase],
  controllers: [DbcController],
  providers: [DbcService, DbcResolver],
  exports: [DbcService],
})
export class DbcModule {}
