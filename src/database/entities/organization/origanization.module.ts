import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { OrganizationProvider } from './origanization.provider';
import OrganizationService from './origanization.service';

@Module({
  imports: [DatabaseModule],
  providers: [...OrganizationProvider, OrganizationService],
  exports: [OrganizationService],
})
class OrganizationModule {}

export default OrganizationModule;
