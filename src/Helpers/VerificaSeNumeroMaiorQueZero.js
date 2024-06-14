
/**
 * Verifica se um numero é maior que 0.
 * @param {number} valor Valor numerico.
 * @returns {boolean} Retorna true caso for maior que 0, caso não for enviara alerta no navegador.
 */
export function VerificaSeNumeroMaiorQueZero(valor){
 if(valor >= 0){
    return true
 }else{
    window.alert('Coloque valores maiores que zero, ou zero !')
 }
}