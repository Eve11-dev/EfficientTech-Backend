import { Controller, Get, Post, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileNamer } from 'src/helpers/fileNamer.helpers';
import { filePDFfilter } from 'src/helpers/filePDFfilter.helpers';
import { FilesPDFService } from '../services/filePDF.service';


@Controller('filePDF')
export class FilesPDFController {
    constructor ( private readonly filesService: FilesPDFService) {}

    @Post('upload')
    @UseInterceptors
    (FileInterceptor('filePDF',{
        fileFilter: filePDFfilter,
    

        storage: diskStorage({
            destination: './files/PdfArchivos',
            filename: fileNamer,
        }),
    })
)
uploadFile(@UploadedFile() file: Express.Multer.File) {
  if (!file){
    throw new BadRequestException('Asegurarse que el archivo es un archivo PDF  ');
  }

         return{
            fileName: file.filename,
        }
    }
}