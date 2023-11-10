import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'order' })
export class Order {
    
  @PrimaryGeneratedColumn({ type: 'int4'})
  id: number;

  @Column({ type: 'date', name: 'fecha', nullable: false })
  fecha: Date;

  @Column({ type: 'numeric', name: 'total', nullable: false })
  total: number;

  @Column({ type: 'varchar', name: 'direccion', nullable: false, length: 100 })
  direccion: string;

  @Column({ type: 'varchar', name: 'ciudad', nullable: false, length: 50 })
  ciudad: string;

  @Column({ type: 'varchar', name: 'pais', nullable: false, length: 50 })
  pais: string;

  @Column({
    type: 'varchar',
    name: 'codigo_postal',
    nullable: false,
    length: 10,
  })
  codigoPostal: string;
}
