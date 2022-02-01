import { Injectable, Inject } from '@nestjs/common';
import { ResultDto } from 'src/dto/dto.result';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/User.create.dto';
import { User } from './User.entity';
import { UserLoginDto } from './dto/User.Login.dto';
import * as  bcrypt from 'bcrypt'

@Injectable()
export class UserService {

    constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<User>) {}


    async getUsers(): Promise<User[]> {
        return await this.userRepository.find()
    }1
    async findOne(email: string): Promise<any> {
        const user = await this.userRepository.findOne({where: {email}});
        return user
      }

    async validate(data: UserLoginDto): Promise<any> {
        const {email, senha} = data   
        const user = await this.userRepository.findOne({where: { email}})
        
        if(senha === user.senha) {
            console.log("Senhas iguais")
        } else {
            console.log("Senhas não iguais")
        }       
    
    } 

    async createUser(data: UserCreateDTO): Promise<ResultDto> {
        const { email, nome} = data
        
        const bcryptsenha = bcrypt.hashSync(data.senha, 8)
       return this.userRepository.save({email,nome, senha: bcryptsenha}).then(() => {
            return <ResultDto>{
                status: true,
                mensagem: "Salvou"
    
            }
        }).catch(err => {
            console.log(err)
            return <ResultDto>{
                status: false,
                mensagem: "Houve um erro no cadastro"    
            }
        })
        
      
    }






}
