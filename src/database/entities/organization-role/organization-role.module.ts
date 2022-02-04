import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { OrganizationProvider } from './organization-role.provider';
import OrganizationService from './organization-role.service';

@Module({
  imports: [DatabaseModule],
  providers: [...OrganizationProvider, OrganizationService],
  exports: [OrganizationService],
})
class OrganizationRoleModule {}

export default OrganizationRoleModule;
