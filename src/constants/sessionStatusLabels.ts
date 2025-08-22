import { SessionStatusEnum } from '@/enums/SessionStatusEnum';

export const SESSION_STATUS_LABELS: Record<SessionStatusEnum, string> = {
  [SessionStatusEnum.COMPLETED]: 'Завершена',
  [SessionStatusEnum.CANCELED]: 'Отменена',
  [SessionStatusEnum.IN_PROGRESS]: 'В процессе',
  [SessionStatusEnum.PLANNED]: 'Запланирована',
};
