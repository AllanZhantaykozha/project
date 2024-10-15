import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return this.itemService.getById(id);
  }

  @Get('')
  async getAll() {
    return this.itemService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('')
  async create(@Body() dto: itemDtoCreate) {
    return this.itemService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Body() dto: itemDtoUpdate,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.itemService.update(dto, id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/upload/:id/')
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'images', maxCount: 20 }], {
      storage: diskStorage({
        destination: './uploads', // Указываем папку для сохранения файлов
        filename: (req, file, cb) => {
          // Формируем уникальное имя файла
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFiles(
    @UploadedFiles() files: { images?: Express.Multer.File[] },
    @Body() dto: itemDtoUpdate,
    @Param('id', ParseIntPipe) id: number,
  ) {
    console.log('Files uploaded:', files.images);

    return this.itemService.addImage(files, id);
  }
}
