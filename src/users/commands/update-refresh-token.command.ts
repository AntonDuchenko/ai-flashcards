export class UpdateRefreshTokenCommand {
  constructor(
    public readonly userId: string,
    public readonly refreshToken: string | null,
  ) {}
}
