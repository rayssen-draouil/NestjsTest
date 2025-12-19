import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Post } from './post/post.entity';//entity


@Module({
  imports: [
  TypeOrmModule.forRoot({ 
  type: 'mongodb', // Déclare que c'est MongoDB
  host: 'localhost', // L'adresse de ton serveur MongoDB
  port: 27017, // Le port de MongoDB
  database: 'testnestjs', // Nom de la base de données
  entities: [Post], // Liste des entités
  synchronize: true, // Synchroniser les entités avec la BD
  }),
    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
