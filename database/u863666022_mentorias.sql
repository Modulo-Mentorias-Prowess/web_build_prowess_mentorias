-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 18-12-2023 a las 20:02:50
-- Versión del servidor: 10.6.15-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u863666022_mentorias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `content`
--

CREATE TABLE `content` (
  `id` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `content`
--

INSERT INTO `content` (`id`, `name`, `description`) VALUES
('09fbc124-6564-40f2-bfeb-1b6d111c96f8', 'J. Col Social Academy - POST', 'Se requiere un post para la materia de Física con el tema de Movimiento rectilineo uniforme(MRU), Movimiento rectilineo uniformemente variado, la imagen se encuentra en la campeta de los emprendimientos. ( La parpeta tiene el nombre de Foto MRU y MRUV) - Fecha de entrega: 16/11/23'),
('0a2d9314-c72d-466f-ab2e-387f065872aa', 'MF.Bisuteria Fina-POST-VIDEO', 'No asignado'),
('0b2cfd75-c703-4e9f-8ac4-a576233d742e', 'Nath Pets Peluqueria Canina y algo más - POST', 'Solicita un nuevo logo creativo que muestre \"NATH PETS\" que se lea claro y en la parte de abajo \"Servicio veterinario\" y otra \"peluquería Canina y algo más...\" . Con los mismo colores del logo anterior.  - Fecha de Entrega: 30/11/23'),
('0ba2f2c0-5a1d-42b6-a724-aed6bf60d797', 'Cake´s Jireh - VIDEO', 'Solicita un video de sus productos con los precios incluidos, los postres que ella ofrece se encuentran en su catálogo de WhatsApp: https://wa.me/c/593988393994 '),
('0cfeba25-69c9-4620-9da9-88583fd79dfe', 'Tech-Services - POST', 'Post con imágenes de la carpeta: contenido: fecha: 11/10/2023. sobre reparación de impresoras, poner las frases: \"¿Problemas con tu impresora?\" En Tech-Services te la reparamos\" - Error de almohadillas  - Atasco de papel    - Imprime en blanco    Ven cotiza con nosotros.'),
('0dbd385e-a3c5-4686-82ba-1930930861e2', 'PartyBox Deco - POST', 'Solicita un post, las imagenes se encuentran con la carpeta \"post libro\" '),
('10e66ad5-87df-4df6-a908-4aa415e361bd', 'Cake´s Jireh - VIDEO', 'Solicita un video de sus productos con los precios incluidos, los postres que ella ofrece se encuentran en su catálogo de WhatsApp: https://wa.me/c/593988393994 '),
('17dfc02b-08b2-4d13-8743-6093e9b812ac', 'Nanyta Kids - VIDEO', 'Requiere un vídeo con transiciones interesantes entre vídeos y fotografías en el que se note el tabajo de la actividad realizada. Las fotos y vídeos se encuentran en la carpeta \"nuevo contenido\". Igualmente pide avances para el día de mañana.  - Fecha de Entrega: 09/11/2023'),
('19291620-5983-4fc0-9bd6-da954cb4ed7e', 'ANHATAC CUANTICO', 'Video sobre los beneficios del biomagnetismo y la bioenergética en las personas'),
('19327d74-08b5-4c76-8c0f-a74c411ab310', 'Cake´s Jireh - POST', '\"La clienta necesita que le ayudemos creando una publicidad que contenga todos sus productos que son los Cake\'s de vainilla chocolate, mixto, naranja  y también  recalcando su nuevo producto Cake\'s de zapallo.  Por otro lado también poner precio del producto: 1 Cake\'s $1.50 2 Cake\'s $2.50 3 Cake\'s $3.50\" - 19/10/2023'),
('1934d1ef-0a9e-4f2b-9e51-b00eba205378', 'Chamito Burger - No tiene contenido ', 'No asignado'),
('205cd53e-28a0-4041-81f7-d193c3d1c6ca', 'Glenda Beal - VIDEO', 'Se solicita un video con un clip de Chayanne, en donde se coloque las imágenes del emprendimiento. El clip se encuentra en el link de la carpeta del emprendimiento con el nombre de Nuevo contenido.'),
('217dc245-240d-450f-b930-fde43b93961d', 'Musuguangu-Video', 'Solicita que se le realice un reel de acuerdo a las fotografias que me facilito, desea algo impactante.'),
('270c9dd0-d124-4c72-b3cc-6a5d31d3ecea', 'Nath Pets Peluqueria Canina y algo más - POST', ' Quietar el precio y poner \"servicio a domicilio, previa cita\". \"Promoción vacunas Antirrábica de en la comodidad de tu hogar haz cita\" poner ahi su logo. \"Todas las vacunas disponible para tus mascotas. En la comodidad de tu hogar\" , previa cita y su logo. Todos con servicio a Domicilio hágalo más grande para que entre toda la información con el logo del emprenidmiento y teléfono. Adjunto las fotos en la carpeta del emprendimiento. - Fecha de Entrega: 15/11/23'),
('272a9774-f533-4178-82b0-f8cd8fe5678e', 'J. Col Social Academy - POST', 'Un post con 4 imágenes sobre los tips para mejorar la concentración en los estudiantes. '),
('272dca6b-8376-4c2b-8131-bfb43e4da1d0', 'Las Delicias de Alondra - POST', ' Solicita una tarjeta de presentación para entregar a los clientes y conocidos, el cual tiene que contener el logo, todos los tipos de bocaditos tanto como dulce y sal, telefono, dirección. - 18/10/2023'),
('279c73d8-e8c6-4e87-90c1-8391a3e3ecef', 'Cake´s Jireh - POST', 'Solicita otro post como el que se le envió anteriormente, pero como las mini masquesas. - Fecha Entrega: 25/10/2023'),
('28a532ff-aa16-4224-85c7-c4f6ade95515', 'Elizabeth Trujillo - Asesora Financiera-VIDEO', 'Solicita un video y post promocionando equipos y creando contenido de valor; pide que revise su página ECOSERVICESEC.'),
('2fb4bf3c-a547-42fb-ba17-8e2efc4cfe48', 'Mercy Desing - POST', 'Post con las imágenes de la carpeta: contenido: fecha: 11/10/2023. Poner en el post las frases \"Hecho a mano\" \"Exclusivo y personalizado\" \"Marca ecuatoriana con tradiciones ancestrales del bordado de Zuleta\" poner redes sociales'),
('3069b47b-ef50-4683-ba50-a5d6a8f1d5dc', 'La Casa del Encocado - POST', 'Requiere de un flyer en donde se especifique que atienden los días viernes, sábado y domingo, e igualmente se muestren sus platos. Pongo una referencia en la carpeta. Las fotos de los platos se pueden tomar de la carpeta - Fecha de Entrega: 09/11/2023'),
('30ffcabb-5eda-4c50-8bf5-e4fca212f907', 'Las Delicias de Alondra - POST', 'Solicita imágenes con diferente diseño al post que ya se realizó, con los bcoadtios que se encuentran ahí y otros que ella aumentó: Bocaditos de sal, más bolitas de más, y los bocaditos de dulce más empanadas de mermelada, cocaditas, serpentinas de manjar y churritos.'),
('33d5811d-bfdd-4c97-8be5-511e5a09cbd0', 'Taller Artesanal las 3E - Video', 'Se solicita un video creativo de 30 segundos con las imágenes que se encuentran en la carpeta del emprendimiento \"Nuevo contenido 14 de diciembre\". Solamente colocar en la Dirección: Guayaquil.'),
('347726fe-1dbf-4d10-98f0-68b601c54ec0', 'Las Delicias de Alondra - VIDEO', 'Quiere un video sobre nuevos vocaditos va a realizar, son iguales a las fotos que se encuentran en la carpeta, diferenciando cuáles son de dulce y cuáles son de sal. '),
('36626b7b-3ab1-4964-939c-d9728a6303b2', 'Nath Pets Peluqueria Canina y algo más - POST', 'Solicita otro post  que diga los mismo pero con \"control de pulgas y garrapatas\" y poner un perro,  el resto todo igual. - Fecha de Entrega: 17/11/23'),
('37e69505-7880-4531-b786-0a93e279248a', 'J. Col Social Academy - Video', 'Solcita crear un vídeo con el tema de la Ley de Signos como referencia se encuentra un video en la carpeta del emprendimiento.'),
('39d9a357-31b6-4448-849b-b3e26aacc9b2', 'Lucero Stetik - VIDEO', ' Requiere un video sobre masajes relajantes descontracturantes. Las fotos de su emprendimeinto se pueden tomar de la carpeta, ademas pidio mas fotos sacadas del internet.  - Fecha de Entrega: 15/11/2023'),
('3e15ae44-7a71-40b6-8139-79fc43bc0316', 'Las Delicias de Alondra - POST', 'Una foto de perfil para sus redes sociales en forma redonda, en base al log que ya tiene.'),
('4298aa02-ef0d-4cfe-9569-4f60e7a78094', 'Cakes By Kissy-POST-VIDEO', 'No asignado'),
('430a6953-b58f-4f2c-bf66-ea888c393617', 'Sabores Amarve - Video', 'Se solicita un reel para el \"Tequeño Navideño\". Tequeños Navideños son palitos de queso, aceitunas, tocineta, pasas y jamón envueltos en una fina masa de harina de trigo que se pueden consumir fritos u horneados. En la carpeta del emprendimiento se encuentran las imágenes para utilizar en el reel.'),
('4462eceb-28a0-4e7c-b64a-8f6c4aac359a', 'Lucero Stetik - POST', 'Realizar Post de UNA SOLA PÁGINA, similar a una pancarta, guiarse de la carpeta CONTENIDO donde se encuentra un ejemplo y las indicaciones del texto y las imágenes. '),
('449b14c4-6e15-4197-b47d-1cb513e39e9d', 'J. Col Social Academy - POST', 'Generar contenido similar a las imagenes subidas en la siguiente dirección de la carpeta CONTENIDO RETO: https://uespe-my.sharepoint.com/personal/lesimbania_espe_edu_ec/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Flesimbania%5Fespe%5Fedu%5Fec%2FDocuments%2FAlumnos%5FIntegrantes%20Vinculaci%C3%B3n%2FAndres%20Auquilla%2F07%20Carpeta%20Cursos%20FUDELA%2DHIAS%2F04%20MARKETING%20DIGITAL%20B%C3%81SICO%2F11%20DOCUMENTACI%C3%93N%20DE%20REGISTRO%20PARA%20EMPRENDEDORES%2FJ%2ECol%20Social%20Academy%2FCONTENIDO%20RETO  -'),
('466abab3-360c-4daf-9e83-ea469ed224d2', 'ANHATAC CUANTICO - VIDEO', 'Video sobre el beneficio de la inteligencia emocional en el mundo de las ventas'),
('489ab0d8-b4e1-4f90-bec6-c2c2b52c067f', 'ANHATAC CUANTICO - VIDEO', 'Solicita un video hablado de 30 segundos, sobre los beneficios de las reconexiones, en la carpeta de nuevo contenido está una imagen de referencia que solicita. Para el contacto de tiktok: https://www.tiktok.com/@anahata.cuntico (Nuevo) y Dirección: Sangolquí - '),
('4da99398-7710-4a5e-98bf-b30bb698c0a6', 'Misk\'i Achu - Video', 'Se solicita un video de 30 segundos con las imágenes que se encuentra en la carpeta del emprendimiento. '),
('519f5d8c-1f04-408a-8145-ec147a3066c8', 'LUCERO STETIK - POST', '\"Se solicita un post creativo con la siguiente información: Lucero Stetik te ofrece  Masajes relajantes descontracturantes , piedras calientes y lifting de pestañas Lunes, Martes, Miércoles y viernes de 10am a 6pm los domingos previa cita en la Plaza comercial Lumbaqui.\"'),
('51fcc733-ffa2-4846-bade-76b171ec3454', 'Vidalu - POST', 'Realizar un post con la imagen subida a la carpeta, y con una descripción (dada por el dueño del emprendimiento)'),
('5a1f5b67-c963-4022-9967-05d86dd75f37', 'Corviches Jenny Manaba-POST-VIDEO', 'No solicitado'),
('5d2733ff-45af-43bb-a378-fabf46a6ed6d', 'Tibelly´S Dulce Melodía - POST', 'Realizar logo para el emprendimiento como el ejemplo enviado \"logo tibelly\'s bakery (letras grandes)\", LOGO REDONDO, mismo tipo de letra, cambiar el texto: NOMBRE DEL EMPRENDIMIENTO: Tibelly\'s Bakery ESLOGAN: Artesanalmente Delicioso, mismos colores, letras del nombre del emprendimiento más grande, muñeca más pequeña (con toda la frase)'),
('625dfb6b-223c-4703-aa82-cb71db953aa0', 'Divafanis donuts - POST', 'Solicita la mejora de su logo actual por uno más llamativo - Fecha de entrega: 16/11/23'),
('62bf75f1-9bb2-40dc-b132-95a25c1b1d0e', 'Sabores Amarve - VIDEO', 'Pidio la elaboración de un vídeo con la temática de Halloween Fechas de entrega: 26/10/2023'),
('67dd00aa-f0ad-4e0e-b4c4-a3cac6078c83', 'Taller Artesanal las 3E - VIDEO', '\"Video tipo carrusel de camas de niña, sacar frases e ideas del siguiente texto: \"\"¡Hola! En Muebles Las 3E, nos especializamos en fabricar sueños para niños a través de nuestros muebles diseñados especialmente para ellos. Trabajamos con pasión y dedicación para crear ambientes mágicos y encantadores que inspiren la imaginación y la creatividad de los más pequeños.  Nuestra variedad de muebles incluye camas temáticas con diseños divertidos, como castillos de princesas, autos de carreras, naves espaciales y '),
('68fac279-d026-4dc0-9d08-d62551f7a8d8', 'Ida Sandrea Crochet-VIDEO', 'Video para TikTok con los productos: Llaveros, porta lápices, gorros, crop top. Con las imágenes de la carpeta Contenido - fecha - 03/10/2023.'),
('6bbfacea-f04c-4558-b928-090cbd2ae2a3', 'Elizabeth Trujillo - Asesora Financiera-VIDEO', ' Solicita un vídeo promocional, se puede utilizar las imagenes de su facebook https://www.facebook.com/Ecoservicesec2?mibextid=ZbWKwL - Fecha: 1-11-23'),
('726105a2-4806-432e-a3a2-54730444e0dc', 'Casa de los revestimientos - POST', 'Solicita poner su email en el post realizado en la semana del 25-29 en el apartado de redes sociales, el email es monica.remache@hotmail.com'),
('7306b32e-082d-42df-a3d9-f999994da1b9', 'Sabores Amarve - VIDEO', 'Video para la plataforma promocional, con la temática de black friday, el mismo debe ser tipo promocional y que contenga transiciones con todas la fotos(Las fotos se encuentran en la carpeta de los emprendimientos con el nombre de: BLACK FRIDAY PARA TIK TOK. OFERTAS: 30 tequeños por $5 cuando el precio es $7 - Fecha de Entrega: 17/11/23'),
('74d718fe-18f8-401c-b1c4-32f9d7eeaf0a', 'PartyBox Deco - POST', '\"Requiere se realice un post promocionando su producto y relacionado al Black Friday, con la siguiente información: Es cosida 100 hojas a cuadros Forrada en tela Bolsillos internos Oferta black friday 10$, precio normal 12$. La foto se encuentra en la carpeta \"imagenes nuevas\"- Fecha de Entrega: 09/11/2023'),
('7db147b9-7a2a-4360-ac2a-218180ca622c', 'Sabores Amarve - POST', '\"Requiere hacer un post para Instagram de una promoción para el Black Fryday de 30 Tequeños Fiesteros por $5, válida del 15 al 30 de noviembre, y que diga que:  No incluye delivery.  Se entregan en su bandeja crudos listos para freír o para hornear.  Ideales para desayunos, meriendas, reuniones o celebraciones.  Las fotos para el post se ubican en la carpeta \"\"black friday\"\" - Fecha de Entrega: 10/11/2023'),
('7e9b4ee7-3690-44db-ae3c-066489b2a8f8', 'San Andres - POST', 'Solicita la creación de un post llamativo con las imágenes que se encuentran en la carpeta \"Contenido actualizado\" - Fecha de Entrega: 15/11/23'),
('8196131d-4a2f-4fb6-86cd-ae915c845479', 'Lormagic Eventos - Video', 'Solicita crear un video hablado ofreciendo los servicios de eventos sociales debe mencionar: Decoraciones en globos, flores, manteleria, carpas, sillas DJS, hora loca, bocaditos, catering detalles personalizados, chocolateria, cocteleria'),
('852770fb-ddbb-451f-8811-1a49cd85e118', 'Velas y Algo más Purimary - VIDEO', 'Solicita un video para publicidad de sus productos, las imágenes están en la carpeta, con ellas realizar el nuevo contenido. - Fecha de Entrega: 26/10/2023'),
('85a2c0f8-7b27-4239-a7e2-b835ec9c8a9d', 'Musuguangu-VIDEO', 'Solicita que se le realice un reel de acuerdo a las fotografías que me facilito, desea algo impactante. - 20/10/2023'),
('8bf86317-d7d2-4c30-8eab-d526d87c11bd', 'Tech-Services - POST', 'Post con imágenes de la carpeta: contenido: fecha: 11/10/2023. sobre reparación de impresoras, poner las frases: \"¿Problemas con tu impresora?\" En Tech-Services te la reparamos\" - Error de almohadillas  - Atasco de papel    - Imprime en blanco    Ven cotiza con nosotros.'),
('97e097d5-00c5-48ed-a94a-2494062ee586', 'SheinEcuadorByZoe - POST', 'Solicita la creación de un catálogo, con un estilo navideño dependiendo a los colores de la marca. Las imágenes se encuentran en la carpeta del emprendimiento.  - '),
('99534872-7631-43f2-8214-2f9a4f15e179', 'Pixelcronos - POST', 'Se solicita que se mejore el logo que se encuentra en la carpeta del emprendimiento segun su giro el cual Pixelcronos, es un emprendimiento, en donde brindamos diseños personalizados en diversos productos, utilizando la técnica retro del Pixel Art y al mismo tiempo, innovando con el uso de Inteligencia Artificial dentro de la creación de diseños personalizados, es un tenda de Estampados Personalizados en Pixel Art.'),
('9a5db795-0e52-46ec-a212-aa4b8bc53947', 'ANHATAC CUANTICO - VIDEO', 'Realizar un vídeo de los 7 chacras síntomas de bloqueo físico y emocional y el beneficio de estar equilibrado en la parte física y emocional de cada chacra.  - Fecha de entrega: 16/11/23'),
('9b54c3fb-649c-430f-b3de-00f1fab38659', 'Centro Médico Santo Thomás - VIDEO', 'Video sobre como llegar a Centro Médico Santo Thomás - Sucursal - Fecha de Entrega: 26/10/2023'),
('a6122b5b-8c98-479c-ac49-1383d3587bde', 'Lormagic Eventos - POST', 'Solicita crear un flyer acerca de la navidad, en el cual ofrezca los servicios del emprendimiento por ejemplo ofrece animaciones, cañon de espuma, algodón, servicio de hot dog, helados, granizados. En el flyer debe ir alguna frase como \" LORMAGIC EVENTOS\" \"Reserva con tiempo tus eventos navideños\" \"Es ideal para escuelas, Colegios y Oficinas\". '),
('adb83d1e-41aa-4046-8a05-9e0f4d67ea11', 'Tejidos Jendry - POST', 'Se solicita la creación del logo desde cero para el emprendimiendo Tejidos Jendry el cual trata de tejer a mano y con telares en madera como Guantes, bufandas y gorros.en lana Yasmin. Solicita que sea con los siguientes colores marrón y morado.'),
('b41b1d43-2536-4f93-acfa-06a187d7a8c2', 'Velas y Algo más Purimary - VIDEO', 'Solicita un video corto sobre publicidad acerca de sus cojines de doble cara, en esta debe colocar la publicidad en donde puede encontrar. - Fecha de Entrega: 10/11/2023'),
('b58685bc-d2b9-4271-958f-5b418f0fd0ab', 'ANHATAC CUANTICO - Video', 'Se solicita un video hablado de 30 segundos, sobre los \"desintoxicación iónica\". Colocar corregido en el video el nuevo perfil de tiktok: https://www.tiktok.com/@anahata.cuntico y en dirección solamente colocar: Sangolquí.  Los beneficios a resaltar en el video: Reducción de estrés, reducción de medidas, acné, problemas de próstata problemas cardiovasculares y adicciones como alcohol, drogas y cigarrillo. En la carpeta del emprendimiento \"Desintoxicación iónica\" hay una imagen con más información. '),
('b692a26b-dc09-46c1-aa4f-ec4607ba5462', 'Misk\'i Achu - Video', 'Se solicita un video de 30 segundos con las imágenes que se encuentra en la carpeta del emprendimiento. '),
('b756d5d9-a637-4e38-beee-47c16fdd01e3', 'LUCERO STETIK - VIDEO', '\"Se solicita hacer un video con las siguientes promociones: Masaje relajante descontracturantes $ 15.  Masaje +desentoxicacion iónica $25. Masaje +Baño de cajón + limpieza facial $25. Estos servicios se brindan los días jueves en Lago agrio.\"'),
('b8153ba7-baca-4439-9079-6432fb086909', 'Sabores Amarve - POST', 'Realizar un post con la temática de black friday (30 tequeños fiesteros por $5)'),
('b979a774-2146-47cb-93bb-1c82f4ca0477', 'ConstruSoluciones - POST', 'Quiere un nuevo logo para su emprendimiento en base a los servicios que ofrece, post para foto de perfil y portada para sus redes sociales.'),
('bc130355-d44f-49f4-98f6-4741f4fe61a0', 'ANHATAC CUANTICO - VIDEO', 'Un video con los beneficios de Reiki en lo físico, mental, emocional y espiritual. - Fecha de Entrega: 09/11/23'),
('be1107ad-0c58-4386-9264-1cbb33e4761f', 'Velas y Algo más Purimary - VIDEO', 'Solicita un video para publicidad para facebook, de varios productos. Quiere que esté dirigido más a empresas, un video no tan largo. - Fecha: 30/10/2023'),
('bf33587e-7f88-4f7b-bc85-c05a2fe5f781', 'Las Delicias de Alondra - POST', 'Solicita imágenes con diferente diseño al post que ya se realizó, con los bcoadtios que se encuentran ahí y otros que ella aumentó: Bocaditos de sal, más bolitas de más, y los bocaditos de dulce más empanadas de mermelada, cocaditas, serpentinas de manjar y churritos.'),
('c283b3be-28ea-4e93-a2ff-92215bc8a93c', 'Cake´s Jireh - VIDEO', 'Solicita un video de sus productos con los precios incluidos, los postres que ella ofrece se encuentran en su catálogo de WhatsApp: https://wa.me/c/593988393994 '),
('c6d12fc3-549f-41da-a5e6-c84fd0405f35', 'Nath Pets Peluqueria Canina y algo más - VIDEO', 'Require un video sobre los servicios que su emprendimiento ofrece como: desparasitación, suero sube defensas, vacunas rábicas, tratamiento para pulgas y garrapatas, sextuples, y triple felina. En el video también decir \"todo esto y más desde la comodidad de tu hogar\". En la carpeta del emprendimiento esta un video referente de como desea el video pidió algo así mejorando la voz.  - Fecha de Entrega: 23/11/2023  '),
('c708c4c8-6101-4c6e-829c-73b787d66f94', 'Divafanis donuts - POST', 'Solicita la creación de una etiqueta con las especificaciones que se detallan en la carpeta \"contenido etiqueta\" dentro de la carpeta del mismo emprendimiento '),
('c778db4b-f69a-4e0a-a9db-16b9182e3646', 'Elizabeth Trujillo - Asesora Financiera-POST', 'Solicita un video y post promocionando equipos y creando contenido de valor; pide que revise su página ECOSERVICESEC.'),
('ca0d37eb-f29a-473b-814c-f3b92855238d', 'J. Col Social Academy - VIDEO', 'Desea realizar un vídeo promocional enfocado a la preparación para las evaluaciones parciales de los colegios, se coloco en la carpeta un vídeo de referencia e igualmente pide se siga el estilo del siguiente video de instagram: https://www.instagram.com/reel/Cyw8XQjuqvw/?igshid=MTc4MmM1YmI2Ng== - Fecha de Entrega: 09/11/2023'),
('cca1aae7-e2c9-418d-930a-e08a41efe20d', 'ANHATAC CUANTICO - VIDEO', 'Requiere un video sobre la \"Reconexión en la Sanación\". Las imágenes las pueden sacar del internet igual la información.  - Fecha de Entrega: 23/11/23'),
('cd02eb9c-56fe-473c-b5fe-9b7b622368c1', 'Nanyta Kids - VIDEO', 'Se solicita un video, el mismo debe ser solo de transiciones, o sea que pasen las imágenes de una en una con una melodía divertida (Las fotos se encuentran en la carpeta de los emprendimientos con el nombre de FOTOS PARA EL VIDEO DE TRANSICIONES) - Fecha de Entrega: 17/11/23'),
('d436c6bf-7c28-4583-89c5-8671eefeec4d', 'Sweet and natural\'s by Ana - POST/VIDEO', 'Sin asignar'),
('d4ef2bb4-5eb2-450b-9172-3bd55c4b9f86', 'KeRa Colors-POST', 'Post de UNA SOLA IMAGEN Sobre: cursos o clases de formulación y fabricación de Keratina orgánica, con olor Botox matizante y shampoo limpieza profunda. 3 shampoo matizante, perlado y sin sal. Se entrega diploma de aprobado el curso \"Emprende y empieza a facturar \" Tomar imágenes de carpeta CONTENIDO - FECHA - 03/10/2023.'),
('ddb620e3-c063-42d6-9e80-b00380a89bb0', 'Musuguangu - VIDEO', 'Solicita crear un video hablado sobre sus productos que ofrece, las imagenes se encuentran en la carpeta del emprendimiento.'),
('e24bf97e-37ab-4296-8003-15fbbfb65e15', 'Nanyta Kids-POST-VIDEO', 'No asignado'),
('e6545781-16ba-4cea-b4c2-820541dfd5ad', 'Vidalu - POST/VIDEO', 'Sin asignar'),
('e6b6a63b-5ee0-4aa7-b600-d4386121222c', 'Cake´s Jireh - POST', 'Solicita un post con el mismo contenido que el post anterior, pero en la misma imagen para subir a la plataforma se servicios de delivery. - 20/10/2023'),
('e94cb7f2-b23e-4916-ac77-dd5d1d09e254', 'Glenda Beal - POST', 'Post con las imágenes de la carpeta CONTENIDO: FECHA: 19-10-2023, poner el logo subido en esa carpeta y que diga  \"Kaká amigurumi otro obsequio listo para entregar, hecho con ??\" - 23/10/2023'),
('f2a47b90-b12d-454f-a259-69c077950277', 'Arte y confecciones Lina POST - VIDEO', 'No ha solicitado'),
('f9fed1d1-1e7a-4e61-ba64-96702d386658', 'Divafanis donuts - POST', 'Solicita un catalogo con las fotos que se encuentran en la carpeta nuevo 23 de octubre - Fecha de Entrega: 27/10/23'),
('fa44ab1d-19bd-441d-8579-f96d79b3d102', 'Nath Pets Peluqueria Canina y algo más - POST', 'Post similar a la imagen de: CONTENIDO - FECHA - 10/10/2023. Con el logo del emprendimiento y que diga: \"¿Ya lo vacunaste?\"'),
('fdc48690-11ce-458b-a547-191be25a65ae', 'Nath Pets Peluqueria Canina y algo más - POST', '\"Post que diga: ¿Ya lo desparasitaste? Desparasitación + Protector Hepático para perros , gatos y conejos Servicio a Domicilio Contáctanos 0979535939. De imagen: \"\"Poner perro y gato que le estén dando algo en la boca\"\"\" - Fecha de Entrega: 25/10/2023'),
('fee00ba0-2987-4b6b-ace3-cbc0b77015f3', 'Nath Pets Peluqueria Canina y algo más - POST', 'INFORMATIVO SIMILAR AL SUBIDO EN LA CARPETA: CONTENIDO- FECHA - 04/10/2023 - ELIMINAR \"PLATINO Y BIENESTAR ANIMAL\" Y PONER EL LOGO DE NATH PETS PELUQUERIA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `content_mentorship`
--

CREATE TABLE `content_mentorship` (
  `id_content` varchar(64) NOT NULL DEFAULT '',
  `id_mentorship` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `content_mentorship`
--

INSERT INTO `content_mentorship` (`id_content`, `id_mentorship`) VALUES
('0a2d9314-c72d-466f-ab2e-387f065872aa', '88e86d2c-3d1b-44bc-995c-9e5bf7aecc15'),
('1934d1ef-0a9e-4f2b-9e51-b00eba205378', '9d864a46-f5e9-4cf4-956a-2dc124aece46'),
('4298aa02-ef0d-4cfe-9569-4f60e7a78094', 'e3c2b60a-7a77-4ef2-950b-1d5e7de967ae'),
('51fcc733-ffa2-4846-bade-76b171ec3454', '77441085-4a7a-457d-ae7d-61a5f4e59c47'),
('5a1f5b67-c963-4022-9967-05d86dd75f37', '9de0cb70-ef13-4705-9500-a4b6a1d5d7f1'),
('62bf75f1-9bb2-40dc-b132-95a25c1b1d0e', '75f79ede-951d-46e3-aca0-722299429b21'),
('67dd00aa-f0ad-4e0e-b4c4-a3cac6078c83', 'b84dcb6a-c7e2-45d6-8e8a-56b1affbeabe'),
('85a2c0f8-7b27-4239-a7e2-b835ec9c8a9d', 'cb80d268-4518-413c-924c-de2ceabf400e'),
('d2f2db1c-9ae6-4494-93d2-c91bb09a8ada', 'f1b0d5b5-7e8c-4d97-98ee-0154fe3540ad'),
('d436c6bf-7c28-4583-89c5-8671eefeec4d', 'a686d3e1-14f8-48a9-b5c9-4a01a765fe57'),
('e24bf97e-37ab-4296-8003-15fbbfb65e15', 'ddaf50f9-8933-4149-85e7-22ba290ddc99'),
('e6545781-16ba-4cea-b4c2-820541dfd5ad', '664df46e-b1bb-4178-974e-9ee72737cbd3');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `content_mentorship_display`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `content_mentorship_display` (
`id_content` varchar(64)
,`id_mentorship` varchar(64)
,`content_name` varchar(128)
,`content_description` varchar(512)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrepreneur`
--

CREATE TABLE `entrepreneur` (
  `id` varchar(64) NOT NULL,
  `names` varchar(64) NOT NULL,
  `last_names` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `address` varchar(256) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `nameStore` varchar(64) NOT NULL,
  `descriptionStore` varchar(256) NOT NULL,
  `googleMapsURL` varchar(256) NOT NULL,
  `sector` varchar(64) NOT NULL,
  `city` varchar(64) NOT NULL,
  `province` varchar(64) NOT NULL,
  `twitter` varchar(128) NOT NULL,
  `facebook` varchar(128) NOT NULL,
  `instagram` varchar(128) NOT NULL,
  `tiktok` varchar(128) NOT NULL,
  `type` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `entrepreneur`
--

INSERT INTO `entrepreneur` (`id`, `names`, `last_names`, `email`, `address`, `phone`, `nameStore`, `descriptionStore`, `googleMapsURL`, `sector`, `city`, `province`, `twitter`, `facebook`, `instagram`, `tiktok`, `type`) VALUES
('02a35175-236f-4a56-b4f9-58588a31f435', 'Lisbeth', 'González Villegas', 'lisbarby24@gmail.com ', 'Cooperativa Los Jazmines, Manzana 255 solar 13 Guayaquil', '0960954939', 'Tech-Services', 'Servicio técnico de reparación y mantenimiento de equipos electrónicos (PC, laptop e impresoras)', 'https://goo.gl/maps/PQE5vjgURKoisFDf6 ', 'Floresta 2', 'Guayaquil', 'Guayas', 'N/A', 'GyeTechservices ', 'tech_servic?igshid=YmMyMTA2M2Y= ', 'techservice_lisbarby', 'FUDELA'),
('07342143-82aa-4708-b877-180d27961de3', 'Anais Virginia', 'González Coronado', 'anaisgonzaleztrabajo@gmail.com', 'Av. Martha Bucaram, Calle 10 con Ocarigua', '0998953517', 'Sugar Mommy Pastelería', 'Elaboramos todo tipo de postres y pasteles 100% personalizados, realizamos bocaditos de sal y de dulce, galletas decoradas también personalizadas, adicionalmente realizamos todo el proceso de decorado básico. (set de decoración para el evento)', 'https://www.google.com/maps/place/0%C2%B018\'00.3%22S+78%C2%B034\'00.9%22W/@-0.3000833,-78.5669167,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.3000833!4d-78.5669167?hl=es&entry=ttu', 'Cotocollao', 'Quito', 'Ecuador', 'N/A', 'N/A', 'sugarmommypasteleria/', 'N/A', 'HIAS'),
('0852e2f9-240e-425c-9f30-e54d0c2c1ca0', 'Andrés Eduardo', 'Parra Hernández', 'andreseph2trab@gmail.com', 'N/A', '0988938940', 'ConstruSoluciones', 'Instalación de tumbados, servicios de construcción de todo tipo, en el cual trabajan dos personas.', 'N/A', 'N/A', 'Lago Agrio', 'Nueva Loja', 'N/A', '.php?id=61551866947568', 'construsoluciones10 ', 'construsoluciones10', 'FUDELA'),
('0be2fb69-74df-4be4-9853-3b6c7641991c', 'Lorena Andreina', 'Araujo Ordaz', 'lorenaraujo1411@gmail.com', 'Avenida Esmeraldas y Calle Puyo. ', '0999905438', 'Las Delicias D´ Alondra', 'Pastelería y dulcería, enfocada en bocaditos de sal y de dulce. ESTE ES UN EMPRENDIMIENTO NETAMENTE ONLINE.', 'https://www.google.com/maps/place/Av.+Esmeraldas+%26+C.+Puyo,+Santo+Domingo/@-0.2501985,-79.1779642,17z/data=!3m1!4b1!4m6!3m5!1s0x91d546484ddd44cd:0xd28f0f1c36e9dd3e!8m2!3d-0.2502039!4d-79.1753893!16s%2Fg%2F11g0tp82h7?entry=ttu', 'Los Rosales', 'Santo Domingo', 'Santo Domingo de los Tsáchilas', 'N/A', 'profile.php?id=100089436665090', 'lasdeliciasdalondra', 'N/A', 'HIAS'),
('0d828d73-8f18-4ac9-91a5-40edf01642fb', 'Viviana De Los Ángeles', 'Rodríguez Galárraga', 'Viviana Rodríguez.1969@gmail.com', 'PICHINCHA/ QUITO/ LA CONCEPCIÓN', '0989039149', 'Petaj Tikvah', 'Reciclaje de vidrio', 'https://www.google.com/maps/place/La+Concepcion,+Quito/@-0.1422512,-78.4937447,14z/data=!3m1!4b1!4m6!3m5!1s0x91d5854bddea3ba3:0x5fc5a0c19ffeac0d!8m2!3d-0.1396154!4d-78.4950837!16s%2Fg%2F11hz07w1pz?entry=ttu', 'La Concepción', 'Quito', 'Pichincha', 'N/A', 'N/A', 'petajtikvah?igshid=YmMyMTA2M2Y=', 'petajtikvah', 'HIAS'),
('1162a80a-599c-4beb-b61e-8e19e75644b1', 'Santiago David', 'Banegas Rivas', 'sbanegasrivas@gmail.com', 'De las Nueces N52-467, Pasaje E, Amagasi del Inca', '0960470954', 'Lavandería Aquamarina', 'Lavandería Aquamarina, es una empresa que realiza todo tipo de lavado de prendas de vestir y en general, sus servicios de lavado son en agua, y en seco, también se realiza el lavado de cualquier prenda de uso doméstico y en general, como cortinas, sábanas,', 'https://goo.gl/maps/bTby6D9GNcUxp3MAA ', 'Amagasi del Inca', 'Quito', 'Pichincha', 'N/A', 'profile.php?id=100032306783104 ', 'N/A', 'N/A', 'FUDELA'),
('131d445c-b120-4c4c-b4ff-e57b2e4113d6', 'Mayra Alejandra', 'Zabala', 'zabalamay450@gmail.com', ' Venezuela, Santo Domingo 230102', '0962915114', 'Chamito Burger', 'Nos dedicamos a la venta de comida rápida', 'https://www.google.com/maps/place/Calle+del+Colesterol/@-0.2493023,-79.1834547,17z/data=!3m1!4b1!4m5!3m4!1s0x91d547ec5fe5ddd5:0xeb5f120cd4a4de!8m2!3d-0.2493023!4d-79.181266 ', 'Calle el Colesterol', 'Santo Domingo', 'Santo Domingo de los Tsachilas', '-', 'chamitoburguersd', 'chamitoburger?igshid=YmMyMTA2M2Y= ', 'chamitoburger/video/7272924045601967365?lang=es', 'HIAS'),
('13e7edb6-34d6-4012-b532-56db0c127ca1', 'Adriana', 'Rivas', 'nanydevillarroel@gmail.com', 'Av. El Tejar con De La Verbena, y Del Cedrón (Final de la cuchara) Cuenca, Ecuador', '0995702197', 'Nanyta Kids ', 'Animadora de fiestas infantiles, baby showers y agasajos navideños. Fabricante de juguetes didácticos.', 'https://www.google.com/maps/place/El+tejar/@-2.8855441,-79.0314009,17z/data=!3m1!4b1!4m6!3m5!1s0x91cd2391253d3ed1:0x5ff740f720d585fc!8m2!3d-2.8855495!4d-79.028826!16s%2Fg%2F11smx9nh6g?entry=ttu', 'San Sebastián', 'Cuenca', 'Azuay', 'N/A', 'nanytakids/', 'nanytakids/?hl=es ', 'nanytakids?_t=8a9BYPlrOhJ&_r=1', 'FUDELA'),
('1d5cca5b-7912-4864-833a-44fc83b89314', 'Linda', 'Bravo', 'lindona1987@hotmail.com', 'Cooperativa Jacobo Bucaram solar 6', '0994544173', 'La Casa del Encocado', 'Somos un emprendimiento de comidas típicas y platos a la carta', 'https://goo.gl/maps/77Z2L6vhpgXYzzPA9 ', 'Perimetral', 'Guayaquil', 'Guayas', 'N/A', 'La-Casa-del-Encocao-En-Guayaquil-Perimetral-1466628733383925/', 'lacasadelencocado.ec/', 'lacasadelencocao', 'FUDELA'),
('2246bbb9-dee0-4f45-96f3-3c06672dc664', 'Gregoria Josefina', 'Arrieche', 'ag9921131@gmail.com', 'Santo Domingo	', '0962579817', 'La nueva Unión ', 'Exquisito pan delicioso venezolano y deliciosos dulces ', 'https://www.google.com/maps/place/Santo+Domingo/@-0.2408367,-79.4596138,11z/data=!3m1!4b1!4m10!1m2!2m1!1sSanto+Domingo%09!3m6!1s0x91d546535730a17d:0xcef17541041b9f63!8m2!3d-0.2538414!4d-79.1763307!15sCg1TYW50byBEb21pbmdvkgEIbG9jYWxpdHngAQA!16zL20vMGRnZGh4?', ' Quito, Quevedo', 'Santo Domingo', 'Santo Domingo de los Tsáchilas', '-', 'Josefina 1arrieche', 'Gregoria Arrieche	', '-', 'HIAS'),
('2458972d-f574-4861-a162-1416cf8e7591', 'Rully Marisol', 'Romero Ayala', 'sol.arte.pw@gmail.com', 'Nuestro local esta ubicado en la Avenida Abdón Calderón diagonal a Ferchos Pizza ', '099 976 4043', 'SOL ARTE', 'Artesanías hechas de madera, capacitaciones y cursos de pintura', 'https://goo.gl/maps/ishhCq3G3kjA78FK9 ', 'Monumento Rumiñahui', 'Sangolquí', 'Pichincha', 'N/A', 'profile.php?id=100094118490986 ', 'solartepw', 'solartepw', 'PAGADO'),
('25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Andrea', 'Caicedo', 'reivaxdrago@hotmail.com', 'Isla Trinitaria, Guayaquil, Ecuador', '0985457033', 'Aracne.ec', 'Tejiendo tu mundo... Muñec@s personalizadas, trajes infantiles, llaveros, etc? Envíos nacionales', 'https://www.google.com.ec/maps/dir//Isla+Trinitaria,+Guayaquil/@-2.2401727,-79.9608824,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x902d7025cc8f0165:0x2a69f31968cc1547!2m2!1d-79.9220686!2d-2.2402791?hl=es', 'Cotocollao', 'Guayaquil', 'Guayas', 'S/F', 'aracne.ec', 'aracne.ec', 'S/F', 'FUDELA'),
('30247608-92c3-4f1b-b645-83257c5c398f', 'Sonia Noemí', 'Guambaña Castillo ', 'sgua1208@gmail.com', 'Av. El Ángel y Gualea (2)', '0983485269', 'Creaciones SONY', 'Confección de ropa interior', 'https://goo.gl/maps/HUCknnqs6WBLArLg8', 'La Argelia', 'Quito', 'Pichincha', 'N/A', 'Creaciones-SONY-101146069327200 ', 'creaciones.sony', 'creaciones.sony', 'FUDELA'),
('34470a27-b9c3-4dd1-8376-26d7634a18a4', 'Eulalia', 'Freire', 'lali.frere.1965@gmail.com', 'José  M. Abascal  pasaje N-10  lote 2 ', '099621768 ', 'Manualidades Laly', 'Da clases de manualidades, vende sus manualidades como muñecas de choclo, muñecos, quiere un post promocionando clases. ', 'https://goo.gl/maps/oCRpHTZVqqTxdYJL8 ', 'Ciudadela', 'Quito', 'Pichincha', 'N/A', 'N/A', 'N/A', 'N/A', 'COOPRODER'),
('3774d798-e432-48a9-9f1b-3519417561db', 'María de Jesús', 'Hurtado Durán', 'mariahurtado0005@gmail.com', 'Pichinca, Ecuador', '0989679804', 'Las Delicias de Mary´s', 'Servicio de catering de sándwiches, arepas, bocaditos dulces, así como animación y música en vivo.', 'https://www.google.com/maps/place/Pichincha/@-0.1935998,-79.2649189,9z/data=!3m1!4b1!4m6!3m5!1s0x91d5708325efe437:0x94cead1b5e2aa19e!8m2!3d-0.1464847!4d-78.4751945!16zL20vMDM2NmIy?entry=ttu', 'Carcelén', 'Quito', 'Pichincha', '-', 'profile.php?id=100085861473217', 'deli_demarys', 'delicvmzrr1', 'HIAS'),
('37b2efa9-bee7-40eb-91f3-be24982f99b7', 'William Alfredo', 'Orasma Bandres', 'alfredowilliam71@gmail.com', 'Vergeles Autopista Narcisa de Jesús, manzana 25 villa 2.', '0983765935', 'KeRa Colors.Los expertos en colorimetria', 'Somos un emprendimiento dedicado a la distribución y comercialización, capacitación y aplicación de productos de belleza ', 'https://www.google.com/maps/place/Autop.+Narcisa+de+Jes%C3%BAs,+Guayaquil/@-2.0884473,-79.8982009,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x902d12a30967e86f:0x6dbf766feb1eca29!2sVergeles,+Guayaquil+090112!3b1!8m2!3d-2.0958348!4d-79.9106171!16s%2Fg%2F11bx220pv1!3m', 'Vergeles', 'Guayaquil', 'Guayas', 'N/A', 'william.orasma.1 ', 'williamalfredoorasmabandres?igshid=YmMyMTA2M2Y= ', 'N/A', 'FUDELA'),
('3989ae5d-8612-402c-9478-107f9af4fe18', 'Carlos ', 'Yepez', 'marvisdeyepez@gmail.com', 'Transversal 29 y Av. 17', '0984060106', 'Taller Artesanal las 3E', 'Taller de construcción de muebles y decoración infantil personalizada ', 'https://goo.gl/maps/SxpY8gAzqhFhPR2N6', 'Parroquia Febres Cordero', 'Guayaquil', 'Guayas', 'N/A', 'Las-3E-205641071470585/ ', 'mueble.las3e/ ', 'tallerartesanallas3e?_t=8avHT0pdoAQ&_r=1', 'HIAS'),
('3cdd91ba-968b-4824-b038-38d7aa391172', 'Nelva Amparito', 'Guaman Jimenez', 'nelva.guaman@hotmail.com', '5, Quito 170105', '0982878446', 'San Andres', 'Elaboración de productos de limpieza para el hogar y  de aseo personal a base de materia prima orgánica,  enriquecidos con aceites esenciales y extractos naturales, en combinación con preservantes y colorantes de uso alimenticio, lo que nos hace un product', 'https://www.google.com/maps/place/0°17\'07.1\"S+78°34\'13.9\"W/@-0.2848948,-78.5701171,17z/data=!4m4!3m3!8m2!3d-0.2853056!4d-78.5705278?hl=es', 'Monjas', 'Quito', 'Pichincha', 'N/A', 'profile.php?id=100083096114006', 'san.andres2/', 'sanandres1801', 'HIAS'),
('446871cd-91af-45c6-af3e-92a8c3282c0d', 'Alba del Pilar', 'Alencastro Núñez', 'aleneventos@hotmail.com', 'Sangolquí Urb San Jorge río curaray 204 y río Amazonas	', '09846020134', 'ANHATA CUANTICO', 'Da servicio de terapias alternativas, cronoterapia, gestión de producto que brinda, spash, jabones, perfumes, etc.', 'https://www.google.com.ec/maps/dir/ESPE,+Avenida+General+Rumi%C3%B1ahui,+Sangolqu%C3%AD/Rio+Curaray+%26+Rio+Amazonas,+Sangolqu%C3%AD+171103/@-0.3206471,-78.4571578,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x91d5bd12538eb13b:0x907c61f1abbe45ab!2m2!1d-78.442511', 'San Jorge', 'Sangolquí', 'Pichincha', 'N/A', 'BSHolistico', 'N/A', 'anahatacuantico?_t=8dlZEH3Yp0v&_r=1 ', 'COOPRODER'),
('4e973029-8866-4260-814a-de3d8a754999', 'Francisco Kevin', 'Morocho Chicaiza', 'keeyeff@gmail.com', 'Nuestro local esta ubicado en el sector de El Choclo en la calle Titira y Syna en el cantón Rumiñahui provincia de Pichincha ', '098 685 1831', ' ISORA TECHNOLOGY', 'Es un micro emprendimiento dedicado al servicio técnico de celulares  ', 'https://www.google.com/maps/place/0%C2%B020\'04.4%22S+78%C2%B026\'31.7%22W/@-0.3345511,-78.4443145,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.3345511!4d-78.4421258?hl=es&entry=ttu  ', 'El choclo', 'Sangolquí', 'Pichincha', '-', 'IsoraTechnology ', 'isoratechnology/', 'isoratechnology?lang=es ', 'PAGADO'),
('587d0567-fed7-40a2-8bdb-926492f47e97', 'Jenny', 'Roldan', 'roldanjenny119@gmail.com', 'El florón #5, Calle 21 de Noviembre Portoviejo, Manabi, Ecuador', '0980048835', 'Corviches Jenny Manaba', 'Se dedican a la elaboracion de bolones, corviches de pescado, embarajados, empanadas de verde y muchines.', 'https://www.google.com/maps/place/El+floron/@-1.0684992,-80.4696312,15z/data=!4m9!1m2!2m1!1sEl+flor%C3%B3n+%235,+Calle+21+de+Noviembre+Portoviejo,+Manabi,+Ecuador!3m5!1s0x902b8d87d1cbfdf5:0x75a2b521f351fc4d!8m2!3d-1.0757006!4d-80.4523928!15sCkBFbCBmbG9yw7N', 'El Florón', 'Portoviejo', 'Manabi', 'N/A', 'profile.php?id=100090987395584', 'corvichesjennymanaba88', 'corvichesjennymanaba', 'FUDELA'),
('5b5a0ab0-a5da-44c4-95e2-f04ea5a40c3c', 'Erlein Yasmin', 'Núñez González ', 'nimsay._.15@hotmail.com', 'Calle Tungurahua, Cam. a Rio Verde Santo Domingo', '0999052920', 'Tejidos Nazh', 'Somos un emprendimiento que elabora y vende Amigurumis, juguetes, accesorios, ropa y tejidos en general.', 'https://goo.gl/maps/EoxAy4LSRnnGaGTP8 ', 'Asistencia Municipal', 'santo domingo', 'Santo Domingo de los Tsáchilas', 'N/A', 'Tejidos-Nazh-101544222365479/', 'tejidos.nazh?igshid=YmMyMTA2M2Y=', 'tejidosnazh ', 'HIAS'),
('5bebf533-44ff-4f55-8925-c1cddcd9f9df', 'Elizabeth', 'Trujillo ', 'eetu2021@gmail.com', 'Magdalena Araujo S5-235, Ricardo Izurieta Quito, Pichincha, Ecuador', '0959594601', 'Elizabeth Trujillo - Asesora Financiera', 'Asesoría Financiera y Microempresarial. Brindo capacitaciones presenciales y virtuales. ', 'https://www.google.com.ec/maps/place/Magdalena+Araujo+S5-235,+Quito+170409/@-0.2437533,-78.4993665,17z/data=!3m1!4b1!4m10!1m2!2m1!1sMagdalena+Araujo+S5-235,+Ricardo+Izurieta+Quito,+Pichincha,+Ecuador!3m6!1s0x91d599c6db6f8ccb:0xc5e1afac6974061a!8m2!3d-0.243', 'Magdalena', 'Quito', 'Pichincha', 'N/A', 'elizabeth.trujilo', 'elizabeth.trujilo/', 'elizabethtrujil95', 'FUDELA'),
('5fca62c0-24ad-4f1d-be36-6f706127715c', 'Ruth Lorena', 'Boada Coral', 'eventospochitaf@hotmail.com', 'Calle Progreso y Vencedores', '0981688316', 'Lormagic Eventos', 'Se realizan eventos sociales, infantiles, arreglos florales personalizados, bocaditos, chocolatería y se distribuye productos para fiestas.', 'https://goo.gl/maps/bVNL4Ya7FB9ptF1FA 	', 'Calderón', 'Quito', 'Pichincha', 'N/A', 'pochita22/ ', 'eventospochita?igshid=YmMyMTA2M2Y= ', 'lormagiceventos	', 'PRIVADO'),
('67184212-b87b-48ce-8d49-9ebc3f82a681', 'Liseth Yelimal', 'Hernandez Rojas', 'Lissethyelimar@hotmail.com', 'Calle Ambato y 29 de Mayo frente a la Ferretería Zurita', '0959866214', 'Comida Express “La Gordita”', 'Emprendimiento dedicado a la venta de hamburguesas, hot dogs, bebidas.', 'https://www.google.com/maps/place/0%C2%B015\'13.1%22S+79%C2%B010\'18.6%22W/@-0.2536417,-79.1743955,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.2536417!4d-79.1718206?entry=ttu', 'Centro', 'Santo Domingo', 'Santo Domingo de los Tsáchilas ', 'N/A', 'people/Comida-Express-La-Gordita/61552487201549/', 'expresscomidarapidalagordita/', 'ZMjbB7V2t/', 'HIAS'),
('67fbb9a2-0202-4426-a6ed-284959c53dd9', 'Zoila Aidee', 'Gutierrez Panchana ', 'panchanaaidee@gmail.com', 'Paraíso de la flor, Cooperativa Lincoln Salcedo', '0968366348', 'SheinEcuadorByZoe', 'Venta de ropa y Courier ', 'https://goo.gl/maps/rUSea8R3CepNai3K8', 'Cooperativa Lincoln Salcedo', 'Guayaquil', 'Guayas', 'N/A', 'SheinEcuadorByZoe', 'sheinecuadorbyzoe/', 'sheinecuadorbyzoe?_t=8dxeze6xOK5&_r=1 ', 'FUDELA'),
('6b85a0a9-581c-4d41-912e-212168d5ecea', 'María de Jesús', 'Hurtado Durán', 'leccionesmagicas01@gmail.com', 'Carcelen Bajo ', '0989679804', 'Lecciones Mágicas', 'Educación para niños de forma presencial y virtual.', 'https://www.google.com.ec/maps/@-0.1081339,-78.4699519,18z?hl=es&entry=ttu', 'Carcelen bajo', 'Quito', 'Pichincha', '-', 'mariadejesus.hurtado.77', 'lecciones_magicas/', '-', 'FUDELA'),
('70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Aleiram Fabiola ', 'Arvelo De Amaya', 'saboresamarve@gmail.com', 'Quito Norte, Sector La Kennedy', '0998231592', 'Sabores Amarve', 'Sabores Amarve está conquistando paladares con sus deliciosos bocaditos dulces y salados.    Actualmente ofrecemos Tequeños Fiesteros de Queso Manaba, Queso Mozzarella, Queso Cheddar, Guayaba con Queso y Chocolate, Empanadas de diferentes sabores, Queso de', 'https://goo.gl/maps/3iNpFd1BBb9Cc2ev6 ', 'Norte', 'Quito', 'Pichincha', 'N/A', 'saboresamarve ', 'saboresamarve/ ', 'saboresamarve ', 'HIAS'),
('741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'LILIAN EVELIN ', 'SUAREZ CARREÑO', 'li.gaviota@gmail.com', 'Bellavista y Los Molles', '0984060890', 'PartyBox Deco', 'Cuadernos, agendas, álbum scrapbooking. Manualidades varias ', 'https://goo.gl/maps/G4GN9yZPgKUdEYEV7', 'La Ofelia', 'Quito', 'Pichincha', 'N/A', 'profile.php?id=100063546312482', 'partybox.ec/', 'partyboxdeco', 'HIAS'),
('7ae1aa1d-b354-482e-b66a-635ef3c36462', 'Dolores Esther', 'Andi Salazar', 'eandi1971@gmail.com', 'Barrio Primavera 2', '0992029255', 'Musuguangu', '-', '-', 'Oeste', 'Nueva Loja', 'Sucumbíos', '-', ' Dolores Andi	', '-', '-', 'PRIVADO'),
('7bd66024-9612-48cb-b3b4-22f69499d95c', 'Mariana de Jesus', 'Muñoz Andrade', 'No-tiene@gmail.com', '-', '0990449494', 'Velas y Mas PURYMARI', 'Creación de velas y manualidades tipo peluches.	', 'https://www.google.com/maps/place/Quito/data=!4m2!3m1!1s0x91d59a4002427c9f:0x44b991e158ef5572?sa=X&ved=2ahUKEwjV28rEj56CAxWSl4kEHV5mBhIQ8gF6BAgKEAA&ved=2ahUKEwjV28rEj56CAxWSl4kEHV5mBhIQ8gF6BAgLEAI', '-', 'Quito', 'Pichincha', '-', '-', 'velasymas_purymari', '-', 'COOPRODER'),
('8b12c134-9a8a-478b-b49b-dc4fb93b4759', 'Anais Virginia', 'González Coronado', 'sweetandnaturals@gmail.com', 'Av. la prensa con Espinoza Polit	', '0998953517', 'Sweet and natural\'s by Ana', 'Somos un emprendimiento ecu venezolano que elabora postres saludables bajos en azúcar, libres de gluten, se realiza repostería tradicional y actualmente se ha incorporado la elaboración de comida vegetariana y vegana, el enfoque del emprendimiento está bas', 'https://www.google.com/maps/place/0%C2%B007\'04.0%22S+78%C2%B029\'38.9%22W/@-0.1177778,-78.4941389,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-0.1177778!4d-78.4941389?hl=es&entry=ttu', 'Cotocollao', 'Quito', 'Pichincha', 'N/A', 'pg/sweetandnaturalsbyAna/posts/ ', 'sweetandnaturalsbyana?igshid=YmMyMTA2M2Y%3D', 'N/A', 'HIAS'),
('8c0ba245-800e-4227-8786-dd89bdcf4389', 'Kely', 'Torrealba', 'Kellytorrealba1313@gmail.com', 'Avenida 5 de Junio y Calle Morejon', '0963050150', 'Divafanis donuts', 'Encuentra todos los postres que deseas para animar tus fiestas en un solo lugar.', 'https://maps.app.goo.gl/5m5QaMivcPzfBphx6 ', 'Ciudadela Maestro', 'Portoviejo', 'Manabí', 'N/A', 'profile.php?id=100080330184012', 'divafanisdonuts/?r=nametag', 'divafanisdonust?lang=es', 'FUDELA'),
('91b2fae6-8e43-4394-9fc8-11e732924872', 'Stalin Moises', 'Pavon Lema', 'stalin0507@hotmail.com  ', 'Bellavista de Calderón Barrio 10 de Agosto lote #15 ', '0992644553', 'Imperial Puppies', 'Fabricación de casitas para perros bajo pedido', 'https://www.google.com/maps/place/Canine+Rest/@-0.0669018,-78.4106251,16z/data=!4m5!3m4!1s0x91d5892dc3a0d391:0xa4ac840d93e171b3!8m2!3d-0.066829!4d-78.4106945  ', 'Calderon', 'Quito', 'Pichincha', 'N/A', 'Imperial puppies', 'puppiesimperial/', 'Imperial puppies', 'HIAS'),
('93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Javier Patricio', 'Calvachi Quinatoa', 'reivaxdrago@hotmail.com', 'Av. Mariscal Sucre, Tabiazo entrada a Santa Bárbara gasolinera Petroecuador. Quito, Pichincha, Ecuador ', '0991947682', 'Yukipan Cafetería', 'Restaurante Cafetería Yukipan', ' https://goo.gl/maps/WPvMdkBqugDfdysBA   ', 'Chillogallo', 'Quito', 'Pchincha', 'N/A', 'profile.php?id=100077918810007', 'yukipan_cafeteria/  ', '.yukipanis_from_webapp=1&sender_device=pc ', 'PAGADO'),
('a01b7696-fd61-4e72-acbb-ee5099c755d8', 'Luis Eduardo', 'Sandoval Navarrete', 'lunapan2018@gmail.com', 'De los Tulipanes 1028, Quito 170138 ', '0963190728', 'LUNAPAN', 'Somos especialistas en pan de hamburguesa y de hot dogs, elaboramos todo tipo de pan de acuerdo a los requerimientos de los clientes, nos especializamos especialmente en pan venezolano.', 'https://www.google.com/maps/place/0%C2%B009\'36.2%22S+78%C2%B028\'27.3%22W/@-0.1600422,-78.4764395,17z/data=!4m5!3m4!1s0x0:0xaba7a8e773482284!8m2!3d-0.1600422!4d-78.4742508?hl=es', 'El Inca', 'Quito', 'Pichincha', 'N/A', 'lunapan001/ ', 'lunapan2018?igshid=YmMyMTA2M2Y= ', 'N/A', 'PRIVADO'),
('a1435cea-419a-4de7-8193-27a1ead9bc09', 'Nathaly del Rocío', 'Caputti Bruno', 'nathcaputti2020@gmail.com', 'Cnel. Miguel de Letamendi 3609 entre la 10ma y 11va ', '0979535939', 'Nath Pets Peluqueria Canina y algo más', 'Somos un emprendimiento que ofrece servicios para las mascotas, tratándolas con cariño y esmero para que se sientan en confianza, nuestra garantía es que realizamos un buen trabajo para el cuidado de su mascota.', 'https://goo.gl/maps/2YWVR2wJrggkmty46 ', 'Suburbio', 'Guayaquil', 'Guayas', 'NathPets ', 'profile.php?id=100079961052165 ', 'nathpets68?igshid=YmMyMTA2M2Y= ', 'N/A', 'FUDELA'),
('a46579f5-4f9b-47f2-9bd1-8361f5de1248', 'Ceyda Llomeyra', 'Mota Medina', 'yomeiramota1979@gmail.com', 'Calle Ambato con calle Babahoyo', '0964020836', 'Antojitos mis tres Gabrieles', 'Deditos de queso y mucho mas', 'https://goo.gl/maps/xwGWTBD6SBqMKqeV9 ', 'Centro', 'Santo Domingo', 'Santo Domingo de los Tsáchilas', 'N/A', 'Antojitos-mis-tres-Gabrieles-101681369190329', 'mota_ceida', 'N/A', 'HIAS'),
('ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Martha Isabel', 'Alomia Panchez ', 'No-tiene@gmail.com', 'Av. Mariscal Sucre y Tabiazo entrada a Santa Bárbara gasolinera Petroecuador.', '0992730738', 'Mabel Cupcakes', 'Elaboración y distribución de Cupcakes, chocolates y bocaditos ', 'https://www.google.com/maps?q=-0.3320958,-78.4665183&z=17&hl=es ', 'San Rafael', 'Sangolquí', 'Pichincha', 'N/A', 'N/A', 'N/A', 'N/A', 'COOPRODER'),
('ac7f274c-eefe-4184-b877-1d31f1fa3a08', 'Myriam Esthela', 'Aguirre Leon', 'taitacafeec@gmail.com', 'Upano E5-87 y Juan Bautista Aguirre ', '0982687418', 'Taita Café ', 'Producción y venta de café de pasar cuidadosamente seleccionado, rico en aroma y en sabor.', 'https://goo.gl/maps/WPvMdkBqugDfdysBA  ', 'Pio XII', 'Quito', 'Pichincha', 'N/A', 'profile.php?id=100079948816472&mibextid=ZbWKwL ', 'taita.cafe?igshid=MzRlODBiNWFlZA', 'N/A', 'COOPRODER'),
('b8239f41-bb40-46ea-84ba-5d9695ac4630', 'Jose Javier', 'Calvopiña Tapia', 'kefir.alimentacion@outlook.com', 'Quito', 'N/A', 'VIDAMAR/KEFIR', 'Es un tienda de kefir que procesa de manera artesanal y natural sin preservantes ni conservantes. ', 'https://www.google.com/maps?q=-0.13893080219204354,-78.48479312515565&z=17&hl=es', 'Real audiencia y Cesar Borja ', 'Quito', 'Pichincha', 'N/A', 'kefirbulgaro.yogurtprobiotico.7/ ', 'N/A', 'N/A', 'FUDELA'),
('b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Anella Cosscel', 'León Carvajal', ' aclcanella@gmail.com', 'Av quito con calle satélite frente a induato ,santo domingo de los tsachilas ', '0963869118', 'Naturane', 'Emprendimiento de cosmética natural enfocado en la elaboración de productos 100% ecofrendly y crueltyfree para rutinas de skincare', 'https://goo.gl/maps/BDQLecaK4SwtTbz36 ', 'Santo Domingo', 'Santo Domingo de los Tsáchilas', 'Santo Domingo de los Tsáchilas', 'N/A', 'Naturane-107679588340429/  ', 'naturane.ecu?igshid=YmMyMTA2M ', 'naturaneec', 'HIAS'),
('b9e3c537-955e-4462-b6c2-5f9ca1b07614', 'César', 'Rodríguez ', 'vidalu.gye@gmail.com', 'Urdenor 1, 3 er pasaje 8 NO y C.16B ', '0996165885', 'Vidalu', 'Realiza el mantenimiento de ventadas y puertas corredizas, capinteria de vidrio y aluminio fabricación, instalación, mantenimiento y renovación de ambientes en tu hogar, oficina o negocio. ', 'https://www.google.com.ec/maps/place/CLINICA+URDENOR/@-2.1452555,-79.9039273,18z/data=!3m1!4b1!4m5!3m4!1s0x902d6d6f93cbe217:0x3b92b16f07123b3d!8m2!3d-2.1452555!4d-79.902833?hl=es  ', 'Norte', 'Guayaquil', 'Guayas', 'N/A', 'profile.php?id=100063771619825  ', 'vidalu_gye?igshid=YmMyMTA2M2Y= ', 'N/A', 'FUDELA'),
('bfb1945b-3dd7-4ebf-95be-360958e81a26', 'Teresa del Carmen', 'Parra Hernández', 'tparrah23@gmail.com', 'Jipijapa quito, Quito, Ecuador', '0999203803', 'Cakes By Kissy', 'Pastelería y repostería 100% artesanal', 'https://www.google.com.ec/maps/place/Jipijapa,+Quito/@-0.159018,-78.4639939,14z/data=!4m6!3m5!1s0x91d5900e204a61d5:0xe9512b281fc411fd!8m2!3d-0.157948!4d-78.4666693!16s%2Fg%2F1227crxn?hl=es&entry=ttu', 'Jipijapa', 'Quito', 'Pichincha', 'N/A', 'cakesbykissyQuito	', 'cakesbykissy', 'cakesbykissy ', 'FUDELA'),
('d4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Lina Di', 'Sisto Ramirez', 'linadisisto10@gmail.com', 'Av. Mariscal Sucre #S10-339 y Hernando Prado', '0962096665', 'Arte y confecciones Lina', 'Arte y confección de prendas íntimas, también se realizan artes plásticas en lino, hace cuadros personalizados ', '0°14\'35.4\"S 78°31\'57.6\"W - Google Maps', 'El Pintado', 'Quito', 'Pichincha', 'S/F', 'profile.php?id=100065395156414&mibextid=ZbWKwL ', 'disistolina/ ', 'linadisisto10?_t=8acXbVaOKko&_r=1 ', 'HIAS'),
('d5c9208c-c0e4-4f35-ba70-b0c3e7c91b25', 'Maria Elena', 'Sanguña', 'marielena0608z@gmail.com', 'Calderon, Calle independencia psje 1 OE3-220 Quito, Pichincha, Ecuador ', '0982456410', 'NaturalZS', 'No tiene', 'N/A', 'Calderón', 'Quito', 'Pichincha', 'N/A', 'elena1san ', 'natural.zs/  ', 'N/A', 'FUDELA'),
('d826ff6d-9d64-4cf6-90df-628ffcc2617d', 'Rixanel Carolina', 'Reyes Medina ', 'kaersiaboutique79@gmail.com', 'Condado, Colinas del norte, Barrio La planada, referencia Casa comunitaria., Quito, Pichincha, Ecuador', '0986336513', 'Kaersia Online ', ' “Accesorios, productos del hogar, productos deportivos, y cosméticos”', 'https://goo.gl/maps/FHxtNV1oUSQigo6p8 ', 'Colinas del norte', 'Quito', 'Pichincha', 'N/A', 'Kaersia-Online-111697508075102/ ', 'kaersia_online/ ', 'kaersia_online ', 'HIAS'),
('d8dab121-ae94-408e-8347-64fe21326af4', 'Melzzy', 'Milano ', 'soulhuellas.ec@gmail.com', 'Av. Simon Bolivar OE2- 199, Jaime Roldos Aguilera Conocoto', '096 062 4307', 'Soul Huellas', 'Piezas personalizadas en yeso, con marco de madera para mascotas y seres queridos.', 'https://maps.app.goo.gl/3MbsC8GXQkLJRPBC6 ', 'Conocoto', 'Quito', 'Pichincha', 'N/A', 'profile.php?id=100078808571981', 'soulhuellas/', 'N/A', 'FUDELA'),
('de96e8a8-defe-4036-ae01-c190cbe38711', 'Josleidy Ysabel', 'Colón Moreno', 'josleidy.colom@gmail.com', 'Av. Napo y Sangay s7-326 ', '0988591664', 'J.Col Social Academy', 'Desarrolla una pasion por aprender', 'https://www.google.com.ec/maps/place/Avenida+Napo+%26+Sangay,+Quito+170121/@-0.2414699,-78.5130838,18.38z/data=!4m8!1m2!2m1!1sAv.+Napo+y+Sangay+s7-326+!3m4!1s0x91d599a300f39161:0x4d9ea8ba39e469b!8m2!3d-0.2408308!4d-78.5120291?hl=es ', 'Chimbacalle', 'Quito', 'Pichincha', 'N/A', 'JCol_Social_Academy-108514771880725', 'jcol_sa?igshid=YmMyMTA2M2Y=', 'jcol_sa?_t=8a9Ao36N2c2&_r=1', 'HIAS'),
('e2faa050-dbd8-4e37-9858-937f7962c2f7', 'Glenda Matilde', 'Benítez Alcívar', 'glendaba1801@gmail.com', 'Duran – Cdla. Ana Maria Olmedo manzana 29 Villa-12', '0960818582', 'Glenda Beal', 'Realizamos tejidos a corchet y dos agujas', 'https://www.google.com/maps/place/2%C2%B009\'20.8%22S+79%C2%B049\'43.2%22W/@-2.1557676,-79.8308618,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x5b19ff24b9c3791b!8m2!3d-2.1557676!4d-79.8286731?hl=es ', 'Cdla. Ana María Olmedo', 'Guayaquil', 'Guayas', 'N/A', 'https:/glenda_beal-117659520152788/  ', 'glenda_beal?igshid=YmMyMTA2M2Y= ', 'N/A', 'FUDELA'),
('e56bcf0c-b561-4218-971f-db40e7731284', 'María Fernanda', 'Rojas', 'rojasomf@hotmail.com', 'Urdenor 2', '0963748073', 'MF. Bisuteria Fina', 'Bisutería Artesanal para todos los gustos.', 'https://goo.gl/maps/T63aDkPBZyGcq4eDA ', 'Norte', 'Guayaquil', 'Guayas', 'N/A', 'mfbisuteriafina', 'mf.bisuteriafina/', 'N/A', 'FUDELA'),
('e78e761e-c378-497a-805a-31ce8bedccdd', 'Mercy Paulina', 'Pazmiño Zaldumbide', 'bordadoscarmita@gmail.com ', 'Av. La Prensa, Telégrafo Primero y Bracamoros N44-174 Quito, Pichincha, Ecuador', '0987040238', 'Mercy Design', 'Mercy Design, es un taller de creación y diseño de sueños plasmados en tela con tradición desde hace 115 años en la confección, diseño y bordado a mano de todo tipo de prendas, productos y accesorios con la técnica del bordado relleno de la comunidad de Zu', 'https://www.google.com/maps/place/0%C2%B009\'30.5%22S+78%C2%B029\'13.8%22W/@-0.1584611,-78.489355,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf57a78b54f7f2aad!8m2!3d-0.1584611!4d-78.4871663?hl=es ', 'Chaupicruz', 'Quito', 'Pichincha', 'N/A', 'Mercy-Design-2058829184245568', 'galeriadeartedelbordado/ ', 'N/A', 'FUDELA'),
('e8198f45-f42f-4659-9934-945262f73020', 'Dulce Isabel ', 'Rodríguez Ramírez', 'dulce.tentacionempren@gmail.com', 'Quilla Ñan S42-139, Quito 170701         Sector Arcadia, Pueblo solo Pueblo  ', '0995586223', 'Dulce Tentación', 'Realizamos bolones y empanadas.', 'ttps://goo.gl/maps/rzzY35QBxDahAmNf7 ', 'Quitumbe', 'Quito', 'Pichincha', 'N/A', 'Dulce-Tentaci%C3%B3n-102397999226992 ', 'dulce_tentacion.b/ ', 'dulce_tentacion_bolones ', 'HIAS'),
('e9e916b0-b7e8-4411-8981-558dc3a049fa', 'Sandrea', 'Ida Cira', 'Idasandrea40@gmail.com', 'Carapungo puertas del sol II (Bajo pedido) ', '0998543033', 'Ida Sandrea Crochet', 'Productos elaborados con la técnica de crochet', 'https://goo.gl/maps/HM2h9FJ88jyZ27QS8 ', 'Carapungo', 'Quito', 'Pichincha', 'S/F', 'isandreaalvarado', 'idasandreacrochet/', 'idasandreacrochet', 'FUDELA'),
('ed322c8f-52d6-425f-9285-9359d8598a60', 'Luz Amelia', 'Galárraga Robayo', 'luzamelia@galarraga.info', 'No tenemos tienda física, el sitio de producción es en Guayllabamba; hacemos entregas a domicilio y estamos abriendo varios puntos con distribuidores en quito y otras provincias el país.', '0984477173', 'Kirú Natural', 'Somos un emprendimiento dedicado a la elaboración y venta de productos biocosméticos', 'No posee', 'Norte', 'Quito', 'Pichincha', 'N/A', 'kirunatural', 'kirunatural?utm_medium=copy_link ', 'N/A', 'FUDELA'),
('ed851cfd-60a9-4a5f-853f-89455a34ec17', 'Lenny Anahis', 'Zambrano Sandoval', 'zlenny30@gmail.com', 'Calle Guayaquil y Av. Petrolera, Nueva Loja, Ecuador', '0988393994', 'CAKE´S JIREH', 'Ofrece deliciosos postres artesanales, pasteles personalizados y golosinas para satisfacer antojos y celebrar ocasiones especiales.', 'https://www.google.com/maps/search/Calle+Guayaquil+y+Av.+Petrolera,+Nueva+Loja,+Ecuador/@0.0803803,-76.9982004,12z/data=!3m1!4b1?entry=ttu ', 'Calle Guayaquil y Av. Petrolera, Nueva Loja, Ecuador', 'Guayaquil', 'Guayas', 'N/A', 'profile.php?id=100078667460965', 'cakes_jireh_', 'cakesjireh', 'FUDELA'),
('f331f3f7-8814-4d9b-bb5f-d07cb5117b47', 'Noraida Eurriola', 'Cruz', 'donuts.nora@gmail.com', 'Av. cacha y calle vencedores, conjunto verde campiña	', '0959192143', 'Donuts Nora', 'Talleres de repostería creativa y divertida', 'https://www.google.com/maps/place/0%C2%B005\'30.6%22S+78%C2%B025\'09.7%22W/@-0.0918251,-78.421546,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xedd4495aec844ef0!8m2!3d-0.0918251!4d-78.4193573?hl=es', 'Calderón', 'Quito', 'Pichincha', 's/f', 'Donuts-Nora-110110515074214 ', 'donutsnora1?igshid=YmMyMTA2M2Y= ', 'donutsnora?is_from_webapp=1&sender_device=pc 	', 'FUDELA'),
('f4d9ee43-a765-4b43-aacb-81a381f0ab26', 'Sebastian', 'Arias Salvador', 'allgreen.market1@gmail.com', 'Calle 4, N 43-59 y Av. del Parque, El Bosque, Quito, Ecuador', '0984849091', 'All Green Market', 'All Green Market es un market virtual que ofrece alimentos saludables (sin preservantes) y productos', 'https://www.google.com/maps/search/N+43-59+y+Av.+del+Parque,+El+Bosque+Quito,+Ecuador/@-0.162257,-78.5000151,17z/data=!3m1!4b1?entry=ttu', 'El Bosque', 'Quito', 'Pichincha', 'N/A', 'allgreen.market.ec', 'all_green_market', 'N/A', 'FUDELA'),
('f88d2ec9-642e-401f-a54d-670c554f1038', 'Fatima de Jesus ', 'Solorzano Mitte', 'fatimasolorzanomitte1967@gmail.com', 'Plan de vivienda municipal Barrio 12 de octubre ', '0983688001', 'Fatsol', 'Somos un emprendimiento dedicado a la venta de Bolsos mochilas, monederos, carteras, cojines para muebles, lenceria para el hogar', 'https://goo.gl/maps/rxG6tVTiaBkoD1v97 ', '12 de Octubre', 'Santo Domingo', 'Santo Domingo de los Tsáchilas', 'Fatsol67 ', 'fatsol202', 'FATSOL_Ec/', 'fatsol.ec', 'HIAS');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `entreprenuer_list`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `entreprenuer_list` (
`entrepreneur_last_name` varchar(64)
,`entrepreneur_name` varchar(64)
,`entrepreneur_phone` varchar(16)
,`entrepreneur_email` varchar(128)
,`manager_in_charge` varchar(129)
,`entrepreneur_city` varchar(64)
,`entrepreneur_organization` char(20)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manager`
--

CREATE TABLE `manager` (
  `id` varchar(64) NOT NULL,
  `names` varchar(64) NOT NULL,
  `last_names` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `address` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `manager`
--

INSERT INTO `manager` (`id`, `names`, `last_names`, `email`, `address`) VALUES
('090035b9-8f5c-4b2d-a3cb-c236141f6216', 'SARA ABIGAIL', 'VALLEJO VALLEJO', 'savallejo2@espe.edu.ec', 'HIAS Y CROOPRODER--Av. Gral. Rumiñahui S/N, Sangolquí 171103'),
('110b5e93-3c7d-463a-8af7-a5f9b0ff6321', 'BRITNEY NAYELI', 'CEVALLOS ROMERO', 'bncevallos@espe.edu.ec', 'FUDELA--AV. Gral. Rumiñahui S/N, Sangolquí 171103'),
('5770c6d5-c63b-401c-a5a5-279f56518edf', 'Luis Adrián ', 'Camacho Tene', 'lacamacho@espe.edu.ec', 'Alfredo Albornoz y Tumbaco '),
('5edded58-41ef-4913-a9b8-01d2ae85f487', 'PABLO JAVIER', 'DEL CASTILLO DUCHICELA', 'pjdel1@espe.edu.ec', 'HIAS Y CROOPRODER'),
('84ad92d0-0d7b-4b2e-85c2-1d92599c76de', 'Joan Alexander', 'Molina Castillo', 'jamolina12@espe.edu.ec', 'Leopoldo Mercado y Atuntaqui'),
('8b8dd988-1b75-45bb-b9da-cb772491efae', 'JORDI JAVIER', 'INGA LOPEZ', 'jjinga@espe.edu.ec', 'HIAS Y CROOPRODER'),
('9f0c5683-2d3b-42b0-8a16-8fdf343f9208', 'MIGUEL ALEJANDRO', 'CISNEROS ALVARO', 'macisneros7@espe.edu.ec', 'FUDELA--Av. Gral. Rumiñahui S/N, Sangolquí 171103'),
('bc5b83ce-3873-47c8-867b-aea81680b737', 'PAMELA ABIGAIL', 'LARA FELIX', 'palara2@espe.edu.ec', 'HIAS Y CROOPRODER--Av. Gral. Rumiñahui S/N, Sangolquí 171103	'),
('ca736dfa-5e5b-48d1-97a6-2d060dc3797e', 'Karen Andrea ', 'Arevalo Briceño', 'kaarevalo2@espe.edu.ec', 'El Infa, ciudad del niño'),
('cefc4644-5f7c-499f-9639-696f67c388bc', 'Giannella Maryeli', 'Ramirez Moreira', 'gmramirez4@espe.edu.ec', 'Av general Rumiñahui'),
('d1e59dff-cd39-4e41-adb4-81cb2abc8c1a', 'FERNANDO ALEXANDER', 'MUÑOZ AROCA', 'famunoz1@espe.edu.ec', 'FUDELA--Av. Gral. Rumiñahui S/N, Sangolquí 171103'),
('d321a530-ea3c-4f19-b381-23c8949e15d9', 'JORDY ALEXANDER', 'CALDERON MARTINEZ', 'jacalderon10@espe.edu.ec', 'HIAS Y CROOPRODER--Av. Gral. Rumiñahui S/N, Sangolquí 171103	'),
('e09e419e-b1aa-4ef1-b137-796b447036a3', 'MELANY GISELA', 'TOAPANTA CHANGOLUISA', 'mgtoapanta4@espe.edu.ec', 'FUDELA--Av. Gral. Rumiñahui S/N, Sangolquí 171103'),
('e1dc4edd-e13d-429e-b0a4-03b18b106404', 'ADRIAN ALEJANDRO', 'SANCHEZ DELGADO', 'aasanchez19@espe.edu.ec', 'FUDELA--Av. Gral. Rumiñahui S/N, Sangolquí 171103'),
('e5bfd716-c986-47db-9737-b596c083f8e4', 'Sofia Marisol', 'Totasig Casillas ', 'smtotasig@espe.edu.ec', 'Uyumbicho');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mentorship`
--

CREATE TABLE `mentorship` (
  `id` varchar(64) NOT NULL,
  `id_manager` varchar(64) NOT NULL,
  `id_entrepreneur` varchar(64) NOT NULL,
  `title` varchar(128) NOT NULL,
  `description` varchar(256) NOT NULL,
  `date_mentorship` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `mentorship`
--

INSERT INTO `mentorship` (`id`, `id_manager`, `id_entrepreneur`, `title`, `description`, `date_mentorship`) VALUES
('119af80c-cc2a-44f2-8109-aae3376f5fe3', 'afc36559-e5af-4c87-ac1f-1064f5c0fcf3', 'ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Prueba 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-12-16 18:28:00'),
('664df46e-b1bb-4178-974e-9ee72737cbd3', 'd321a530-ea3c-4f19-b381-23c8949e15d9', 'b9e3c537-955e-4462-b6c2-5f9ca1b07614', 'Vidalu', 'Mencionó que necesitaba que se le de forma a un Tik Tok', '2023-10-17 14:00:00'),
('75f79ede-951d-46e3-aca0-722299429b21', 'bc5b83ce-3873-47c8-867b-aea81680b737', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Sabores Amarve', 'Pidio la elaboración de un vídeo con la temática de Halloween ', '2023-10-17 09:00:00'),
('77441085-4a7a-457d-ae7d-61a5f4e59c47', 'bc5b83ce-3873-47c8-867b-aea81680b737', 'd4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Arte y confecciones Lina', '---', '2023-10-17 14:00:00'),
('83b9ac00-b8aa-4731-9bc7-3f3c46ec9196', 'afc36559-e5af-4c87-ac1f-1064f5c0fcf3', 'ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Prueba 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-04-16 14:00:00'),
('88e86d2c-3d1b-44bc-995c-9e5bf7aecc15', 'bc5b83ce-3873-47c8-867b-aea81680b737', 'e56bcf0c-b561-4218-971f-db40e7731284', 'MF.Bisuteria Fina-POST-VIDEO', '---', '2023-10-17 09:02:00'),
('97557780-0ba8-4adc-acc1-1518025f8682', '2f842b95-ebff-48dd-84d8-60e86002ba7e', 'ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Prueba 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-12-17 23:43:00'),
('9d864a46-f5e9-4cf4-956a-2dc124aece46', 'e5bfd716-c986-47db-9737-b596c083f8e4', '131d445c-b120-4c4c-b4ff-e57b2e4113d6', 'Chamito Burger', 'No tiene Whatsapp', '2023-11-23 09:00:00'),
('9de0cb70-ef13-4705-9500-a4b6a1d5d7f1', 'bc5b83ce-3873-47c8-867b-aea81680b737', '587d0567-fed7-40a2-8bdb-926492f47e97', 'Corviches Jenny Manaba', '---', '2023-10-17 09:57:00'),
('a686d3e1-14f8-48a9-b5c9-4a01a765fe57', 'bc5b83ce-3873-47c8-867b-aea81680b737', '8b12c134-9a8a-478b-b49b-dc4fb93b4759', 'Sweet and natural\'s by Ana', '---', '2023-10-17 09:00:00'),
('b84dcb6a-c7e2-45d6-8e8a-56b1affbeabe', 'cefc4644-5f7c-499f-9639-696f67c388bc', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Taller Artesanal las 3E', 'Se realizó el contenido solicitado', '2023-11-13 09:00:00'),
('cb80d268-4518-413c-924c-de2ceabf400e', 'bc5b83ce-3873-47c8-867b-aea81680b737', '7ae1aa1d-b354-482e-b66a-635ef3c36462', 'Musuguangu', 'SE LE ENVIO EL CONTENIDO REALIZADO', '2023-10-16 09:53:00'),
('ddaf50f9-8933-4149-85e7-22ba290ddc99', 'bc5b83ce-3873-47c8-867b-aea81680b737', '13e7edb6-34d6-4012-b532-56db0c127ca1', 'Nanyta Kids ', '---', '2023-10-17 09:14:00'),
('df5bdab2-bdbe-4f3f-8d56-d3c1aa41abb2', 'afc36559-e5af-4c87-ac1f-1064f5c0fcf3', '3ba785ce-3cf5-4d2c-a865-af93b36f82b0', 'Test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-11-14 18:54:00'),
('e3c2b60a-7a77-4ef2-950b-1d5e7de967ae', 'bc5b83ce-3873-47c8-867b-aea81680b737', 'bfb1945b-3dd7-4ebf-95be-360958e81a26', 'Cakes By Kissy', '---', '2023-10-17 09:52:00'),
('f1b0d5b5-7e8c-4d97-98ee-0154fe3540ad', 'afc36559-e5af-4c87-ac1f-1064f5c0fcf3', '3ba785ce-3cf5-4d2c-a865-af93b36f82b0', 'Brand', 'Encargado de vender suplementos alimenticios ideales para acelerar la mejoría muscilar y de las articulaciones', '2022-11-30 17:00:00');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `mentorship_display`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `mentorship_display` (
`id` varchar(64)
,`id_manager` varchar(64)
,`id_entrepreneur` varchar(64)
,`title` varchar(128)
,`description` varchar(256)
,`date_mentorship` datetime
,`manager_names` varchar(64)
,`manager_last_names` varchar(64)
,`manager_email` varchar(128)
,`entrepreneur_names` varchar(64)
,`entrepreneur_last_names` varchar(64)
,`nameStore` varchar(64)
,`entrepreneur_type` char(20)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `mentorship_info`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `mentorship_info` (
`id` varchar(64)
,`manager_name` varchar(130)
,`entrepreneur_name` varchar(130)
,`title` varchar(128)
,`description` varchar(256)
,`date_mentorship` datetime
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` varchar(64) NOT NULL,
  `id_entrepreneur` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `price` decimal(16,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `id_entrepreneur`, `name`, `description`, `price`) VALUES
('00213ce0-7fc9-48a2-893b-a5b569f8af68', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Empanadas de queso o pollo', 'Alimentación, Comida Rápida', 0.90),
('00bf1112-5e47-41a0-a7e2-9e422387e4f2', 'd5c9208c-c0e4-4f35-ba70-b0c3e7c91b25', 'Para el cabello', '¡Nutre tu cabello desdela raíz hasta las puntas con el shampoo de Aloe vera, de manzanilla, de Romero o Rinse de Romero!', 7.75),
('017df365-dbb7-4229-85e4-6a4726f40bd7', 'de96e8a8-defe-4036-ae01-c190cbe38711', 'Preparación para pruebas', '10 horas de preparación para pruebas quimestrales, transformar y prepo.', 8.00),
('01dd04dc-2666-4336-b20b-61ea70ea0eee', 'e9e916b0-b7e8-4411-8981-558dc3a049fa', 'Jersey', 'Tejido a mano con cuello tortuga y manga larga.', 60.00),
('01eae0f1-422b-46b4-a225-cff964f6c25f', '3cdd91ba-968b-4824-b038-38d7aa391172', 'JABÓN LÍQUIDO CORPORAL', 'Elaborado con materia prima orgánica, enriquecidos con Aceites esenciales, extractos naturales y vitamina E, ideal para personas que sufren alergias a ciertos químicos.', 8.00),
('01f22931-0b47-44c8-9f2a-5266001503b6', '7d03611b-2e93-4e78-b112-b026367511da', 'Laptod Dell Latitude 15', 'Laptod para los gamers del hogar', 1500.00),
('028adfda-40da-4396-ae83-714189cf0c8d', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Minidonas', 'Minidonas', 0.50),
('05d35112-5086-4712-a172-d37bedcba298', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Humita con café', 'Menú', 1.25),
('06b7194f-e8d6-4c0b-b28e-1a23124cc13f', '741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'Cuadernos, agendas, ballet jornal, libretas…. A4', 'Variedad de material para conservar las memorias, incluye elementos decorativos y marca página. Tamaño A4. Forrados en tela o en cartulina libre de ácido. Diferentes tipos de encuadernación: cosido francés, cadeneta, pegado, otros. Hojas a cuadros, puntos,', 8.00),
('077d735e-f526-43c3-aa6b-3ee64f531fc1', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Stitch y Angela', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 38 cm.', 32.00),
('09cbc531-1cab-493e-a74b-b19fe68beab8', '131d445c-b120-4c4c-b4ff-e57b2e4113d6', 'Pepitos', 'Pepitos de pollo: $4.50 Pepitos mixtos: $6', 4.50),
('09cd7bef-b2c3-49c6-9b75-b3cbfd36806c', '741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'Cuadernos, agendas, ballet jornal, libretas…. A5', 'ariedad de material para conservar las memorias, incluye elementos decorativos y marca página. Tamaño A5. Forrados en tela o en cartulina libre de ácido. Diferentes tipos de encuadernación: cosido francés, cadeneta, pegado, otros. Hojas a cuadros, puntos, ', 5.00),
('0c28153c-ad3c-4a3a-9a8a-08f158a8c09b', 'e2faa050-dbd8-4e37-9858-937f7962c2f7', 'ARETES DE AJOLOTE', 'ARETES DE AJOLOTE', 12.00),
('0c8b1b49-367e-4df8-b89b-ad3e979fea30', 'ed322c8f-52d6-425f-9285-9359d8598a60', 'Shampoo sólido para cabello sensible', 'Elaborado con ingredientes naturales como caléndula y aceite esencial de geranio.', 10.00),
('0da618d0-bcc0-43d4-8c28-f33b1308a373', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Cupcakes personalizados, diferentes sabores  naranja ,coco, vainilla,  chocolate y muchas más.', 'Deliciosos cupcakes con una capa cubierta de chocolate. Precio por cada uno.', 1.00),
('0f4b81c4-3e0a-4d41-9c2a-451533d7fe68', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Bombones de chocolate', 'Deliciosos bombones rellenos de almendras y nueces.', 0.50),
('100fe2c2-474d-4d92-abc0-ebda67e1cb52', 'b8239f41-bb40-46ea-84ba-5d9695ac4630', 'Granola de coco y Pepa de Sambo', '  Granola de coco  Precio: $1,00  Peso: 250 gr Pepa de Sambo  Precio: $2,50  Peso: 250 gr', 3.50),
('1043aafe-10f2-47b3-aa87-63e99f5e2cd2', '37b2efa9-bee7-40eb-91f3-be24982f99b7', 'Keratina Organica 250ml', ' Keratina Organica sin formol, ni ningun olor, no toxico, alisa al 100%, barre hasta 2 tonos. Presentación: 250ml', 12.00),
('1439593e-0f0e-4721-a082-56aa3c630ed5', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Pastel tres leches.', 'Delicioso bizcochuelo remojado con salsas tres leches de 1/2 libra', 12.00),
('147c15f8-4863-4f73-b445-3a3c91cbfc1d', 'de96e8a8-defe-4036-ae01-c190cbe38711', 'Resolución de ejercicios', 'Se resuelven ejercicios y guías', 25.00),
('14be7141-d71c-4c49-8f4a-72a4bc3f2b3f', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Tocador de Disney con taburete', 'Modernos juegos de dormitorio para niñas.', 100.00),
('14d1780c-d624-4068-98dc-afb13b734d22', 'e2faa050-dbd8-4e37-9858-937f7962c2f7', 'RON WEASLEY DE HARRY POTTER', 'Hecho con hilo de algodon', 18.00),
('1533e181-d212-4563-89af-0d4dde41748f', 'ac7f274c-eefe-4184-b877-1d31f1fa3a08', 'Nibs de cacao', 'son pequeños trozos de granos de cacao fragmentados, que tienen un sabor amargo y a chocolate son seleccionados, rico en aroma y en sabor. ', 1.00),
('1566d28b-9292-463e-9ae6-c3441bfb059b', '446871cd-91af-45c6-af3e-92a8c3282c0d', 'Cóctel Kombucha', 'Sin alcohol   Mojito   Micheladas   Guayusa   Frutos Rojos   Piña colada   Margarita ', 3.50),
('15d15f9e-68cf-406c-8af0-d0b8c46b8195', 'd4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Elaboración de cuadros', 'Grande', 200.00),
('16b36993-472d-4fe2-81a9-9659df596e8a', '3cdd91ba-968b-4824-b038-38d7aa391172', 'GEL ANTIBACTERIAL 70%', 'Elimina virus, bacterias. Contiene glicerina para evitar la resequedad de las manos CONTENIDO NETO: 4000cc.', 10.00),
('1709aa8d-6e1c-4ce3-912f-867fcb454022', '5bebf533-44ff-4f55-8925-c1cddcd9f9df', 'Asesoría y desarrollo de tesis, investigación de proyectos y monografía', 'Dirigido a estudiantes. Planteamiento y desarrallo de tesis.', 300.00),
('17d862fa-10eb-4cab-a2bb-2676b668ddb1', 'd4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Elaboración de cuadros', 'Pequeño', 20.00),
('19962d87-cf8a-423b-bf03-bbf62ba420ab', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes tejidos de broche redondo', 'Aretes tejidos de broche redondo', 15.00),
('19c80833-10dc-45a7-ad60-dd6b254a4669', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Papitas de Leche (Dulce de Leche)', 'Dulce de leche 25 Unidades', 6.00),
('1a5bd0f3-9ca0-4080-a18c-71cfd17e4db2', 'f331f3f7-8814-4d9b-bb5f-d07cb5117b47', 'Talleres de repostería: CHOCOPLASTILINA', 'Taller para niños de 4 a 8 años, el objetivo es la estimulación de la motricidad, concentración y atención, tiene duración de 1 mes (2 días a la semana los días lunes y miércoles de 3pm a 5 pm)', 70.00),
('1b4f9f2e-7420-41c6-a308-4c8bda29d2cd', '91b2fae6-8e43-4394-9fc8-11e732924872', 'Casitas para perros', 'Casitas personalizables con amplia variedad, Grande', 120.00),
('1bdfdd1a-41cf-4879-a970-cc61d81b7747', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Batido fruta natural', 'Menú', 1.50),
('1d8217a7-fabb-4199-91af-397805cc1aa7', 'b9e3c537-955e-4462-b6c2-5f9ca1b07614', 'Mantenimiento de ventanas', 'Realiza el mantenimiento preventi y correctivo de tus ventanas, puertas de vidrio, mamparas, tos lo referente de vidrio y aluminio con @vidau.gye', 12.00),
('1e365537-a1a5-4f17-83f8-0cf4ea673a5d', 'e8198f45-f42f-4659-9934-945262f73020', 'Bolones', 'Exquisitos bolones con queso, chicharon, carne y pollo', 1.00),
('1e3b43ad-5a9e-4fc3-9fe2-e16ad7c05dac', 'd8dab121-ae94-408e-8347-64fe21326af4', 'Marcos Personalizados', 'Memorias inolvidables que te hará recordar a tus seres queridos Tomamos el molde y convertimos en un lindo recuerdo', 115.00),
('1eafc73e-4654-487e-b6eb-ef58669d5388', '37b2efa9-bee7-40eb-91f3-be24982f99b7', 'Shampoo Matizante 1000ml', 'Shampoo hidratante, rejuvenecedor de cabello. Presentación: 1000ml', 8.00),
('214dee3b-9b00-4646-8295-1f46643888b1', '8c0ba245-800e-4227-8786-dd89bdcf4389', '10 Mini donas rellenas', 'Deliciosas mini donas rellanas .', 6.00),
('23f862e7-44b8-49a4-a86a-c0991e415c59', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Pastel tres leches.', 'Delicioso bizcochuelo remojado con salsas tres leches de 1 libra.', 20.00),
('24387ee8-7936-434d-a2eb-b66e1af47e92', 'a46579f5-4f9b-47f2-9bd1-8361f5de1248', 'Deditos XL', 'Son perfectos para disfrutarlo en familia.  Un delicioso aperitivo de 20 centímetros, que consiste de una barra de queso envuelto en una masa de harina y fritos hasta quedar crujiente.', 0.75),
('26686048-14c9-4aa4-934a-5dad9474faea', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Michelada', 'Menú', 2.25),
('27976086-113e-4f8a-924a-bd030dec3517', '5b5a0ab0-a5da-44c4-95e2-f04ea5a40c3c', 'Amigurumis', 'Un amigurumi es un compañero de vida que brinda amistad, consuelo y apoyo a su dueño. Cada amigurumi posee un alma que lo convierte en un compañero, amigo y confidente de la persona que lo posee. Se utiliza lanas de algodón o lanas de acrílico.  Sus medida', 15.00),
('27fc8bc9-9a33-4440-a0dc-c849364a5843', '13e7edb6-34d6-4012-b532-56db0c127ca1', 'Animacion para fiestas de Mujeres', 'Fiestas para Mujeres Adultas. *El precio depende de los requerimientos', 30.00),
('288274e6-4a62-4f8d-b340-2aecf515ebd4', '741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'Recetario Box', ' Caja acordeón para guardar recetas, compartimientos para clasificación de las mismas, cinta para cerrar y ajustar. Tarjetas para escribir.  MedidasÑ 16x14x5 cms', 10.00),
('2a03007a-8876-4f4a-9b3d-52b919e6e52e', 'd4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Confección de prendas íntimas', 'Hilos', 10.00),
('2a456de5-c5e1-4519-9702-2c93b873ad92', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Cajas de 25 donas pequeñas.', 'Cajas de donas pequeñas. ¡escoge tus sabores favoritos!', 5.00),
('2bfcf080-6bf8-4c67-b826-c89cc396df39', '587d0567-fed7-40a2-8bdb-926492f47e97', 'Corviches de pescado', 'Corviche manaba relleno de pescado.', 0.50),
('2c145c71-9be7-4ecf-a1b0-0b4886d8f272', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Rollitos con crema pastelera  ', ' Exquisitos  rollitos de hojaldre, rellenos con crema pastelera.', 0.40),
('2ddef74d-63de-4f0f-b1de-7e8854e8ad38', '37b2efa9-bee7-40eb-91f3-be24982f99b7', 'Kit 3 pasos - 500ml', 'Conjunto conformado por:    Shampoo Limpieza Profunda    Keratina Marroqui    Botox Marroqui . Presentación: 500ml', 12.00),
('2e6e7115-73b5-4389-90b8-75061b21af64', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Cama de princesa Barbie Rosa', 'Modernos juegos de dormitorio para niñas.', 200.00),
('2fe69531-769e-4115-84b5-4f6422705768', 'b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Gel limpiador facial', 'Limpieza suave y eficaz especial para pieles grasas Peso: 100 ml', 6.00),
('329b2475-74ff-47b6-9148-f1f158cd8e1b', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Tequeños Fiesteros (Queso Manaba, Mozzarella o Cheddar)', 'Queso Manaba, Mozzarella o Cheddar 30 Unidades Producto congelado listo para freír, hornear o colocar en el Air Fryer', 7.00),
('32e3f48f-b5c6-4462-bd11-acb37608aa74', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Alitas', 'Menú', 4.25),
('33c23d59-c431-4ceb-91f0-20ea90878901', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Ropero de Minnie Mouse', 'Modernos juegos de dormitorio para niñas.', 180.00),
('369ee627-a881-432a-a9a1-272f4fc495eb', '587d0567-fed7-40a2-8bdb-926492f47e97', 'Bolón', 'Ofrecemos deliciosos Bolones manabitas rellenos de queso y chicharrón.', 0.50),
('36f5b42c-a4bf-4db6-9f2e-29388b667b74', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niño-Cama de dinosaurio con velador', 'Crea un ambiente soñado para tus hijos!', 250.00),
('370d9498-c761-488d-adfa-fee300ed3067', 'd8dab121-ae94-408e-8347-64fe21326af4', '2 Huellas Grandes', '2 Huellas Grandes o también acompañado de una foto', 75.00),
('375a18a1-d5b7-46bb-89bc-cc63fd64bb65', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Salchipapas', 'Menú', 1.50),
('37a0ac6b-4812-4804-bba1-8eeeeadf7719', 'e2faa050-dbd8-4e37-9858-937f7962c2f7', 'MUÑECO DE GATITO', 'MUÑECO DE GATITO', 15.00),
('394c67c7-fa9b-4290-a9fa-54eda24c9bc6', '3cdd91ba-968b-4824-b038-38d7aa391172', 'LAVAVAJILLAS', 'CARACTERISTICAS Y BENEFICIOS: Es una crema suave con poder desengrasante efectivo, que al ser aplicado sobre la vajilla, lava y arranca la grasa de forma inmediata, contiene glicerina que le da suavidad a tus manos. CONTENIDO NETO: 4Kg.', 10.00),
('3958c8f8-2310-4d6c-abf3-44ed4a5f5cc6', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Hamburguesa', 'Menú', 3.00),
('395df843-bcc9-40bc-85d6-96b02c0e1479', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Pasteles', 'Torta marmoleada rellena', 23.00),
('39c46707-8968-4703-950f-e702e5f28794', '30247608-92c3-4f1b-b645-83257c5c398f', 'Bóxer', 'Ropa interior masculina.', 7.00),
('3a4b092e-131f-4fe3-8ee0-6f238a1fb2bb', '67fbb9a2-0202-4426-a6ed-284959c53dd9', 'Vestidos', 'Vestidos traídos bajo pedido de Estados Unidos, en diferentes tallas y modelos para el cliente.', 7.00),
('3c4593a5-89a8-4d9f-a84c-a8cb7646c5a0', '37b2efa9-bee7-40eb-91f3-be24982f99b7', 'Keratina Organica 500ml', ' Keratina Organica sin formol, ni ningun olor, no toxico, alisa al 100%, barre hasta 2 tonos. Presentación: 500ml', 25.00),
('3de969ee-f4ae-4c37-ba28-1969699a6070', '8b12c134-9a8a-478b-b49b-dc4fb93b4759', 'Granola', 'Granola de 875g', 6.75),
('3e2729ec-d3fc-42ca-9f49-c408834266c2', 'd4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Confección de prendas íntimas', 'Completo', 30.00),
('405ca039-d7e9-4acc-a010-214e5ecd3124', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes con almbrismo con swarovski', 'Aretes con almbrismo con swarovski en forma de circulo con piedras en el centro', 15.00),
('41cd8157-8c37-4949-9f8f-82b25874564d', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Batido de fruta natural', 'Alimentación, Comida Rápida', 1.50),
('4697ead1-05ca-4a88-91c1-f9fc17a8e564', 'f331f3f7-8814-4d9b-bb5f-d07cb5117b47', 'Talleres de repostería: PLAN VACACIONAL', 'Curso vacacional de 4 semanas (Lunes, Miercoles, Viernes) para niños de 5 a 13 años', 57.00),
('469d5692-5f2a-48ef-a130-2dc2ec496db9', '13e7edb6-34d6-4012-b532-56db0c127ca1', 'Pizarra caballete', 'Juguete didáctico', 35.00),
('47452e4b-afeb-4cab-960d-45d35862c9ae', 'd5c9208c-c0e4-4f35-ba70-b0c3e7c91b25', 'Manos y Cuerpo', '!Cuida, hidrata y calma tus manos y cuerpo! con crema de Aloe vera o crema señorita rosa.', 5.00),
('476c2002-0c44-44b3-99fc-36751916c25f', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes redondos tejidos', 'Aretes redondos tejidos', 15.00),
('47fa98e6-b790-4e6d-923f-32b65c4379ce', 'ac7f274c-eefe-4184-b877-1d31f1fa3a08', 'Barra de chocolate amargo de 40g ', 'Exquisito chocolate dulce o amargo con granos de café cuidadosamente seleccionados, rico en aroma y en sabor.', 1.00),
('482ae5dd-2b03-4db8-b36c-f08b33a67923', '741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'Agenda 2023', 'Agenda que se puede ocupar como un cuaderno o un bullet journal', 8.00),
('48e52ebe-e177-4c9b-9fff-ba1429c6985d', '91b2fae6-8e43-4394-9fc8-11e732924872', 'Casitas para perros', 'Casitas personalizables con amplia variedad, Extra grande', 150.00),
('493f40c0-811b-4a08-bf5f-01e1f5b626db', 'b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Tónico Astringente', 'Ideal para piel grasas o acnéicas Peso: 100 ml Con romero y áloe vera', 5.00),
('4951f043-1f58-40fc-90d6-cad73e01396b', '5b5a0ab0-a5da-44c4-95e2-f04ea5a40c3c', 'Gorros de Crochet', 'Hermosos gorros, con diseños personalizados, realizado con lana acrílica gruesa. Se realiza desde recién nacidos hasta adultos', 20.00),
('496a114d-e55a-44ac-9e08-0d940d0866fe', 'd4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Restauración de estatuas religiosas', 'Arte y confecciones Lina ofrece el servicio de restauración de estatuas religiosas de tamaño Grande', 70.00),
('4aeb0ab8-e19e-4482-b667-77711ceba707', 'e9e916b0-b7e8-4411-8981-558dc3a049fa', 'Croptop', 'Tejido a mano con varios diseños y colores.', 25.00),
('4c279926-74da-4652-962e-076178ab915d', '1d5cca5b-7912-4864-833a-44fc83b89314', ' Encocado de Pollo', 'Arroz blanco con Encocado de Pollo', 10.00),
('4ea64f20-3edc-483a-a2d5-c0b067e14528', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Castillo Rosa', 'Modernos juegos de dormitorio para niñas.', 150.00),
('4ec6bb3e-9f04-42ec-8e42-4738c826c657', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niño-Cama Paw Patrol Roja', 'Crea un ambiente soñado para tus hijos!', 200.00),
('4fbaed6c-2f79-4d12-b5a8-03f78441d137', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Colgante geométrico', 'Colgante geométrico y en swarovski', 15.00),
('518ea5ff-fd1b-498b-b158-5ae6efd61cab', '6b85a0a9-581c-4d41-912e-212168d5ecea', 'Clases presenciales ', 'Servicio presencial para enseñar Lectoescritura', 10.00),
('52b15dfa-8bb3-4230-93e6-e84a3aae54e2', 'bfb1945b-3dd7-4ebf-95be-360958e81a26', 'Magdalenas', 'Alimentación, Postres', 12.00),
('53cc6337-64e3-405e-8252-d213f3fb0086', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes asimétricos', 'Aretes desiguales uno largo y uno corto', 12.00),
('53fca8f9-08cf-4fce-9301-1b3dab0d3d5c', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Osito Assim', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes, mide 38cm Además la encontrarás en su cajita de regalo. Hecho de nailon.', 18.00),
('5400bf13-2d02-467b-a226-f47df17842f1', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Empanadas tipo bocadito', 'Sabores Amarve 25 Unidades de Producto congelado listo para freír, hornear o colocar en el Air Fryer. Sabores: Queso Mozzarella, Jamón con Queso, Papa con Queso, Carne Mechada, Pizza, Pollo, Carne, Chorizo', 10.00),
('5401eb28-8506-4c22-829c-3d5cccf0ec19', 'f4d9ee43-a765-4b43-aacb-81a381f0ab26', 'Yogurt tipo Griego Natural – ATLAS de 4lts', 'Yogurt tipo Griego, sabor Natural de 4 litros (bajo pedido)', 25.80),
('541a3dc7-a48a-43c9-8a03-54eb3da0cb32', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Batido sencillo', 'Alimentación, Comida Rápida', 1.90),
('54f2c4cb-7b1d-45a2-9495-f1cd513ba471', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Cama de Minnie Rosa con velador y peinadora con espejo', 'Modernos juegos de dormitorio para niñas.', 450.00),
('5649b1d9-59b3-4dd3-9688-b339dfc97b75', '5bebf533-44ff-4f55-8925-c1cddcd9f9df', 'Publicidad a través de videos ”en vivo”', '  ASESORÍA FINANCIERA Y MICROEMPRESARIAL – ELIZABETH TRUJILLO  Dirigidos a pequeños emprendedores, turismo', 20.00),
('5785e047-cef7-4470-a501-08190b902ba0', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Brochetas de frutas', 'Deliciosas brochetas, con variedad  de frutas frescas a su elección. ', 1.00),
('57bc66dc-18cb-4200-8a95-dab0e3c00de4', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Taza de chocolate', 'Alimentación, Comida Rápida', 1.35),
('57efd239-68dc-4db6-9c76-26191065269d', '30247608-92c3-4f1b-b645-83257c5c398f', 'Tangas', 'Ropa interior femenina tipo Tangas.', 4.50),
('58174fc9-919c-4642-a6d8-d9201765f1ef', '8b12c134-9a8a-478b-b49b-dc4fb93b4759', 'Colada Morada + Guagua de Pan', 'Guagua rellena de (manjar, chocolate, Mermelada de mora o guayaba) + Colada morada', 3.00),
('59b74d96-dfe7-4fc0-b85d-6f25b9d71c7a', '5b5a0ab0-a5da-44c4-95e2-f04ea5a40c3c', 'Mantas de apego', 'Mantas de apego para bebes y niños pequeños, los acompañan en su crecimiento y les brinda segura, apoyo y consuela, son tejidas en lana de algodón.', 20.00),
('59b8da18-bf53-4880-b1ef-467da36aa58f', 'f88d2ec9-642e-401f-a54d-670c554f1038', 'Mochilas Escolares', 'Las mochilas son elaboradas con material resistente, con distintos diseños para el gusto de tu niño o niña, son ideales para la escuela. Con medidas de 34 cm de largo y 33cm de ancho.', 12.00),
('59d3d932-2b06-408d-94fb-4fef8365b2bf', 'bfb1945b-3dd7-4ebf-95be-360958e81a26', 'Meme Cake', 'Cake personalizado con tu mejor meme', 8.00),
('5b9ae6a0-1ec9-4ec9-8dd6-a7d84bfd2fa8', 'd4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Restauración de estatuas religiosas', 'Arte y confecciones Lina ofrece el servicio de restauración de estatuas religiosas de tamaño pequeño.', 10.00),
('5bc4ed09-7afa-417c-93dc-9449545158a5', '3ba785ce-3cf5-4d2c-a865-af93b36f82b0', 'Disco Duro Externo 64GB', 'Es un disco durable y portable que permite  bla bla bla', 55.90),
('5beb01f6-94bd-42bb-951e-51d0d3c4f6ca', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Torta de Donas', 'Torta de donas', 14.00),
('5f9d3e75-454a-4228-b59d-41d1544a3161', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches clásico', 'BANDEJAS: MEDIANAS. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 15.00),
('5fc920a7-cd0b-462c-8c8a-63b5139a7f6e', 'a01b7696-fd61-4e72-acbb-ee5099c755d8', 'Pan para Hot Dog', 'Alimentación', 1.75),
('60c9c6ab-c567-4167-a6e8-f442152f13cc', '02a35175-236f-4a56-b4f9-58588a31f435', 'Reparación y mantenimiento de PC y laptop (Linux, Mac, Windows)', 'Instalación de programas Recuperación de información Copias de seguridad de datos e información Mantenimiento preventivo Formateo e instalación de sistemas operativos Recuperación o cambio de componentes Limpieza de virus Instalación de aplicaciones', 30.00),
('627c009e-3e1e-4e67-bbe1-16096f2d0b0d', '5b5a0ab0-a5da-44c4-95e2-f04ea5a40c3c', 'Bufandas Normales', 'Bufandas en distintos diseños, para mantenerte calientito Medidas: Adulto:1.50m Niños:1.10m', 10.00),
('628f0969-5118-4fe6-b130-e637371d5803', 'ed322c8f-52d6-425f-9285-9359d8598a60', 'Acondicionador Sólido', 'Acondicionar sólido elaborado con productos naturales Peso: 70 gramos', 10.00),
('63fd3841-8987-487c-8a98-6036fb4c6a0d', '37b2efa9-bee7-40eb-91f3-be24982f99b7', 'Kit 3 pasos - 1000ml', 'Conjunto conformado por:    Shampoo Limpieza Profunda    Keratina Marroqui    Botox Marroqui . Presentación: 1000ml', 15.00),
('6460de6a-b71a-449a-acc6-f750c18a301f', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches de frutos rojos', 'BANDEJAS: PEQUEÑAS. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 6.00),
('6553e4d6-2f0b-4671-90f5-14ac0ebc0854', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñeca Bes', 'Muñeca tejida a mano con colores brillantes, conjunto de ropa blusa y falda en lila y rosa (se puede cambiar los colores), técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes, mide 30cm. Además la encontrarás en su cajita de regalo p', 25.00),
('655de5b0-8fc8-4c55-9fef-a4124a153d85', '5fca62c0-24ad-4f1d-be36-6f706127715c', 'Eventos Infantiles-Paquete Pochi Amiguitos', 'Servicio de animaciones para fiestas infantiles que incluye: -2 horas de animación infantil -Caritas pintadas -Personaje básico, juego, concursos para niños y adultos. -Cantar el cumpleaños feliz y soplar la velita -Repartir la piñata -Mini Hora loca infan', 70.00),
('66d61bf5-300f-4efb-8181-6032e326b116', '1162a80a-599c-4beb-b61e-8e19e75644b1', 'Cupcakes personalizados, diferentes sabores  naranja ,coco, vainilla,  chocolate y muchas más.', 'Deliciosos cupcakes con una capa cubierta de chocolate. Precio por cada uno.', 1.00),
('6863c19c-aaa2-449a-8355-43b8673513dc', '5b5a0ab0-a5da-44c4-95e2-f04ea5a40c3c', 'Monederos y tipo carteras', 'Monederos y tipo carteras, tejidos con lana según el modelo a su elección. Ideales para guardar tu dinero o algún artículo pequeño que necesites.', 8.00),
('6914755f-cd08-4027-aee8-a313e404d105', '91b2fae6-8e43-4394-9fc8-11e732924872', 'Casitas para perros', 'Casitas personalizables con amplia variedad, Pequeña', 65.00),
('6a1eb828-cac3-4626-9d95-335283bff6e1', '741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'Cuadernos, agendas', 'Variedad de cuadernos y agendas', 5.00),
('6cbf443e-9360-41f3-8d7a-becf9933ac02', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Muñeca Ali', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 30 cm.', 25.00),
('6e065394-9f9f-46e8-bb35-8fcf6eba30d6', 'e78e761e-c378-497a-805a-31ce8bedccdd', 'Blusa ', 'Blusas bordadas sin manga Modelo: Esperanza Tela: Hindú o panamá, 100% algodón.', 68.00),
('70d7111d-5dad-4b08-bbaa-c3830721f00c', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Velador con lámpara', 'Modernos juegos de dormitorio para niñas.', 45.00),
('713e4edf-145c-4864-840a-285c7b801911', 'b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Exfoliante facial suave de rosas', 'Cuenta con pequeñas partículas que ayudan a retirar las células muertas de tu rostro Peso: 70 ml', 9.00),
('719479f5-435f-44ee-b20b-d47e3f5f4319', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Milkshake con crema', 'Menú', 2.90),
('71d7520f-04af-4192-9c83-fe2f21b84d39', 'ed322c8f-52d6-425f-9285-9359d8598a60', 'Shampoo sólido para cabello seco', 'Shampoo sólido elaborado con productos naturales con aceite esencial de lavanda.', 10.00),
('721e1bd6-b2b6-4684-9744-e33fbd97af1c', '8b12c134-9a8a-478b-b49b-dc4fb93b4759', 'Cheseecake Vegano', 'Elaborado sin azúcar, libre de gluten,  y las frutas a su elección. Rinden de 8 a 10 porciones.', 28.00),
('725e750b-407d-445e-b741-79e8e68fd351', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Pan de Yuca', 'Menú', 0.30),
('7290e1c3-fa69-4914-8030-e43ffd20f48d', 'd826ff6d-9d64-4cf6-90df-628ffcc2617d', 'Mascarillas faciales', 'Mascarillas de velo, mascarillas de gel en 0,50 ctvs y 1$', 1.00),
('72bc71c6-2473-4cc2-bd80-d7bce407a6d7', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Donas grandes', 'Donas grandes rellenas. ¡Elige tu sabor favorito!', 1.00),
('7465061a-f944-440d-b5d3-ad7c03098084', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Yogur 350ml', 'Alimentación, Comida Rápida', 1.00),
('76b92884-f7a8-44c8-93a1-c6bae554781c', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Milkshake simple', 'Menú', 1.90),
('77326540-67a6-46fd-a57c-db6b7edb0215', 'b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Leche limpiadora multivitamínica', 'Elimina el maquillaje y limpia a profundidad. Para todo tipo de piel', 6.00),
('77926b8b-ab31-4723-8789-288bdb58a5b4', 'f331f3f7-8814-4d9b-bb5f-d07cb5117b47', 'Talleres de repostería: REPOSTEROS Z', 'Taller para preadolescentes y adolescentes de 13 a 17 años, el objetivo es trabajar la oratoria y postura, tiene duración de 4 semanas (1 día a la semana, los días viernes de 3pm a 6pm)', 90.00),
('7a3957dc-c9eb-43ce-89b4-f0e0f9a0d0a4', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas- Cama de plaza y media con dos veladores', 'Las camas son el principal complemento que destacarán el estilo de tu dormitorio. Crea un ambiente soñado para tus hijos. Elije los mejores juegos de dormitorio hecho en madera con diseños únicos.', 350.00),
('7c0b4993-b011-46cd-ae10-24b8e3016a80', '5fca62c0-24ad-4f1d-be36-6f706127715c', 'Eventos Infantiles-Paquete Pochita', 'Servicio de animaciones para fiestas infantiles que incluye: -2 horas de animación infantil -Caritas pintadas -Personaje básico, juego, concursos para niños y adultos. -Cantar el cumpleaños feliz y soplar la velita -Repartir la piñata -Mini Hora loca infan', 140.00),
('7c3ba713-935b-49c5-a558-4cd562fb3f20', '67fbb9a2-0202-4426-a6ed-284959c53dd9', 'Conjuntos', 'Conjuntos traídos bajo pedido de Estados Unidos, en diferentes tallas y modelos para el cliente.', 10.00),
('7d37dbb5-7f74-4891-8e1b-5ce3c136e855', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Incluso la salchicha', 'Alimentación, Comida Rápida', 1.50),
('7d8f8fce-c9c8-4d5d-a40c-2b7cb0be7bb7', 'bfb1945b-3dd7-4ebf-95be-360958e81a26', 'Mini pastel', 'Mini cake personalizado al gusto del cliente', 12.00),
('7e13feb3-e4ff-4f0e-a129-aa25d3918ca7', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Vino Hervido', 'Alimentación, Comida Rápida', 2.75),
('7ef0632e-1308-4469-a792-1f2e74e16932', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Torta de piña', 'Deliciosa Torta de piña para disfrutar en familia', 6.00),
('7fb1755b-0b94-42a1-8e14-78e6f314e46d', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Muñeca Zoe', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 30 cm.', 25.00),
('808f0dcd-f77d-4476-9e80-c0d313a4354e', '741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'Álbum Hello Kitty scrapbooking', 'Los mejores productos', 12.00),
('80b0fb96-5a7f-437f-9461-e4858c4f4bf6', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Limonada CVIVE', 'Menú', 0.90),
('8129f84d-9aa4-4aea-8eb5-ed61de4f79b6', 'e2faa050-dbd8-4e37-9858-937f7962c2f7', 'MUÑECO CON CERDITOS', 'Hecho con Lana Acompañado de dos cerditos', 20.00),
('81496a38-2664-479d-acb5-73b0dc73840d', '1d5cca5b-7912-4864-833a-44fc83b89314', 'Encocado de Pescado', 'Encocado de Pescado', 5.00),
('81e57aea-c742-47c9-a8d5-3bdecf9a4cc6', 'b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Leche limpiadora multivitamínica', 'Elimina el maquillaje y limpia a profundidad. Para todo tipo de piel', 6.00),
('82b52e5c-24ea-429a-8a78-8f600bf63d05', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Deditos de queso o tequeños', 'Sabores Amarve 25 unidades de deditos o taqueños fiesteros de queso mozzarella (producto congelado listo para freír, hornear o colocar en el Air Fryer)', 5.00),
('847bb69a-3062-4be2-bcc5-cc14d42263fa', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Earcuff', 'Arete con swarovski', 25.00),
('85082f5c-4d7b-4ea1-aa42-bb680941206f', 'd8dab121-ae94-408e-8347-64fe21326af4', 'Marcos ¨Recuerdo de Mascotas¨', 'Piezas personalizadas en yeso, con marco de madera para mascotas Marcos de 23×23 cm', 55.00),
('85cd57f6-bba4-42f1-8e32-75a2aaf33f91', '13e7edb6-34d6-4012-b532-56db0c127ca1', 'Animación de fiestas infantiles', 'Animación de fiestas infantiles. *El precio depende de los requerimientos', 30.00),
('85d6d7fc-495a-45b0-85ec-5b2d4375accc', '8b12c134-9a8a-478b-b49b-dc4fb93b4759', 'Granola', 'Granola de 250g', 1.80),
('866b847c-19e3-4af3-8cee-bec5a2ff5868', '3cdd91ba-968b-4824-b038-38d7aa391172', 'DETERGENTE LÍQUIDO', 'Esta elaborado a base de materia prima orgánica, cuya finalidad es ofrecer un detergente de calidad para proteger las prendas de vestir.  Contenido neto: 4000cc.', 9.00),
('86b3fda7-f57c-465a-a2af-fd8e0c277234', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Bombones decorados', 'Deliciosos bombones, para ocasiones especiales por pedido. El relleno del delicioso chocolate: puede ser de almendras, coco, pistachos, nuez etc.', 9.50),
('880d66cf-b815-4762-b871-a8b5779524fc', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Ryoga de Ranma', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 30 cm.', 20.00),
('898e3c43-bf4c-4568-8ed1-67896c0c1f3e', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Tocador con taburete y espejo', 'Modernos juegos de dormitorio para niñas.', 130.00),
('898e4537-075c-41e1-b5b3-c29b0cef71c2', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes ', 'Aretes grandes', 15.00),
('8a1652c5-3263-4ce8-88a8-0ae512f79dda', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Pulsera', 'Pulseras para diario', 4.00),
('8aa1b991-f9a9-475f-a53e-c32bd9cad436', 'bfb1945b-3dd7-4ebf-95be-360958e81a26', 'Cakes By Kissy', 'Cupcakes x 6 Unidades', 12.00),
('8b3297da-62e2-4d83-b681-280fe0092d8d', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Lámpara Ponny Rosa', 'Modernos juegos de dormitorio para niñas.', 20.00),
('8bf7f234-5af3-43bb-a273-b00d16a055f6', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Jugo fruta natural', 'Alimentación, Comida Rápida', 1.25),
('8c07ab29-4666-4080-8e01-167ecaeb55c5', 'a1435cea-419a-4de7-8193-27a1ead9bc09', 'Peluquería Canina Razas Pequeñas', '  Peluquería canina para razas pequeñas con opción de servicio a domicilio por $5 adicionales o  profilaxis dental por $5 adicionales', 12.00),
('8c084277-f8bd-40e6-878e-906b69c6a9f8', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Bebé Mosi', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firme. Además la encontrarás en su cajita de regalo. Hecho de nailon, 25 cm.', 15.00),
('8c789dec-015b-4dab-89ef-46855f5cfc53', 'f331f3f7-8814-4d9b-bb5f-d07cb5117b47', 'Talleres de repostería: REPOSTERITOS DONUTS NORA', 'Taller para niños de 9 a 12 años, el objetivo es trabajar la parte comunicativa, y habilidades emocionales, tiene duración de 1 mes (2 días a la semana los días martes y jueves de 3pm a 5pm)', 95.00),
('8ccb1839-d57b-410e-a8e8-e459d8f503ca', 'e9e916b0-b7e8-4411-8981-558dc3a049fa', 'Top corto', 'Tejido a mano con varios diseños y colores.', 25.00),
('8ce492a6-67e0-4c44-b1ac-1e4c81b1798d', '3774d798-e432-48a9-9f1b-3519417561db', 'Sanduches', 'Deliciosos Sanduches', 2.00),
('8dc5fe62-8711-4031-aac6-d1e86a6cba80', 'ed322c8f-52d6-425f-9285-9359d8598a60', 'Shampoo sólido para cabello graso', 'Shampoo para cabello graso elaborado a base de cítricos y aceite esencial de limón. Peso: 80 gramos', 10.00),
('8dece023-91c1-4b0c-8090-7190bc422db4', '5fca62c0-24ad-4f1d-be36-6f706127715c', 'Eventos Infantiles-Paquete Pochi Saltitos', 'Servicio de animaciones para fiestas infantiles que incluye: -2 horas de animación infantil -Caritas pintadas -Personaje básico, juego, concursos para niños y adultos. -Cantar el cumpleaños feliz y soplar la velita -Repartir la piñata -Mini Hora loca infan', 70.00),
('8f1ef9f4-203d-457b-970e-fc58da4f9aeb', '5bebf533-44ff-4f55-8925-c1cddcd9f9df', 'Planificación de costos y presupuestos', '  ASESORÍA FINANCIERA Y MICROEMPRESARIAL –  ELIZABETH TRUJILLO  Elaboración de presupuestos familiares, profesionales, empresariales', 50.00),
('8f77c7ea-f92e-4530-83db-b28a39a7a5af', '3cdd91ba-968b-4824-b038-38d7aa391172', 'JABÓN LÍQUIDO PARA MANOS', 'Con vitamina E , extracto de avena y glicerina para evitar la resequedad de las manos. CONTENIDO NETO: 1000cc.', 3.75),
('900af219-d26b-4110-8d0f-495875f41ee3', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Muñeca Unicornio', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 35 cm.', 25.00),
('90800d54-4a6e-4f76-b7b9-918d5acfe480', '5fca62c0-24ad-4f1d-be36-6f706127715c', 'Eventos Infantiles-Paquete Pochita Completo', 'Eventos Pochita ofrece servicio de animaciones para fiestas infantiles que incluye: -2 horas de animación infantil -Caritas pintadas -Personaje básico, juego, concursos para niños y adultos. -Cantar el cumpleaños feliz y soplar la velita -Repartir la piñat', 225.00),
('909f3796-b63a-4f33-bffc-13799f85547c', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes con almbrismo con swarovski', 'Aretes en alambrismo con swarovski en colores', 20.00),
('90edc9dc-53d6-4a75-adcd-176a8354f8e2', 'e78e761e-c378-497a-805a-31ce8bedccdd', 'Vestidos de niña', 'Vestidos de niña bordados con diversos diseños Tiene 2 bolsillos con manga corta Tela: 100% algodón Diversos colores a escoger', 25.00),
('912ea587-bdcb-49b2-8816-4882bf8bae2a', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Empanadas queso o pollo', 'Menú', 0.90),
('91fae81d-f229-451b-a06f-2d5a024fbe22', '3cdd91ba-968b-4824-b038-38d7aa391172', 'ALCOHOL ANTIBACTERIAL 70%', 'CONTENIDO NETO: 4000cc. La mayor actividad bactericida la presenta el de 70, ya que mejora la penetración en el protoplasma bacteriano y es de acción rápida, al destruir el 90% de las bacterias de la piel si se mantiene húmeda durante 2 minutos', 9.00),
('920e1548-38cb-4410-a0fb-910aea064f9b', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Polvorosas (Galletas)', 'Galletas que se deshacen en la boca 25 Unidades.', 5.00),
('922021f7-a249-42a4-a688-2d7fa7453a2d', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Tequeños Fiesteros (Doble Chocolate 9 cm)', 'Doble Chocolate 9 cm 8 Unidades $8 Producto congelado listo para freír, hornear o colocar en el Air Fryer', 8.00),
('925b24b0-4fff-4086-8bf4-1908d704d85a', '3cdd91ba-968b-4824-b038-38d7aa391172', 'JABÓN EN BARRA DE GLICERINA', 'La glicerina hidrata, suaviza y calma la piel en casos de piel seca, tirantez y picor. Además reduce pequeñas arrugas.', 3.50),
('940bdfa5-e782-43c8-835a-fbf0c4232588', 'a46579f5-4f9b-47f2-9bd1-8361f5de1248', 'Deditos  para bocados  y fiesta', 'Delicioso aperitivo que consiste de una barra de: Queso, Salchicha, Plátano y jamón Envueltos de una masa de harina y fritos hasta quedar crujiente. Viene 100 unidades e incluye salsa para disfrutarlo al máximo!!!', 10.00),
('9468d7ea-3d4d-45f4-95c3-d31569b1c7b7', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches de chocolate', 'BANDEJAS: MEDIANAS. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 15.00),
('9493c312-0dd5-47b0-a189-f1970f4b73f9', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Michelada', 'Alimentación, Comida Rápida', 2.25),
('95dde61f-4b2e-476e-8517-e2a23fe1c690', 'a46579f5-4f9b-47f2-9bd1-8361f5de1248', 'Deditos XL mixto', 'Son perfectos para disfrutarlo en familia.  Un delicioso aperitivo de 20 centímetros, que consiste de una barra de plátano y jamón envuelto en una masa de harina y fritos hasta quedar crujiente.', 1.00),
('96c78654-4e57-4c7f-a9c2-85bf2cb4a21b', 'ed322c8f-52d6-425f-9285-9359d8598a60', 'Shampoo sólido anticaspa', 'Shampoo sólido anticaspa elaborado a base de tomillo que favorece al fortalecimiento capilar. Peso: 80 gramos', 10.00),
('97233bc5-40b9-49ea-ac3f-3dcae322bd20', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Quesillo', 'Sabores Amarve Quesillo, Flan o Queso de Leche', 12.00),
('97a9c256-0456-40df-a3a3-04b3d0dd7d62', 'f88d2ec9-642e-401f-a54d-670c554f1038', 'Mochilas de Mujer', 'Son realizados con cuerina, charol o telas, con diseños diferentes, ideales para tí. Son cómodas, puedes guardar todo lo que necesitas y llevar a cualquier sitio sin dejar atrás tu estilo. Marca tu estilo con nuestras mochilas!!!', 15.00),
('983ec110-261e-44e7-b052-dcc687a8c7b6', '8b12c134-9a8a-478b-b49b-dc4fb93b4759', 'Mermeladas de frutas', 'Mermeladas de frutas ', 5.75),
('99b26bd9-6e66-4495-9297-6670a4a32469', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Papipollo', 'Alimentación, Comida Rápida', 2.00),
('9a5b1b20-2bae-4cff-a804-756b3e5c0135', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Blancanieves', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 28 cm.', 20.00),
('9a5c3c15-48f2-4ba4-a2e7-59b3d19cb52b', 'a46579f5-4f9b-47f2-9bd1-8361f5de1248', 'Deditos Jumbo', 'Deliciosos aperitivos de 12 centímetros que consiste de una barra de: queso, salchichas, plátanos y jamón envueltos en una masa de harina y fritos hasta quedar crujiente. 12 unidades', 5.00),
('9b751d08-c6bd-4046-83ec-d7c4abb4b581', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches de chocolate', 'BANDEJAS: PEQUEÑAS. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 6.00),
('9c2ef8b0-e74d-430a-88ee-49a5a45542f6', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Batido con crema', 'Alimentación, Comida Rápida', 2.90),
('9cdd7f8a-138f-45de-8f05-44ebd516ca55', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Empanaditas rellenas', 'Deliciosas empanaditas rellenas con una delicada masa y textura suave, el relleno es a elección del cliente. ', 0.40),
('9ed30984-7360-4737-9dd4-d0bd8da807af', '34470a27-b9c3-4dd1-8376-26d7634a18a4', 'Manualidades Lali', 'En papel reciclaje, hojas de choclo, fieltro ,fomix. Los precios son variados desde 1 hasta 25 o 30 dólares.', 1.00),
('9f0b7417-536b-49cc-94bb-23ad5881aa5a', 'a1435cea-419a-4de7-8193-27a1ead9bc09', 'Desparacitación y control de pulgas y garrapatas', 'Desparacitación vía oral Tiempo estimado: 15 a 20 minutos, Tenemos la opción de servicio a domicilio por $5 adicionales', 10.00),
('9f847054-93a5-4303-8b86-643a171e2eb1', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Porción de papas', 'Menú', 1.00),
('9f8dc7ff-eeae-4bbc-8e41-dd9b31c3a04d', '587d0567-fed7-40a2-8bdb-926492f47e97', 'Muchines', 'Deliciosos muchines de yuca relleno con queso y huevo duro .', 0.50),
('a112fa5e-fcfd-4eaf-b236-1dc645057a71', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Pasteles - Prodcuto estrella', 'Hecho en base de crema de manjar, torta 3 leches de chocolate, Ganache , Oreo triturada, Sirope, Chantilli de chocolate', 2.50),
('a2b7eefc-047a-407c-b74f-d5e6612cffd1', '13e7edb6-34d6-4012-b532-56db0c127ca1', 'Animacion para fiestas de Mascotas', 'Fiestas para Mascotas. *El precio depende de los requerimientos', 30.00),
('a39f6083-f0bb-4f0c-9a08-de5dceeada4c', '70a85a0d-fa28-4e9e-8cf9-761f0e15fa9d', 'Tequeños Fiesteros (Queso y Guayaba)', 'Queso y Guayaba 30 Unidades Producto congelado listo para freír, hornear o colocar en el Air Fryer', 8.00),
('a67aff56-d985-4603-aa34-61a47cd316ba', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Taza de café', 'Alimentación, Comida Rápida', 0.85),
('a6f4b601-73aa-4a13-b4eb-f18d234630e2', 'b8239f41-bb40-46ea-84ba-5d9695ac4630', 'Kefir de agua', 'Kefir de agua  Bebida probiótica peso 300ml', 2.80),
('a747e7b4-29a9-485d-9727-e622c589c0b6', '30247608-92c3-4f1b-b645-83257c5c398f', 'Cachetero', 'Ropa interior femenina tipo', 5.00),
('a79ddc2a-c0da-43b4-9d42-5563d9133196', '5b5a0ab0-a5da-44c4-95e2-f04ea5a40c3c', 'Bufanda Infinita', 'Para hacer 3 vueltas al cuello muy abrigadora, cuenta con las siguientes medidas Adulto larga 2.20 m Adulto normal 1,80 m Niños 1,50 m', 12.00),
('a7f8985d-d165-402f-8fef-0e72a9934219', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Cama de Minnie con velador y peinadora con espejo', 'Modernos juegos de dormitorio para niñas.', 400.00),
('a9a6da29-8334-4399-8fa9-06a73836b9d4', 'd8dab121-ae94-408e-8347-64fe21326af4', 'Piezas Individuales', 'Piezas juntas (Manito y Piesito) ', 45.00),
('aace097e-6d51-4006-aa17-9132d859e589', 'e78e761e-c378-497a-805a-31ce8bedccdd', ' Camisas de Hombre', 'Camisas de hombre bordadas manga larga. Diseño: Inca Tela: 100% algodón, hindú blanca Bordado con colores a escoger.', 65.00),
('ac35b0c1-a0be-4050-8f15-494cf37cafed', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches clásico', 'BANDEJAS: FAMILIARES. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 25.00),
('ad20ca8c-57ca-4a0b-8bd3-f8a56844a3a8', '67184212-b87b-48ce-8d49-9ebc3f82a681', 'Deditos yumbos', 'Un delicioso aperitivo de 12 centímetros, que consiste de  Deditos de queso    Deditos de salchichas    Deditos con plátanos y jamón   envuelto en una masa de harina y fritos hasta quedar crujiente   12 unidades ', 5.00),
('ad28b575-c101-436f-9483-749d33941b60', '741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'Álbum Hello Kitty scrapbooking', 'Medidas 15x15, hojas desplegables, shaker, marcadores, post it para notas. Cartulina libre de ácido. Exterior en cartón resistente forrado en blanco y decorado, interior en cartulina blanca decorada.', 12.00),
('adf20154-cb02-4b14-ae34-b4209aa6b245', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Chocolate', 'Menú', 1.35),
('ae074a80-4a27-43c1-b3d7-a4cff783c366', '587d0567-fed7-40a2-8bdb-926492f47e97', 'Empanada de verde', 'Empanadas de verde rellenas de queso y pollo.', 0.50),
('ae800024-aad2-4497-84e4-a898d8de98b3', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Gardfield', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, llavero, 12 cm. ', 10.00),
('aeeec329-cba8-41a2-abc9-c2d0ffc9252f', 'b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Serum de Niacinamida', 'Hidrata tu piel aumentando la producción de colágeno reduciendo los signos de envejecimiento.', 12.00),
('af215b75-e11f-4f2b-b014-40e796450830', 'd5c9208c-c0e4-4f35-ba70-b0c3e7c91b25', 'Cuidado facial', 'Jabón de maracuyá, jabón de rosas, jabón de avena, jabón de almendras, jabón de Aloe vera o jabón de lavanda.', 3.50),
('b026f407-6f12-412f-ae4a-95bdd4b53349', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Café taza', 'Menú', 0.85),
('b1bf7b0d-21db-42d5-a74e-9b287fc8be2d', '2246bbb9-dee0-4f45-96f3-3c06672dc664', 'Cocadas', 'Son unos dulces tradicionales hechos a base de coco rallado, azúcar y a veces clara de huevo', 0.50),
('b2356f4d-4351-42e9-a187-7cfac49b0c16', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Enrollados de salchicha', 'Exquisitos  rollitos de hojaldre, rellenos con salchicha. ', 0.40),
('b2602aa0-a066-4f4a-8af5-fcc1dc0c3b90', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes para dama', 'Accesorios, Belleza', 25.00),
('b315bf3a-ca3e-4ef5-a134-92596aacba2f', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Sally', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes, mide 38cm Además la encontrarás en su cajita de regalo. Hecho de nailon.', 18.00),
('b41fcd12-3b70-4d9b-9b62-8713cd6eb41a', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Muñeca Mía', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 40 cm.', 35.00),
('b442a0ca-907e-49d2-97c6-04c1aba7a202', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aros ', 'Aros tejidos', 20.00),
('b4701372-e3f9-4e7d-9a50-e68942a81bd0', 'de96e8a8-defe-4036-ae01-c190cbe38711', 'Nivelaciones permanentes mensuales', 'Nivelaciones permanentes', 8.00),
('b5277784-adc9-44e1-b9e3-3c32be019fb3', 'e2faa050-dbd8-4e37-9858-937f7962c2f7', 'MUÑECO CON PATINETA AMIGURUMI', 'Hecho con Lana Trae un gorro y patineta adicional', 45.00),
('b71da293-6b01-482c-96ce-5999dced6070', '587d0567-fed7-40a2-8bdb-926492f47e97', 'Emborrajados', 'Emborrajados de maduro con mayonesa', 0.50),
('b7dd781a-fc58-4c4a-9828-df6e0177b4cb', 'bfb1945b-3dd7-4ebf-95be-360958e81a26', 'Magdalenas', 'Cupcakes x 12 Unidades', 22.00),
('b839fda6-08a5-4288-91f0-5c20b859aa52', '67fbb9a2-0202-4426-a6ed-284959c53dd9', 'Accesorios', 'Accesorios desde $3, diferentes colores y diseños.', 3.00),
('b8c421c8-11a1-49fe-bde1-e5b05fe87f8b', 'ac7f274c-eefe-4184-b877-1d31f1fa3a08', 'Café molido para pasar de 500g', 'Café de pasar  cuidadosamente seleccionado, rico en aroma y en sabor.', 7.00),
('b9f76e2a-6365-4851-bbb9-ad7bdb63b6ac', '3cdd91ba-968b-4824-b038-38d7aa391172', 'CLORO USO DOMÉSTICO', 'Cloro con baja impureza, por lo cual se diluye completamente en el agua, no deja residuos.', 4.50),
('ba5053dc-f8cf-4884-84c8-21de1dc5268d', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Submarino', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 25cm.', 18.00),
('bae0f107-d7c1-4ee4-99d9-9bb6536c1ba5', 'b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Agua Micelar de Rosas', 'Agua limpiadora para cutis, ojos y labios para todo tipo de piel Peso: 100 ml', 5.00),
('bae4c6e4-bc34-424a-b2e5-967e5241727e', 'b9e3c537-955e-4462-b6c2-5f9ca1b07614', 'Espejos decorativos con luz LED', 'Las luces LED ofrecen una iluminación homogénea que no dibuja sombras y que facilitará nuestro afeitado o el maquillaje.', 45.00),
('bb75d41a-7bbb-4c9e-bcff-84298911cf79', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches de frutos rojos', 'BANDEJAS: MEDIANAS. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 15.00),
('bb7cb21a-def4-4597-be07-94a1eaef9c24', '5fca62c0-24ad-4f1d-be36-6f706127715c', 'Eventos Infantiles-Paquete Pochi Básico', 'Servicio de animaciones para fiestas infantiles que incluye: -2 horas de animación infantil -Caritas pintadas -Personaje básico, juego, concursos para niños y adultos. -Cantar el cumpleaños feliz y soplar la velita -Repartir la piñata -Mini Hora loca infan', 55.00),
('bc6d8880-aa20-46a2-873d-18ed71d1f697', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Vino hervido', 'Menú', 2.75),
('bc85e6f7-1f65-416c-a762-35b0302ffec7', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches de chocolate', 'BANDEJAS: FAMILIARES. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 25.00),
('bcc3083e-e200-4f74-9013-0e3a97e3abe6', 'a01b7696-fd61-4e72-acbb-ee5099c755d8', 'Pan para Hamburguesas', 'Alimentación', 1.75),
('be095aeb-3862-41c5-bde4-fd75e3942afd', '30247608-92c3-4f1b-b645-83257c5c398f', 'Brasileras', 'Ropa interior femenina tipo Brasileras', 4.50),
('bfad94a5-c8dd-4e96-b07c-c71fa63c3ba4', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Pan de yuca', 'Alimentación, Comida Rápida', 0.30),
('c0db4033-d270-4fc6-bb4f-8a71f23ab073', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Caja de 10 minidonas', 'DONAS: CAJA DE 10 MINI DONAS', 5.00),
('c3a275f8-a222-4297-8d1e-4b1f254654d8', 'e8198f45-f42f-4659-9934-945262f73020', 'Empanadas', 'Empanadas con relleno de carne y pollo.', 1.00),
('c41d887b-7fda-4c0c-8cb6-96142e8c6e51', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Té', 'Alimentación, Comida Rápida', 0.75),
('c4b221c2-3d49-4624-ac18-a477f3a85771', 'e78e761e-c378-497a-805a-31ce8bedccdd', 'Coctelera', 'Coctelera con diseño elegante, para decoración de charoles o mesas.', 2.50),
('c4f9041e-3189-4ed8-8f27-8202ccc44ae7', 'f4d9ee43-a765-4b43-aacb-81a381f0ab26', 'Yogurt tipo Griego Natural – ATLAS de 730mL', '? No podrás resistirte a su suavidad y textura cremosa. Prueba el auténtico yogurt griego.', 7.00),
('c56b6bd6-ed57-45b6-8b95-2e5fbeead185', 'de96e8a8-defe-4036-ae01-c190cbe38711', 'Clases personalizada', 'El paquete de $72 consiste en 10 horas de clases Personalizadas en las materias (Matemáticas, Física o Química) en las modalidades Online o Presencial.', 72.00),
('c7ae09e8-bf87-423a-a842-a4b34864d7fc', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Jugo fruta natural', 'Menú', 1.25),
('c854849b-8ac0-4a59-ac90-4b31344d5d6d', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Papipollo', 'Menú', 2.00),
('c86daee9-a75f-4cbd-a396-bceba9afa65e', '3cdd91ba-968b-4824-b038-38d7aa391172', 'DESENGRASANTE MULTIUSOS', 'Desengrasante multiusos orgánico, ideal para retirar grasas de estufas, paredes, vidrios, además se puede utilizar en lavamanos, duchas e inodoros. Estado líquido.', 11.00),
('c89df5e2-e7fa-4c6d-ae3d-434a512b3d5a', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Paleta helado artesanal', 'Alimentación, Comida Rápida', 0.45),
('ca98e561-d032-464c-94dc-fde884b9418f', 'bfb1945b-3dd7-4ebf-95be-360958e81a26', 'Pastel de queso', 'Chessecake la porcion al precio marcado.', 2.50),
('caa948da-988a-4c20-a25b-a971e2a5345d', 'ac7f274c-eefe-4184-b877-1d31f1fa3a08', 'Barra de chocolate amargo de 90g ', 'Exquisito chocolate dulce o amargo con granos de café cuidadosamente seleccionados, rico en aroma y en sabor. ', 2.00);
INSERT INTO `product` (`id`, `id_entrepreneur`, `name`, `description`, `price`) VALUES
('cc340b49-bd44-4f50-846c-8a8d5770318c', '5bebf533-44ff-4f55-8925-c1cddcd9f9df', 'Elaboración de proyectos (productivos, sociales)', 'Asesoría en trámites tributarios y permisos de funcionamiento. Control y organización administrativa, puesta en marcha y seguimiento de los proyectos', 50.00),
('cda977c3-836f-4f58-931a-48f84c82e704', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Deditos de queso', 'Deliciosos deditos de queso, con masa suave de hojaldre.', 0.40),
('cf34a77c-ed46-48f8-994a-0e5229ee239f', 'a1435cea-419a-4de7-8193-27a1ead9bc09', 'Peluquería Canina Razas Medianas', 'Peluquería Canina Razas Medianas con la opción de servicio a domicilio por $5 adicionales o profilaxis dental por $5 adicionales', 15.00),
('cf95a0c1-6d49-44a3-935a-fb68ca4613d3', 'f88d2ec9-642e-401f-a54d-670c554f1038', 'Cartucheras', 'Nuestras cartucheras están hechas con telas resistentes. En el que puedes guardar lápices, cremas, dinero, entre muchas cosas más. Hay distintos tipos de cartucheras dependiendo del uso que se le asigne, puede ser para la escuela, la Universidad o el traba', 3.00),
('cf9f1f3b-8f7e-4fa9-8143-92bd07c8823b', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Yogur 350ml', 'Menú', 1.00),
('cfe2fba9-b0d6-4fd5-bc72-bf0129706f4c', '5fca62c0-24ad-4f1d-be36-6f706127715c', 'Eventos Infantiles-Paquete Pochi Básico', 'Servicio de animaciones para fiestas infantiles que incluye: -2 horas de animación infantil -Caritas pintadas -Personaje básico, juego, concursos para niños y adultos. -Cantar el cumpleaños feliz y soplar la velita -Repartir la piñata -Mini Hora loca infan', 45.00),
('d0113da1-4236-455b-b658-4a8b6beaea81', '1162a80a-599c-4beb-b61e-8e19e75644b1', 'Lavado de prendas de vestir en agua y lavado en seco de prendas de vestir', 'Lavado, secado y perfumado de ropa al peso USD.0, 75 cada libra Lavado, secado, perfumado y planchado de camisas USD. 2,0 por prenda Lavado, secado y perfumado de edredones 1 a 2 plazas USD. 4,5 por prenda Lavado en seco de pantalón USD. 3,0 por prenda Lav', 0.75),
('d088f067-189c-40e9-a3d6-cc0f544dc884', 'd5c9208c-c0e4-4f35-ba70-b0c3e7c91b25', 'Cuidado facial', 'Crema de Colágeno', 5.00),
('d126022e-654c-4e82-9707-ce87cb402520', '5fca62c0-24ad-4f1d-be36-6f706127715c', 'Clases vía zoom', 'Servicio en línea para enseñar Lectoescritura', 8.00),
('d1a69245-9198-4081-b3f9-eaf7b5590b06', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Alitas BBQ', 'Alimentación, Comida Rápida', 4.25),
('d1ba1713-86c9-4614-94e0-826c94d17fc1', '02a35175-236f-4a56-b4f9-58588a31f435', 'Reparación y Mantenimiento de impresoras', 'Se realiza Reset de Almohadillas y Reemplazo de cabezal.', 20.00),
('d2c6ac47-b0eb-4a21-aa08-c986c2ffe70e', '131d445c-b120-4c4c-b4ff-e57b2e4113d6', 'Hamburguesas', 'Hamburguesas simples: $2 Hamburguesas pollo: $2.50 Hamburguesa mixta: $3 Hamburguesa completa: $3.50', 2.00),
('d4274f5e-42a1-42d3-8cb5-b7f8c40e00dc', 'b8239f41-bb40-46ea-84ba-5d9695ac4630', 'Kefir de leche', '  Kefir de leche  Yogurth  Peso: 300ml', 3.50),
('d4abd19c-d702-493a-b2e8-92318e13dc13', 'b8d3814a-59d7-435e-8f3d-8fddf3753a03', 'Tónico Purificante', 'Recomendable para todo tipo de piel, contiene colágeno. Peso: 100 ml', 5.00),
('d5a87986-51c0-4be0-bffb-54e038b07b43', 'ed322c8f-52d6-425f-9285-9359d8598a60', 'Shampoo Anticaída', 'Tratamiento capilar de shampoo en barra  Peso: 80 gramos', 10.00),
('d8a520b0-a5cf-4652-b8f8-688858e9e153', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Cama de plaza y media Minnie Rosa Disney', 'Modernos juegos de dormitorio para niñas.', 220.00),
('d8acafc2-d487-42e9-af6e-9c4816f61458', 'f331f3f7-8814-4d9b-bb5f-d07cb5117b47', 'Torre de donas', 'Torre de donas construida con tres donas de diferentes tamaños, la más grande mide 20 cm, la mediana 15cm y la más pequeña 10 cm, se realiza personalización de nombre en fondant, viene con relleno y topper personalizado.', 25.00),
('d99f6031-fd42-43f2-9c25-761e9dd6fa7c', 'f4d9ee43-a765-4b43-aacb-81a381f0ab26', 'Nachos proteínicos con Grillo – Crick Superfoods 50gr.', 'Snack proteínico a base de harina de grillos. Sin Gluten y sin azúcar.', 1.77),
('de2121e9-342f-479c-96ac-d1b72ad3d829', '446871cd-91af-45c6-af3e-92a8c3282c0d', 'IDILIO ', ' Fragancia de hombres y mujeres IDILIO para hombres y mujeres que marcan la diferencia y atraen lo que desean ', 30.00),
('de8f5e48-d517-4683-bece-3271c13af514', '07342143-82aa-4708-b877-180d27961de3', 'Mojaditos Napolitanos', 'Contiene tres sabores de bizcocho: vainilla fresa y chocolate, rellena de crema pastelera de sabores, baño de la salsa de tres leches clásica y cobertura de tres sabores. (delivery incluido para el sector del sur de quito)', 28.00),
('e028bed4-6f50-4844-a2d7-3f79f6d9fe7f', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Panda Reina Saly', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 25 cm.', 20.00),
('e14846c6-6a23-44a3-bcd4-cc599556b0e6', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Humita con café', 'Alimentación, Comida Rápida', 1.25),
('e16f6fc3-4807-45a5-a736-ac0432e5e16e', '30247608-92c3-4f1b-b645-83257c5c398f', 'Conjunto de encaje', 'Sexy Ropa Interior Femenina', 12.00),
('e2f8adca-a7a6-42bb-a355-b6d87ec651b4', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niño-Camas de tractor', 'Crea un ambiente soñado para tus hijos!', 280.00),
('e40cfde4-047a-45d7-a55e-21a25a468f43', '3cdd91ba-968b-4824-b038-38d7aa391172', 'JABÓN EN BARRA DE GLICERINA', 'La glicerina hidrata, suaviza y calma la piel en casos de piel seca, tirantez y picor. Además reduce pequeñas arrugas.', 3.50),
('e446c32b-7321-421c-b8e2-600960e9af12', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Adornos y regalos personalizados en chocolate ', 'Deliciosos bombones, para ocasiones especiales por pedido. El relleno del delicioso chocolate: puede ser de almendras, coco, pistachos, nuez etc.', 9.50),
('e4abd78e-7d5d-429c-9876-a3a844e28d66', '30247608-92c3-4f1b-b645-83257c5c398f', 'Bóxer de algodón', 'Ropa interior masculina hecha de algodón.', 7.00),
('e51736fe-fe7f-4276-b419-2352dfbc442d', '3cdd91ba-968b-4824-b038-38d7aa391172', 'SHAMPOO LÍQUIDO ORGÁNICO', 'Shampoo natural y vegano. Contenido neto: 500ml.', 6.50),
('e567f59d-e124-4f36-ae4e-bd193aa6e0d9', '91b2fae6-8e43-4394-9fc8-11e732924872', 'Casitas para perros', 'Casitas personalizables con amplia variedad, Mediana', 95.00),
('e691721f-5ac9-4506-a0c6-b4950057e4e5', 'd826ff6d-9d64-4cf6-90df-628ffcc2617d', 'Fajas', 'Fajas cinturilla de reloj  Talla S-M-L', 18.00),
('e76b01da-4dcf-4419-ab23-e1811b9ba603', 'e9e916b0-b7e8-4411-8981-558dc3a049fa', 'Vincha y zapatos de bebé', 'Tejidos a mano con hermoso diseño de flores.', 8.00),
('e7705cad-c613-424d-87ff-2a0f645a68d4', '5b5a0ab0-a5da-44c4-95e2-f04ea5a40c3c', 'Cuellos', 'Cuellos de distintos diseños muy calentitos. Adultos: 30 cm Niños: 25 cm', 10.00),
('e86185b3-5e60-4c4f-98f0-0198b4dd2f91', 'ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Laptod', 'Laptod resistente a caidas', 700.00),
('e8fa7984-5b63-4613-9c04-c6d6a9f3f013', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Sirena de mar', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 30 cm.', 18.00),
('e92525c5-cb12-45fd-8bfd-f6b9fb5a39dd', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', 'Paleta helado artesanal', 'Menú', 0.45),
('e999f75b-3121-4c4f-b592-cabff4453109', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Porción de papas', 'Alimentación, Comida Rápida', 1.00),
('ec1224e9-b6d7-4006-b1c5-01475fe4c1dd', '30247608-92c3-4f1b-b645-83257c5c398f', 'Interior de algodón', 'Ropa interior femenina de algodón en distintas tallas y colores', 5.00),
('ec74e6b4-bcba-4fdd-8c16-be45b456af53', 'b9e3c537-955e-4462-b6c2-5f9ca1b07614', 'Puerta pará baños en vidrio templado', 'vidrio templado de 10mm o 8mm transparente', 89.00),
('ed63e782-d58f-481e-8b26-00467642c678', '07342143-82aa-4708-b877-180d27961de3', 'Pastel Selva Negra', 'Contiene pastel de chocolate con relleno de crema chantillí, un almíbar especial de cerezas y licor de cerezas.', 22.00),
('ee4821f2-a853-4012-a9dd-264e67956a93', '37b2efa9-bee7-40eb-91f3-be24982f99b7', 'Shampoo Matizante 500ml', 'Shampoo hidratante, rejuvenecedor de cabello. Presentación: 500ml', 5.00),
('eee34820-1551-4a18-b97e-9bf7e5dc4ebb', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes redondos tejidos', 'Aretes redondos tejidos con broche de hoja', 15.00),
('f0beb0eb-9264-41c6-9c28-cf1b211a8de9', '741c6b7c-06ce-4fcf-b46b-f40593126cb8', 'Álbum Batman scrapbooking', 'Álbum de fotos de batman', 12.00),
('f0c12ba7-b0aa-4570-80d9-5b481a54258b', 'ab17d1fd-3041-40ff-93a7-0f72e18259c8', ' Mini Alfajores', 'Deliciosos alfajores rellenos con manjar de leche ', 0.40),
('f1670d48-0547-4e70-b168-82a0efdaf08c', 'ac7f274c-eefe-4184-b877-1d31f1fa3a08', 'Café molido para pasar de 250g ', 'Café de pasar  cuidadosamente seleccionado, rico en aroma y en sabor.', 4.00),
('f18a442f-23bc-4a85-9e0e-9ed18924731b', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Chinos', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 10 cm. ', 8.00),
('f3b0f11f-bc17-4b8e-a57a-8e06eed76ef8', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Limonada CVIVE+', 'Alimentación, Comida Rápida', 0.90),
('f4727738-e1ad-4b62-89dc-a0cdf80c38bc', '5bebf533-44ff-4f55-8925-c1cddcd9f9df', 'Elaboración de matrices de costos para emprendedores', 'Cálculos de forma rápida y automática de los costos que el emprendedor desee saber acerca de su producto/servicio.', 20.00),
('f6fa2be2-3dab-485d-9c6b-fe3332b67764', 'd4b67c4b-8124-4a21-8f02-f6da4f5fcbf7', 'Confección de prendas íntimas', 'Bragas', 10.00),
('f82dcc59-2f72-4e1b-8dd3-9495c6e8411c', '3cdd91ba-968b-4824-b038-38d7aa391172', 'DESINFECTANTE', 'Elimina bacterias , hongos, esporas, virus.  Contenido neto: 4000cc.', 6.00),
('f893c3c9-0e82-412d-8b24-c66288b59a39', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Cama de Casa infantil', 'Modernos juegos de dormitorio para niñas.', 200.00),
('fa10a38d-a74b-4394-8db8-5a22feef06f3', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches clásico', 'BANDEJAS: PEQUEÑAS. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 6.00),
('faf83a37-b701-4ac4-a0d1-57624201f7a1', '25bdd60f-3457-4ea2-aa17-ef2fd89cfe80', 'Muñecos Tejidos-Osito Abu', 'Muñeco tejido a mano con colores brillantes,  técnica en crochet, materiales Naylon, rellenos de plumón y colores firmes. Además la encontrarás en su cajita de regalo. Hecho de nailon, 30 cm.', 10.00),
('fb0050e7-d42f-4067-8a38-816589647251', '07342143-82aa-4708-b877-180d27961de3', 'Pastel tres leches de frutos rojos', 'BANDEJAS: FAMILIARES. Tiene una base de bizcocho liviano, salsa de tres leches y una cobertura de merengue italiano.', 25.00),
('fbac2011-4db4-422a-a0a5-34591b2cdb2a', '3cdd91ba-968b-4824-b038-38d7aa391172', 'SUAVIZANTE PARA ROPA', 'Facilita el planchado, hace los colores más vivos y perfuma la ropa por más tiempo.  Contenido neto: 4000cc.', 9.00),
('fc0baabb-2b62-4d6c-9d63-f01299601562', '3cdd91ba-968b-4824-b038-38d7aa391172', 'CLORO', 'Se usa para clorar y desinfectar agua de piscinas, potabilización, industrial, etc. Contenido neto: 4000cc.', 7.00),
('fd58285a-eeec-4342-ae6f-fd6c8c8ce03a', 'de96e8a8-defe-4036-ae01-c190cbe38711', 'Clases particulares', 'J ACADEMIA SOCIAL', 8.00),
('fdaff768-f65c-4e3c-8e88-aa1153cc88cd', 'e56bcf0c-b561-4218-971f-db40e7731284', 'Aretes con almbrismo con swarovski', 'Aretes con almbrismo con swarovski y piedra central en color turquesa, Moda', 20.00),
('fe10aa67-6ff8-4aa9-b575-7d040796da37', '3989ae5d-8612-402c-9478-107f9af4fe18', 'Juego de dormitorio para niñas-Cama de niña con dos veladores.', 'Las camas son el principal complemento que destacarán el estilo de tu dormitorio. Crea un ambiente soñado para tus hijos. Elije los mejores juegos de dormitorio hecho en madera con diseños únicos.', 300.00),
('fe9053dd-c22d-43b5-8c60-e1252bcbb117', '8c0ba245-800e-4227-8786-dd89bdcf4389', 'Caja de 10 donas personalizadas', '¡Personaliza tu propio sabor!', 6.00),
('feecc246-ce79-4161-88f7-bb0274416de9', '93ecdecb-ec12-4baf-ad84-754efa9ddfad', 'Hamburguesa', 'Alimentación, Comida Rápida', 3.00);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `product_display`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `product_display` (
`id` varchar(64)
,`id_entrepreneur` varchar(64)
,`name` varchar(128)
,`description` varchar(256)
,`price` decimal(16,2)
,`full_name` varchar(129)
,`nameStore` varchar(64)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `product_info`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `product_info` (
`id` varchar(64)
,`entrepreneur_full_name` varchar(130)
,`store_name` varchar(64)
,`name` varchar(128)
,`description` varchar(256)
,`price` decimal(16,2)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` varchar(64) NOT NULL,
  `userName` varchar(128) NOT NULL,
  `pass` varchar(128) NOT NULL,
  `full_name` varchar(128) NOT NULL,
  `role_user` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `userName`, `pass`, `full_name`, `role_user`) VALUES
('0320a7b6-860f-4493-918f-26754998340e', 'adminuser', '$2b$10$UhvS.sQlWc2kRTErcat..e6A2M28eo/hLUNS/dzgDUFlZtllmlebG', 'Erik Molina', 'user'),
('03dcbb4c-6517-4b11-8884-275d0af0fb0a', 'Erik Molina', '$2b$10$SMRbCKQAepaT3tTGNyUtOeFqB/VMxgl5AHvdA4a6FU2oW.39VIpku', 'Erik Molina', 'admin'),
('266dac87-f43e-44ea-ac72-0d6537ec3c57', 'Juan', '$2b$10$v3SywsKDbIu9pcq2QfcEkOPkXcRLSsbgklv/2uGKWvbTSPxxo2TaW', 'asdacsd', 'admin'),
('2a620528-39a4-4c50-81f5-85837de73517', 'admin3', '$2b$10$FKl6ZClj2Q8xqym.DC.OHeMaI0gUZJvnnfudKz3yC51dqPvFnP7aC', 'Andres Coronel', 'admin'),
('4232f04b-01a4-407c-a98a-3faad8ba94c8', 'Juana', '$2b$10$9WAJNrYmt1MQ/Ug5jLOd4OeSIZwtzeHv5jOowFlTNW3M6yZJ9H4LG', 'Juan Diego', 'user'),
('4ba9864d-75fd-4ee9-a8d2-c4b3bca6bd31', 'admin5', '$2b$10$mKtWGro/W/qZaYMRDAvfteJc.CRGKV6eqPfA4PIwAurLrwIi00Yb2', 'Andres Coronel', 'admin'),
('4c7a0c60-420b-4c96-aaf8-e95e7e2cbe1e', 'Juanadmin', '$2b$10$rNGvfx4B0vMNBNkXHDfhjunEFPbYoGc/lkBhX7LLeo2.c4e9kWwYi', 'Juan', 'user'),
('4cedf23b-7fd4-4e99-88e7-dfdd7c529818', 'Daniel M', '$2b$10$YpFCH8oq6dRP3alxLnAoc.Qp0aGqhREBIHYoJb71JQXSUmmwHdgWC', 'Erik Daniel Molina', 'admin'),
('50485797-babf-4339-80be-5d94916fee5f', 'test1231', '$2b$10$CKZAJ2w6yYeBx3qCaNe6GufoDeHEwBhq3sY74kimDnrtRoL9FdvOa', 'Erik Daniel', 'user'),
('57304dda-3d9e-4896-a76b-f7cf4301ebf3', 'test1', '$2b$10$eQMQqqAJeIlpxau0kdVujOx8rJCCocfOBZ2p.X5RGwoXy9fqCD.1u', 'Erik Daniel', 'user'),
('7eb11ff1-9d06-4abd-9fb3-728857c71005', 'admin2', '$2b$10$HcKXspuxWUguRG8WnPXw5uTs2wpb5w7OPrqUxtRAy7/oJ7YYn.3GO', 'Andres Coronel', 'admin'),
('81ba8dcb-76f0-45b3-ab64-9b4deedf5c0e', 'Adminerik', '$2b$10$j/UtQOthhhNL59iuY6iQnefCEBlXWsjL1wd9GcqGjgttDrUkj.NoW', 'ASASDAadzx', 'admin'),
('8a7d1895-2ccb-4d0b-a555-ca0121ae6d86', 'Erik002', '$2b$10$ilpanyb62QREBJKbFXDqoOmQCJk3zwOOFdwykOiY6De2s7ghhijPu', 'Erik Daniel Molina', 'admin'),
('b17be3bc-a1bf-4c2a-91af-62cc635a180c', 'admin4', '$2b$10$uygJSX1xd0BPG6pUj5EVB.q9tmvujkxEj55T4IBPfjbe2gIXj4tya', 'Andres Coronel', 'admin'),
('c309a30a-2286-44b1-934b-7610e32fa32a', 'erikdad', '$2b$10$DckS9Myb3Y9i9aFywLL.0OMNN1DcMedF6AUO0wMhPw0ZUYiDsH2AK', 'Erik Molina', 'admin'),
('d1e95932-5b3c-49cb-824d-1a98995ed3d8', 'Admin Erik', '$2b$10$B7O1JHcL8OqVAl.51JFYt.yge9tzPye02uel5ozfHGZ9W2GINtaI.', 'Erik Daniel Molina', 'admin'),
('dc4f838d-0826-47b9-87f5-31eb56f97989', 'Astro', '$2b$10$0PgEnbKldCViHZ9Z1/xiQeNYT4x4KUjQWLHPrnRURra.t0OOzAiI6', 'Erik Molina', 'admin'),
('de12e0d7-e18e-4027-a403-89ad3353cbb5', 'admin', '$2b$10$aUG3n2eeg.vrGjKuBpEo8e5LoOSY/P4jnmWv8Be4diRLpzR.5DmQi', 'Andrés Alejandro Coronel Rodrigues', 'admin'),
('f75790a5-d73c-4c2d-b928-44b27487cdb0', 'Erik001', '$2b$10$n3Hms6PABuZjZf8GqbR4ceTv6ux7zZsuPdTQAGSZT3UAAwG84IpyW', 'Erik Daniel Molina', 'admin');

-- --------------------------------------------------------

--
-- Estructura para la vista `content_mentorship_display`
--
DROP TABLE IF EXISTS `content_mentorship_display`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u863666022_657577855a205`@`localhost` SQL SECURITY DEFINER VIEW `content_mentorship_display`  AS SELECT `cm`.`id_content` AS `id_content`, `cm`.`id_mentorship` AS `id_mentorship`, `c`.`name` AS `content_name`, `c`.`description` AS `content_description` FROM (`content_mentorship` `cm` join `content` `c` on(`c`.`id` = `cm`.`id_content`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `entreprenuer_list`
--
DROP TABLE IF EXISTS `entreprenuer_list`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u863666022_657577855a205`@`localhost` SQL SECURITY DEFINER VIEW `entreprenuer_list`  AS SELECT `ee`.`last_names` AS `entrepreneur_last_name`, `ee`.`names` AS `entrepreneur_name`, `ee`.`phone` AS `entrepreneur_phone`, `ee`.`email` AS `entrepreneur_email`, concat(`mm`.`names`,' ',`mm`.`last_names`) AS `manager_in_charge`, `ee`.`city` AS `entrepreneur_city`, `ee`.`type` AS `entrepreneur_organization` FROM ((`mentorship` `m` join `manager` `mm` on(`m`.`id_manager` = `mm`.`id`)) join `entrepreneur` `ee` on(`m`.`id_entrepreneur` = `ee`.`id`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `mentorship_display`
--
DROP TABLE IF EXISTS `mentorship_display`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u863666022_657577855a205`@`localhost` SQL SECURITY DEFINER VIEW `mentorship_display`  AS SELECT `m`.`id` AS `id`, `m`.`id_manager` AS `id_manager`, `m`.`id_entrepreneur` AS `id_entrepreneur`, `m`.`title` AS `title`, `m`.`description` AS `description`, `m`.`date_mentorship` AS `date_mentorship`, `m2`.`names` AS `manager_names`, `m2`.`last_names` AS `manager_last_names`, `m2`.`email` AS `manager_email`, `e`.`names` AS `entrepreneur_names`, `e`.`last_names` AS `entrepreneur_last_names`, `e`.`nameStore` AS `nameStore`, `e`.`type` AS `entrepreneur_type` FROM ((`mentorship` `m` join `entrepreneur` `e` on(`e`.`id` = `m`.`id_entrepreneur`)) join `manager` `m2` on(`m2`.`id` = `m`.`id_manager`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `mentorship_info`
--
DROP TABLE IF EXISTS `mentorship_info`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u863666022_657577855a205`@`localhost` SQL SECURITY DEFINER VIEW `mentorship_info`  AS SELECT `m`.`id` AS `id`, concat(`mm`.`last_names`,', ',`mm`.`names`) AS `manager_name`, concat(`ee`.`last_names`,', ',`ee`.`names`) AS `entrepreneur_name`, `m`.`title` AS `title`, `m`.`description` AS `description`, `m`.`date_mentorship` AS `date_mentorship` FROM ((`mentorship` `m` join `manager` `mm` on(`m`.`id_manager` = `mm`.`id`)) join `entrepreneur` `ee` on(`m`.`id_entrepreneur` = `ee`.`id`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `product_display`
--
DROP TABLE IF EXISTS `product_display`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u863666022_657577855a205`@`localhost` SQL SECURITY DEFINER VIEW `product_display`  AS SELECT `product`.`id` AS `id`, `product`.`id_entrepreneur` AS `id_entrepreneur`, `product`.`name` AS `name`, `product`.`description` AS `description`, `product`.`price` AS `price`, concat(`e`.`names`,concat(' ',`e`.`last_names`)) AS `full_name`, `e`.`nameStore` AS `nameStore` FROM (`product` join `entrepreneur` `e` on(`product`.`id_entrepreneur` = `e`.`id`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `product_info`
--
DROP TABLE IF EXISTS `product_info`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u863666022_657577855a205`@`localhost` SQL SECURITY DEFINER VIEW `product_info`  AS SELECT `p`.`id` AS `id`, concat(`e`.`last_names`,', ',`e`.`names`) AS `entrepreneur_full_name`, `e`.`nameStore` AS `store_name`, `p`.`name` AS `name`, `p`.`description` AS `description`, `p`.`price` AS `price` FROM (`product` `p` join `entrepreneur` `e` on(`p`.`id_entrepreneur` = `e`.`id`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `content_mentorship`
--
ALTER TABLE `content_mentorship`
  ADD PRIMARY KEY (`id_content`,`id_mentorship`),
  ADD KEY `content_mentorship_ibfk_2` (`id_mentorship`);

--
-- Indices de la tabla `entrepreneur`
--
ALTER TABLE `entrepreneur`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mentorship`
--
ALTER TABLE `mentorship`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mentorship_ibfk_1` (`id_entrepreneur`),
  ADD KEY `mentorship_ibfk_2` (`id_manager`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_entrepreneur` (`id_entrepreneur`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
