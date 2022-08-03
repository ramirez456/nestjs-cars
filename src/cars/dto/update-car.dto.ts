import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly name: string;

    @IsString()
    @IsOptional()
    readonly year: string;

    @IsString()
    @IsOptional()
    readonly model: string;
}