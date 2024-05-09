chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('google.com.br')) {
      const extensionId = 'dpfofggmkhdbfcciajfdphofclabnogo'; // ID da extensão a ser desativada
      chrome.management.setEnabled(extensionId, false, () => {
        console.log('Extensão desativada.');
      });
    } else if (changeInfo.status === 'complete' && tab.url.includes('http://catm.usaflex.com.br:3000/auth')) {
        const extensionId = 'dpfofggmkhdbfcciajfdphofclabnogo'; // ID da extensão a ser ativada
        chrome.management.setEnabled(extensionId, true, () => {
          console.log('Extensão ativada.');
        });
    }
  });
  