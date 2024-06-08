import { Module } from "@nestjs/common";
import { DataModuleBase } from "./base/data.module.base";
import { DataService } from "./data.service";
import { DataController } from "./data.controller";
import { DataResolver } from "./data.resolver";

@Module({
  imports: [DataModuleBase],
  controllers: [DataController],
  providers: [DataService, DataResolver],
  exports: [DataService],
})
export class DataModule {}
