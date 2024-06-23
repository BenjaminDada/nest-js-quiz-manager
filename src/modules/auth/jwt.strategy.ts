import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { User } from "../user/user.entity";

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'qwqwerytuhgfvytr3243657rtyrygtvfrjhtyiuh876'
        })
    }

    async validate(payload: User){
        return{
            id: payload.id,
            name: payload.name,
        };
    }
}