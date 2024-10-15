import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ItemModule } from './item/item.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ItemModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Путь к папке с файлами вне src
      serveRoot: '/uploads', // URL для доступа к файлам
    }),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
