fis.match('*.{png,jpg,js,css}', {
  release: '/static/$0',
   useHash: true
});

fis.media('prod')
	.match('*.js', {
	  optimizer: fis.plugin('uglify-js')
	})
	.match('*.css', {
	  // fis-optimizer-clean-css 插件进行压缩，已内置
	  optimizer: fis.plugin('clean-css')
	})
	.match('*.png', {
	  // fis-optimizer-png-compressor 插件进行压缩，已内置
	  optimizer: fis.plugin('png-compressor')
	});