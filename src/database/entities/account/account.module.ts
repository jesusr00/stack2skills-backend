import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { AccountProvider } from './account.provider';
import AccountService from './account.service';

@Module({
  imports: [DatabaseModule],
  providers: [...AccountProvider, AccountService],
  exports: [AccountService],
})
class AccountModule {}

export default AccountModule;
