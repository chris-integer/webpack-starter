import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre }!!!`;
    document.body.append(h1);

    console.log(`Saludando a ${nombre}`)

// const imagen = document.createElement('img');
// imagen.src = webpacklogo;
// document.body.append(imagen);

}

