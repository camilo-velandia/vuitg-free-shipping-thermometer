# FREE SHIPPING THERMOMETER

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

 Este componente mueestra un termometro de compras para envio gratis, este funciona tomando como base una promocion de envio gratis que debe ser perivamente creada
 
 ![targetthermometer](../images/Screenshot%202022-06-13%20084242.png)




## Configuracion


En esta sección, primero debe agregar las instrucciones principales que permitirán a los usuarios usar los bloques de la aplicación en su tienda:

1. Añadir la dependencia `"vuitg.free-shipping-thermometer": "0.x"` al `manifest.json`;
2. Declarar el bloque `free-shipping-thermometer` e incluirlo dentro del minicart preferiblemente.

![image](../images/Screenshot%202022-06-13%20085107.png)


### `free-shipping-thermometer` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `promotionIDpromoName`      | `String`       | nombre de la promocion que define el envio gratis         | `Promo Envio Gratis`        |

## Customizacion

La customizacion de los lementos que componen el componente se puede realizar desde el archivo `vuitg.free-shipping-thermometer.css`

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`



| CSS Handles |
| ----------- | 
| `progressContainer` | 
| `progressbar` | 
| `progressbarFill` | 
| `icon` | 
| `iconActive` |



<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
