import { IsString } from "class-validator";

export class CreateCarDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly year: string;
    @IsString()
    readonly model: string;
}