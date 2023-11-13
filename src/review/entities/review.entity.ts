import { User } from 'src/users/entities/users.entity';
import { Column, Entity, JoinTable, ManyToOne, PrimaryColumn } from 'typeorm';

//Nombre de la entidad
@Entity({ name: 'review' })
export class Review {
  @PrimaryColumn({type: 'int4'})
  id_product: number ;

  @Column({type: 'varchar', nullable:false}) 
  name_product: string;

  @Column({type: 'numeric', nullable:false}) 
  calificacion: number;

  @Column({type: 'varchar', length: '100', nullable:false}) 
  comentario: string;

  @Column({type: 'numeric', nullable:false})  
  fecha_resenia: number;

  @Column({type: 'varchar', nullable:false}) 
  name_user: string;

  //Relacion 
  @ManyToOne(() => User, (user: User) => user.review)
  @JoinTable()
  user: User[];
}
