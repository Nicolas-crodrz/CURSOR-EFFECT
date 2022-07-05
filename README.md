
# **CURSOR PERSONALIZADO CON ANIMACION**

![efecto del cursor](CURSOR-EFFECT/img/cursor%20effect.gif "Este es el efecto")

## **HTML**

Agregamos un texto, puedes ser de cualquier manera con *h1,h2,p...etc.*

Creamos un div con el *id* cursor.

## **CSS**

Agregamos unos estilos paraTODOS con * y para el body, en el body ocultaremos el cursor, luego agregaremos estilos al div con el ID cursor previamente generado para que sea un círculo ⚫.
También crearemos una animación al pasar por encima del texto con el cursor, una de las formas de hacer esto es la siguiente:

```css
h2:hover ~ #cursor{
width: 100px;
height: 100px;
border: 2px dashed #000;
animation: giro 5s linear infinite;
}

@keyframes giro{
  0%{
  transform: translate(-50%, -50%) rotate(0deg);
  }
  100%{
  transform: translate(-50%, -50%) rotate(360deg);
  }
}
```

Con el estilo del *h2:hover ~ #cursor* lo que conseguimos es que al pasar por encima del texto, el círculo se agrande y cambie el tipo de línea de sólido a discontinuo. También añadimos una animación llamada giro que dura 5 s es linear e infinita(Se repite en bucle) y con @keyframes desarrollamos la animación.

## **JAVASCRIPT**

Creamos una variable cursor con *document.getElementById* para que coja el elemento con la id ( En este caso la id es cursor).

Se ha creado un evento para el movimiento del mouse, para que recoja las coordenadas X/Y del ratón y aplique un estilo.
