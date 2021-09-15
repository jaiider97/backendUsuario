import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('api/usuarios')
export class UsuariosController {
    constructor(private UService:UsuarioService){}

    @Get()
    getAll() {
       return this.UService.findAll();
         
      }
   
      @Get(':id')
      getOne(@Param("id") id:number){
   
       return this.UService.findOne(id);
      }
   
      @Post()
      create(@Body() body: any) {
          
   
         return this.UService.create(body);
         
      }
   
      @Put()
      update(@Param('id') id:number,@Body() body:any){
          return this.UService.update(id,body)
      }
   
      @Delete()
      removed(@Param('id') id:number){
          return this.UService.removed(id);
      }
   
   
   
}
