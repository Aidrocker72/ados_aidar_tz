import type { SessionStatusEnum } from "@/enums/SessionStatusEnum";

export interface IFilters {
    status: SessionStatusEnum | string;
    dateFrom: string;
    dateTo: string;
    type: string;
    module: string;
}
