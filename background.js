//código que pode ser executado ao instalar, atualizar ou inicializar
// estado e operações de longo prazo, independente do tempo de vida de qualquer página da web ou janela do navegador


chrome.runtime.onInstalled.addListener(()=>{
    chrome.tabs.create({
        url:"http://youtube.com"
    })
})