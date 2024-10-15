import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';

@Module({
  controllers: [ItemController],
  providers: [ItemService, PrismaService, JwtAuthGuard],
})
export class ItemModule {}
