import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from "passport-spotify";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'spotify') {
    constructor(private usersService: UsersService) {
        super({
            clientID: "58a3d7c08aba44fe814d53224843f11f",
            clientSecret: "fa3bbd74eef24d9ba640ddaeca16689a", // I know this is not secure, but it's just for you to test
            callbackURL: "https://api.radamyy.org/spotify/auth/callback",
            scope: ["user-read-email"]
        })
    }

    validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
        return done(null, profile);
    }
}