import { Category } from 'src/category/entities/category.entity';
import { User } from 'src/users/entities/users.entity';
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, } from 'typeorm';

  
  @Entity({ name: 'product' })
  export class Product {
  
    @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
    id: number;
  
    @Column({ type: 'varchar', name: 'nombre', nullable: false, length: 50 })
    nombre: string;
  
    @Column({ type: 'varchar', name: 'descripcion', nullable: false, length: 100,})
    descripcion: string;
  
    @Column({ type: 'numeric', name: 'precio', nullable: false })
    precio: number;
  
    @Column({ type: 'numeric', name: 'stock', nullable: false })
    stock: number;
  
    @Column({ type: 'varchar', name: 'imagen', nullable: false, length: 100 })
    imagen: string;
  
    @Column({ type: 'varchar', name: 'categoria', nullable: false, length: 50 })
    categoria: string;
  
    @Column({ type: 'date', name: 'fecha_creacion', nullable: false })
    fechaCreacion: Date;
  
    @Column({ type: 'date', name: 'fecha_actualizacion', nullable: false })
    fechaActualizacion: Date;
  
    //Relacionando usuario con producto
  
    @ManyToOne(() => User, (user: User) => user.products)
    @JoinTable()
    user: User[];

    @ManyToOne(() => Category, (category: Category) => category.product)
  @JoinTable()
  category: Category[];
  }
  