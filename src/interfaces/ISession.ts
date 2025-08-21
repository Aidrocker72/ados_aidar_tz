import type { SessionStatusEnum } from "@/enums/SessionStatusEnum";

export interface ISession {
    id: number;
    module: string;
    status: SessionStatusEnum | string;
    date: string;
    count: number
}
