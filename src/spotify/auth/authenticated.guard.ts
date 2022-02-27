import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";


@Injectable()
export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const auth = context.switchToHttp().getRequest().isAuthenticated();
        console.log(auth);
        return auth;
    }

}