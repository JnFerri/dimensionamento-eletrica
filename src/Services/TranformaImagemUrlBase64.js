 
 /**
  * Tranforma imagem em string base64.
  * @param {string} caminho  Caminho para a imagem que será tranformada em base64.
  * @returns {Promisse} String da imagem no formato base64.
  */
export async function TranformaImagemUrlBase64(caminho) {
    const response = await fetch(caminho);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}