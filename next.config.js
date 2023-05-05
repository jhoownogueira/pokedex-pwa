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
})

module.exports = withPWA({
  // next.js config
})