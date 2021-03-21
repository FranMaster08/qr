let video = document.querySelector('#VideoPanel')
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(async result => {
    console.log('1) Escanner')
    let scanner = new Instascan.Scanner({ video:video });
    scanner.addListener('scan', function (content) {
        alert('Escaneou o conteudo: ' + content);
        window.open(content, "_blank");
    });
    console.log('2) Instascan')
    let a=await Instascan.Camera.getCameras()
    scanner.start(a[0])
    console.log(`3) Instascan finished ${a[0]}` )
}).catch(err => console.log(`Ocurrio un error ${err}`))



