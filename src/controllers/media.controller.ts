import { ApiOperation } from '@nestjs/swagger';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AccountService, OrganizationService } from '~/database/entities';
import { JwtAuthGuard } from '~/modules/auth/guards/jwt-auth.guard';

@Controller('media')
@UseGuards(JwtAuthGuard)
@ApiTags('Media')
class MediaController {
  constructor(private accountService: AccountService) {}

  @Get('account/profile/:id')
  @ApiOperation({ summary: 'Get account profile photo link' })
  async GetAll(@Res() res: Response, @Param('id') id: string) {
    const account = await this.accountService.findById(id);
    if (account)
      return res.json({
        profilePhoto: account?.profilePhoto,
      });
    return res.status(HttpStatus.BAD_REQUEST).end();
  }
}

export default MediaController;
