import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GuestbookModule } from './guestbook/guestbook.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Loads .env file
    GuestbookModule,
  ],
})
export class AppModule {}
