import { IsUrl } from "class-validator";

export class ParseLinkDto {
    @IsUrl({}, { message: 'Некоректный URL' }) url: string
}