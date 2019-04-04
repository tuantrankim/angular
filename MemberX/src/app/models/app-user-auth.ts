import { AppUserClaim } from '../security/app-user-claim';

export class AppUserAuth {
    userName: string = "";
    access_token: string = "";
    expires_in: number = 0;
    token_type: string = "";
    isAuthenticated: boolean = false;

    claims: AppUserClaim[] = [];
  }

