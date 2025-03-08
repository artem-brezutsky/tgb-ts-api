import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ParseLinkDto } from 'src/dto/parse-link.dto';

@Controller('parse-link')
// @UseGuards(ApiKeyGuard)
export class LinkController {
    @Post()
    async analyseLink(@Body() dto: ParseLinkDto) {
        return {
            message: 'Ссылка принята',
            url: dto.url
        }
    }
}
