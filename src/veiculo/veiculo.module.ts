import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';

@Module({
  providers: [VeiculoService]
})
export class VeiculoModule {}
