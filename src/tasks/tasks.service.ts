import { Injectable } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(private taskEntityRepository: TaskRepository) {}

  async getTaskById(id: string, user: User): Promise<Task> {
    return this.taskEntityRepository.findById(id, user);
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.taskEntityRepository.insert(createTaskDto, user);
  }

  deleteTask(id: string, user: User): Promise<void> {
    return this.taskEntityRepository.delete(id, user);
  }

  updateTaskStatus(id: string, status: TaskStatus, user: User): Promise<Task> {
    return this.taskEntityRepository.updateTaskStatus(id, status, user);
  }

  getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    return this.taskEntityRepository.getTasks(filterDto, user);
  }
}
