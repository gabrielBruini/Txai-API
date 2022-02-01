import { User } from 'src/Users/User.entity';
import {   
    Entity, Column, PrimaryGeneratedColumn, ManyToOne
    } from 'typeorm';
    
    
    @Entity()  
    export class Products {
      
      @PrimaryGeneratedColumn()
      id: number;
  
      @Column()
      nome: string;
  
      @Column()
      preco: number;
  
      @Column()
      quantidade: number;

      @ManyToOne(() => User, user => user.products)
      user: User
  
     
    }