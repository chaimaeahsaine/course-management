import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ProfessorModule } from './professor/professor.module';
import { CourseModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type : 'mysql', 
     host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'course-management',
      synchronize : true,
      autoLoadEntities : true
     
  }),StudentModule, ProfessorModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
