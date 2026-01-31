import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,

      playground: false, // playground is deprecated
      introspection: true, // Sandbox
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
