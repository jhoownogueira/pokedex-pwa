const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/unpkg\.com\/phosphor-icons/, // Adicione o padrão de URL dos ícones Phosphor
      handler: 'CacheFirst',
      options: {
        cacheName: 'phosphor-icons',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
        },
      },
    },
    // Outras configurações de cache, se necessário
  ],
  ios: {
    'apple-mobile-web-app-title': 'Pokédex',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-touch-icon': [
      { size: '128x128', href: '/icons/128.png' },
      { size: '144x144', href: '/icons/144.png' },
      { size: '152x152', href: '/icons/152.png' },
      { size: '180x180', href: '/icons/180.png' }
    ],
    'apple-touch-icon-precomposed': '/icons/152.png',
  },
})

module.exports = withPWA({
  // next.js config
})