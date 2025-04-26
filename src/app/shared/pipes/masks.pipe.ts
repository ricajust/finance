import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masks'
})
export class MasksPipe implements PipeTransform {

  transform(value: string, type: string): string {
    switch (type) {
      case "phone":
        return this.phoneFormatter(value);
      case "currency":
        return this.currencyFormatter(value);
      case "date":
        return this.dateFormatter(value);
      case "dateTime":
        return this.dateTimeFormatter(value);

      default:
        console.log("Formato de máscara inválido!");
        break;
    }
    return value;
  }

  phoneFormatter(number: string): string {
    number = number.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (number.length === 11) {
      return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Celular
    } else if (number.length === 10) {
      return number.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'); // Fixo
    } else if (number.length === 8) {
      return number.replace(/(\d{4})(\d{4})/, '$1-$2'); // Fixo
    }
    return number; // Retorna sem formatação se não corresponder
  }

  currencyFormatter(value: string): string {
    const numericValue = parseFloat(value); // Converte para número de forma segura
    // Formata para o padrão brasileiro
    const formattedValue = numericValue.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `R$ ${formattedValue}`; // Retorna o valor formatado com o símbolo da moeda
  }

  dateFormatter(value: string): string {
    const [year, mounth, day] = value.split("-");
    return `${day}/${mounth}/${year}`;
  }

  dateTimeFormatter(value: string): string {//"2025-04-14 10:10:30.518"
    let [date, time] = value.split(" ");
    [time] = time.split(".");
    const [year, mounth, day] = date.split("-");
    const [hour, min, sec] = time.split(":");
    return `${day}/${mounth}/${year} | ${hour}:${min}:${sec}`;
  }
}
