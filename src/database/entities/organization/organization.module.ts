import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { OrganizationProvider } from './organization.provider';
import OrganizationService from './organization.service';

@Module({
  imports: [DatabaseModule],
  providers: [...OrganizationProvider, OrganizationService],
  exports: [OrganizationService],
})
class OrganizationModule {}

export default OrganizationModule;
