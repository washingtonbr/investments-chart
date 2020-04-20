import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

export function configDate() {
  dayjs.locale('pt-br');
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isSameOrBefore);
}

export function date(date) {
  return dayjs(date);
}
