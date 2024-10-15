import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async create(dto: itemDtoCreate) {
    return await this.prisma.items.create({
      data: {
        ...dto,
      },
    });
  }

  async update(dto: itemDtoUpdate, id: number) {
    return await this.prisma.items.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });
  }

  async addImage(files: any, id: number) {
    const images = await this.prisma.items.findUnique({ where: { id } });
    return await this.prisma.items.update({
      where: {
        id,
      },
      data: {
        imageUrl: [
          ...images.imageUrl,
          ...files.images.map((file) => file.filename),
        ],
      },
    });
  }

  async getAll() {
    return await this.prisma.items.findMany();
  }

  async getById(id: number) {
    return await this.prisma.items.findUnique({ where: { id } });
  }
}
