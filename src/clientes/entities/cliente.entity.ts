import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cliente' })
export class Cliente {

    @PrimaryGeneratedColumn({ type: 'int4'})
    id: number;
  
    @Column({ type: 'varchar',  nullable: false })
    name: string;

    @Column({ type: 'varchar',  nullable: false })
    correo: string;

    @Column({ type: 'varchar',  nullable: false })
    direccion: string;

    @Column({ type: 'numeric',  nullable: false })
    telefono: number;
}