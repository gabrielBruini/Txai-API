import { Products } from 'src/products/products.entity';
import {    
  Entity, Column, PrimaryGeneratedColumn, OneToMany
  } from 'typeorm';
  
  @Entity()  
  export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    role: string;

    @OneToMany(() => Products, products => products.user)
    products: Products[]
   
  }