import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private repo: MongoRepository<Post>,
  ) {}

  async create(dto: CreatePostDto) {
    const post = this.repo.create(dto);
    return await this.repo.save(post);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: string) {
    const post = await this.repo.findOneBy(id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async update(id: string, attrs: UpdatePostDto) {
    const post = await this.findOne(id);
    Object.assign(post, attrs);
    return this.repo.save(post);
  }

  async remove(id: string) {
    const post = await this.findOne(id);
    return this.repo.remove(post);
  }

  async groupAndSum() {
    return this.repo.aggregate([
      {
        $group: {
          _id: "$status",
          totalPosts: { $sum: 1 }
        }
      }
    ]).toArray();
  }
}
