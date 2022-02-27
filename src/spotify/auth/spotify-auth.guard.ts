import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class SpotifyAuthGuard extends AuthGuard('spotify') {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const result = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();

        if (result) {
           await super.logIn(request);
        }

        console.log(result);

        return result;
    }
}
