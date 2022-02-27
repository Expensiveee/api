import { Injectable } from "@nestjs/common";

export interface IUser {
    email: string;
    customers: number;
}

@Injectable()
export class UsersService {
    //A dummy list of users
	private readonly users: IUser[] = [
		{
            email: "theexpensiveee@gmail.com",
            customers: 7
		},
        {
            email: "mrmyzaa@gmail.com",
            customers: 1
        },
	];

	async getUser(email: string): Promise<IUser> {
        return this.users.find(user => user.email === email);
	}
}
