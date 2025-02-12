chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
      const extensionId = 'dpfofggmkhdbfcciajfdphofclabnogo';

      if (tab.url.includes('google.com.br')) {
          chrome.management.setEnabled(extensionId, false, () => {
              console.log('Extensão desativada.');
          });
      } else if (tab.url.includes('http://catm.usaflex.com.br:3000/auth')) {
          chrome.management.setEnabled(extensionId, true, () => {
              console.log('Extensão ativada.');
          });
      }
  }
});
