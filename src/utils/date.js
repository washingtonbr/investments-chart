import moment from 'moment';
import 'moment/locale/pt-br';

moment.updateLocale('pt-BR');

export function date(date) {
  return moment(date);
}
