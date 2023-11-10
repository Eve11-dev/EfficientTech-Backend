import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from '../dto/review.dto';
import { Review } from '../entities/review.entity';


@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepo: Repository<Review>,
  ) {}

  async create(createReviewDto: CreateReviewDto) {
    const review = this.reviewRepo.create(createReviewDto);
    await this.reviewRepo.save(review);
    return review;
  }

  findOne(id: number) {
    return this.reviewRepo.findOneBy({ id_product: id});
  }

  findAll() {
    return this.reviewRepo.find({
      order: { id_product: 'ASC' }, 
    });
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    await this.reviewRepo.remove(review);
    return 'Review eliminada';
  }

  async update(id: number, cambios: CreateReviewDto) {
    const oldReview = await this.findOne(id);
    const updateReview = await this.reviewRepo.merge(oldReview, cambios);
    return this.reviewRepo.save(updateReview);
  }
}
