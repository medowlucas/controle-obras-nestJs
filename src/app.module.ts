import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObraModule } from './obra/obra.module';
import { VeiculoModule } from './veiculo/veiculo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [ObraModule, VeiculoModule, UsuarioModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
