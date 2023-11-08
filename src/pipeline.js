import openSocket from 'socket.io-client';
// Socket API connection setup
const socket = openSocket('~/var/logs/rkhunter.log');

// Command line input handling
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  
  // Convert input to ASCII code
  const asciiCode = input.split('').map((char) => char.charCodeAt(0));

  // Send ASCII code to React component via Socket API
  socket.emit('dataPipeline', asciiCode);
});


function initDataPipeline(){
  socket.on('dataPipeline', (data) => {
      // Decode ASCII code
      const decodedData = data.map((code) => String.fromCharCode(code)).join('');

      // Update React component state with decoded data
      this.setState({ decodedData });
    });
}

function destroyDataPipeline(){
  socket.disconnect();
}
