import { Controller, Get, Post, Body, Query } from '@nestjs/common'
import { GuestbookService } from './guestbook.service'

@Controller('api/guestbook')
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  // GET /api/guestbook — returns all entries
  // GET /api/guestbook?category=Feedback — filter by category
  @Get()
  async getEntries(@Query('category') category?: string) {
    if (category) {
      return this.guestbookService.getByCategory(category)
    }
    return this.guestbookService.getAllEntries()
  }

  // POST /api/guestbook — creates a new entry
  @Post()
  async createEntry(
    @Body() body: { name: string; message: string; category: string }
  ) {
    return this.guestbookService.createEntry(
      body.name,
      body.message,
      body.category
    )
  }
}
