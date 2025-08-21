import type { SessionStatusEnum } from "@/enums/SessionStatusEnum";

export interface ISession {
    id: number;
    module: string;
    status: SessionStatusEnum;
    type: string;
    date: string;
    room: string;
    group: string;
}
