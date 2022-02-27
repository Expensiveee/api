import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { IUser } from "../users/users.service";

@Injectable()
export class SessionsSerializer extends PassportSerializer {
    serializeUser(user: any, done: Function) {
        console.log("Seri..", user)
        done(null, user);
    }
    deserializeUser(payload: any, done: Function) {
        console.log("Deseri...")
        done(null, payload);
    }
    
}