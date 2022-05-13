

const myEditor = cloudinary.mediaEditor();
myEditor.update({
  mode: 'inline',
  publicIds: [
    'sample'
  ],
  cloudName: 'fotofoto',
  image: {
    steps: [
      'resizeAndCrop',
      'textOverlays',
      'export'
    ],
    resizeAndCrop: {
      toggleAspectRatio: true,
      aspectRatioLock: true,
      flip: true,
      rotate: true,
      presets: [
        'original',
        'square',
        'landscape-16:9',
        'landscape-4:3',
        'portrait-3:4',
        'portrait-9:16'
      ]
    },
    imageOverlay: {
      overlays: [
        {
          publicId: 'mew/Travel/overlays/01',
          label: '01',
          transformation: [],
          placementOptions: [
            'top_left',
            'top_right',
            'bottom_left',
            'bottom_right',
            'middle'
          ]
        },
        {
          publicId: 'mew/Travel/overlays/02',
          label: '02',
          transformation: [],
          placementOptions: [
            'top_left',
            'top_right',
            'bottom_left',
            'bottom_right',
            'middle'
          ]
        },
        {
          publicId: 'mew/Travel/overlays/03',
          label: '03',
          transformation: [],
          placementOptions: [
            'top_left',
            'top_right',
            'bottom_left',
            'bottom_right',
            'middle'
          ]
        }
      ]
    },
    textOverlays: {
      presets: [
        'heading',
        'subtitle',
        'body',
        'caption'
      ]
    },
    export: {
      quality: [
        'auto',
        'best',
        'good',
        'eco',
        'low'
      ],
      formats: [
        'jpg',
        'png',
        'webp'
      ],
      download: true,
      share: true
    }
  },
  theme: {
    logo: 'https://res.cloudinary.com/product-demos/image/upload//mew/Travel/logos/04'
  }
});
myEditor.show();
myEditor.on('export', function(data) {
  console.log(data);
});
myEditor.show();
myEditor.on('export', function(data) {
  console.log(data);
});
cloudinary.mediaEditor();