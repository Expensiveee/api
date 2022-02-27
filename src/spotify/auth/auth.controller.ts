import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthenticatedGuard } from "./authenticated.guard";
import { SpotifyAuthGuard } from "./spotify-auth.guard";

@Controller("auth")
export class AuthController {
    @UseGuards(SpotifyAuthGuard)
    @Get()
    Auth(@Req() req) { }
    
    @Get("callback")
    @UseGuards(AuthenticatedGuard)
    AuthCallback(@Req() req) {
        return "Very serious route that should be protected!";
    }
}