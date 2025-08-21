import { ISession } from "@/interfaces/ISession";

export type TableColumnType = {
    key: keyof ISession;
    label: string;
    sortable?: boolean;
}
