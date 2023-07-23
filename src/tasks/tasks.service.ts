import { Injectable } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private taskEntityRepository: TaskRepository) {}

  async getTaskById(id: string): Promise<Task> {
    return this.taskEntityRepository.findById(id);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskEntityRepository.insert(createTaskDto);
  }

  deleteTask(id: string): Promise<void> {
    return this.taskEntityRepository.delete(id);
  }

  // async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
  //   return this.taskEntityRepository.updateTaskStatus(id, status);
  // }
}
