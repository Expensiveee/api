import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth/auth.controller";
import { AuthStrategy } from "./auth/auth.strategy";
import { AuthenticatedGuard } from "./auth/authenticated.guard";
import { SessionsSerializer } from "./auth/session.serializer";
import { SpotifyAuthGuard } from "./auth/spotify-auth.guard";
import { UsersService } from "./users/users.service";

@Module({   
    imports: [PassportModule.register({ session: true })],
    controllers: [AuthController],
    providers: [UsersService, AuthStrategy, SpotifyAuthGuard, AuthenticatedGuard, SessionsSerializer]
})
export class SpotifyModule {}
