import { Module } from '@nestjs/common';
import { ObraService } from './obra.service';

@Module({
  providers: [ObraService]
})
export class ObraModule {}
