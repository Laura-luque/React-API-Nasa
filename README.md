# React-API-Nasa

Pequeño proyecto en React para mostrar la información devuelta por la API de la Nasa APOD (Astronomy Picture of the day) en dos páginas.

La API tenía varias limitaciones, como por ejemplo que solamente se pueden hacer un máximo de 50 peticiones al día, por lo que decidí usar los parámetros star_date y end_date, y así con una llamada obtener el rango de fechas que nos piden. También tened en cuenta que hay opcaciones que lo que recibimos no es una imagen, sino un vídeo por lo que hay que usar también el parámetro thumbs=true en la query para poder mostrar la imagen del vídeo. Yo en llugar de mostrar la imagen del video, he usado una librería de React llamada ReactPlayer para mostrar el video en lugar de la imagen.
