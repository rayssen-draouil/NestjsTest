import { Body, Controller, Delete, Get, Param, Patch, Post as P, UseInterceptors, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { StatusInterceptor } from './interceptor/status.interceptor';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
  constructor(private service: PostService) {}
//http://localhost:3000/post
/*{
  "title": "Hello World Post",
  "createdAt": "2025-12-20",
  "description": "This is my first post example",
  "status": false
}*/
  @Post()
  @UseInterceptors(StatusInterceptor)
  create(@Body() dto: CreatePostDto) {
    return this.service.create(dto);
  }
//http://localhost:3000/posts
  @Get()
    @UseInterceptors(StatusInterceptor)
    findAll() {
    return this.service.findAll();
  }
//http://localhost:3000/posts/{id}
  @Get(':id')
  @UseInterceptors(StatusInterceptor)
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
//http://localhost:3000/posts/{id}
/*
{
  "description": "updated content"
}
*/
  @Patch(':id')
  @UseInterceptors(StatusInterceptor)
  update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.service.update(id, dto);
  }
//http://localhost:3000/posts/{id}
  @Delete(':id')
  @UseInterceptors(StatusInterceptor)
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }

//http://localhost:3000/posts/stats/group
  @Get('stats/group')
  groupAndSum() {
    return this.service.groupAndSum();
  }
}
