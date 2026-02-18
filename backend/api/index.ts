import { NestFactory } from '@nestjs/core'
import { AppModule } from '../src/app.module'
import { ExpressAdapter } from '@nestjs/platform-express'
import express from 'express'

const server = express()
let app: any

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
    )
    app.enableCors({
      origin: [
        'http://localhost:5173',
        'https://personal-website-finals-frontend.vercel.app',
        /\.vercel\.app$/,
      ],
      methods: ['GET', 'POST'],
      credentials: true,
    })
    await app.init()
  }
  return server
}

export default async (req: any, res: any) => {
  const instance = await bootstrap()
  instance(req, res)
}