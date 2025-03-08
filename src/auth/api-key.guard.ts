import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class ApiKeyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const apiKey = request.headers['x-api-key'];
        const secretKey = process.env.TGB_API_KEY;

        if (!apiKey || apiKey !== secretKey) {
            throw new UnauthorizedException('Доступ запрещён'); // Блокируем неавторизованные запросы
        }

        return true;
    }
}