import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { AccountProvider } from './application.provider';
import ApplicationService from './application.service';

@Module({
  imports: [DatabaseModule],
  providers: [...AccountProvider, ApplicationService],
  exports: [ApplicationService],
})
class ApplicationModule {}

export default ApplicationModule;
