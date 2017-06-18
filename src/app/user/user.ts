export class User {
	id: number;
	username: string;
	email: string;
	password: string;
	check: string;
	salt: string;
	enabled: number;
	account_non_expired: number;
	credentials_non_expired: number;
	account_non_locked: number;
	roles: string[];
}
