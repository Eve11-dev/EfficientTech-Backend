import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from 'typeorm';
import { UserImage } from './user.image.entity';
import { Product } from 'src/products/entities/product.entity';


@Entity()
export class User{
    @PrimaryGeneratedColumn({type: 'int4'}) // Este decorador hace referencia a una llave primaria
    id: number;

    @Column({type: 'varchar', length: '100', nullable:false}) //Campos de una tabla
    name: string;

    @Column({type: 'varchar'}) //Campos de una tabla
    password: string;

    @Column({type: 'varchar', length: '100', nullable:false}) //Campos de una tabla
    email: string;

    @Column({type: 'varchar', length: '50'}) //Campos de una tabla
    sexo: string;

   @Column({ type: 'boolean', default: true })
   active: boolean;

   @Column({type: 'int4'})
   credit_card: number;
   
  @Column({ type: 'text', array: true, default: ['user'] })
  roles: string[];

  @OneToMany(() => UserImage, (userImage) => userImage.user, {
    cascade: true,
  })
  images?: UserImage[];

  //creando relacion de usuario y producto

  @OneToMany(() => Product, (products: Product) => products.user, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  products: Product[];
} 