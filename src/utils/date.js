import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-BR');

export function date(date) {
  return moment(date);
}
