import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Enable CORS so Vue frontend can call this API
  app.enableCors({
    origin: [
      'http://localhost:5173',           // Vue dev server
      'https://your-frontend.vercel.app', // Your deployed frontend
      'https://blitzi17.github.io'        // Your GitHub Pages
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  })

  await app.listen(process.env.PORT || 3000)
}
bootstrap()