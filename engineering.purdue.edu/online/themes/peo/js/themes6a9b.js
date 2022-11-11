jQuery(document).ready(function($) {

  // Live video player loader
  if ($('#liveplayer').length){
    jwplayer.key="4ViEvBalxdAy1JK7l8wYUgNYN7SyikjdN1jX8g==";
    jwplayer("liveplayer").setup({
        playlist: [{
            sources: [{
                file: "http://128.46.54.21:1935/Live/MF1live/playlist.m3u8"
            },{ 
                file: "rtmp://128.46.54.21:1935/Live/MF1live"
            }]
        }],
        height: 500,
        width: "100%",
        androidhls: true
    });
  }
});

