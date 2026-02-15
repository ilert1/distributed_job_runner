import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@jobber/shared';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule, JobsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
