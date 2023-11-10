import { Controller, Get, Post,  Body,  Patch,  Param,  Delete,  ParseIntPipe,  Put, } from '@nestjs/common';
import { ReviewService } from '../services/review.service';
import { CreateReviewDto } from '../dto/review.dto';

  
  @Controller('review')
  export class ReviewController {
    
    constructor(private readonly reviewService: ReviewService) {}
  
    @Post('/')
    async createClients(@Body() payload: CreateReviewDto) {
      const newReview = await this.reviewService.create(payload);
      return newReview;
    }
  
    @Get('/')
    async getReview() {
      const review = await this.reviewService.findAll();
      return review;
    }
  
    @Get('/:id')
    async getReviewId(@Param('id', ParseIntPipe) id: number) {
      const review = await this.reviewService.findOne(id);
      return review;
    }
  
    @Put('/:id')
    async updatedReview(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: CreateReviewDto,
    ) {
      const review = await this.reviewService.update(id, payload);
      return review;
    }
  
    @Delete('/:id')
    async deletedReview(@Param('id', ParseIntPipe) id: number) {
      const review = await this.reviewService.remove(id);
      return review;
    }
  }
  