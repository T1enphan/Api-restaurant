import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChuyenMucModule } from './Modules/chuyen_muc.module';
import { ChuyenMuc } from './Entity/chuyen_muc.entity';
import { UserModule } from './Modules/user.module';
import { User } from './Entity/user.entity';
import { Profiles } from './Entity/Profile.entity';
import { Posts } from './Entity/Posts.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE_NAME'),
        entities: [ChuyenMuc, User, Profiles, Posts],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ChuyenMucModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
