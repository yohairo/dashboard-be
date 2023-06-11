import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: "*",
    credentials: true
  })

  // Documentation 
  const options = new DocumentBuilder()
    .setTitle('Dashboard API')
    .setDescription('Dashboard project API')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();


  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions : { filters : true }
  })

  await app.listen(process.env.PORT || 4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
