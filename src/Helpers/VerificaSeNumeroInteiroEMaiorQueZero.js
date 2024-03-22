
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