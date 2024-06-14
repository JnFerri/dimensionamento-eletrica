/**
 * Verifica se um valor numerico é um numero inteiro ou se é maior que 0 .
 * @param {number} valor 
 * @returns {boolean} Retorna true caso for inteiro e maior que 0, ou senão lança alerta no navegador.
 */
export function VerificaSeNumeroInteiroEMaiorQueZero(valor){
    if(valor >= 0 || valor === null || valor ===''){
        if(/^\d+$/.test(valor) || valor === ''){
            return true
        }else{
            window.alert('Apenas numeros inteiros !!!')
        }
    }else{
        window.alert('Coloque valores maiores que zero, ou zero !')
    }
}