import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { SpotifyModule } from "./spotify/spotify.module";

const routes = [
    {
        path: "spotify",
        module: SpotifyModule,
    }
]

@Module({
    imports: [SpotifyModule, RouterModule.register(routes)],
})
export class AppModule {}
