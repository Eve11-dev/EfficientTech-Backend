import { Module } from "@nestjs/common";
import { FilesPDFController } from "./controller/filePDF.controller";
import { FilesPDFService } from "./services/filePDF.service";



@Module({
    controllers: [FilesPDFController],
    providers: [FilesPDFService],
    })
    export class FilesPDFModule {}