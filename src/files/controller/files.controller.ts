import { Controller, Get, Post, UploadedFile, UseInterceptors, BadRequestException, Res, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileNamer } from 'src/helpers/fileNamer.helpers';
import { Response } from 'Express';
import { FilesService } from '../services/files.service';
import { fileFilter } from 'src/helpers/fileFilter.herlper';

@Controller('file')
export class FilesController {
    constructor ( private readonly filesService: FilesService) {}

    @Post('upload')
    @UseInterceptors
    (FileInterceptor('file',{
        fileFilter: fileFilter,
    

        storage: diskStorage({
            destination: './static/products/',
            filename: fileNamer,
        }),
    })
)
uploadFile(@UploadedFile() file: Express.Multer.File) {
  if (!file){
    throw new BadRequestException('Asegurarse que el archivo es una imagen ');
  }
    const url = `${file.filename}`;

    return {url}; 
    }

    @Get('product/:imageName')
    findProduct(@Res() res:Response, @Param('imageName')imageName:string) {
        const path = this.filesService.getStaticImageName(imageName);

        res.sendFile(path);
    }

    @Get('user/:imageName')
    findUser(@Res() res:Response, @Param('imageName')imageName:string) {
        const path = this.filesService.getStaticImageName(imageName);

        res.sendFile(path);
    }
}