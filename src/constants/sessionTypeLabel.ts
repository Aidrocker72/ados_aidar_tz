import { SessionTypeEnum } from "@/enums/SessionTypeEnum";

export const SESSION_TYPE_LABELS: Record<SessionTypeEnum, string> = {
    [SessionTypeEnum.LESSON]: 'Занятие',
    [SessionTypeEnum.EXAMINATION]: 'Экзамен',
    [SessionTypeEnum.ACCREDITATION]: 'Аккредитация',
}
