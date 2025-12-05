# TODOs

## Multiples imagenes 

En index.html soportar multiples sizes de imagenes y pngs que soportan backgrounds transparentes.

```html 
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />    
```

En site.webmanifest: 

```json
"icons": [
    {
        "src": "/favicon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
    },
    {
        "src": "/favicon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
    }
]
```