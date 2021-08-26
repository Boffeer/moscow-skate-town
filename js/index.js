var videoPreveiw = document.querySelector(".hero-video-media__preview");
var videoContainer = document.querySelector(".hero-video-media");
var videoButton = document.querySelector(".hero-video-media-play");

videoPreveiw.addEventListener("click", function () {
  var iframe = document.createElement("iframe");
  var videoSrc = this.getAttribute("data-video-src");

  videoContainer.classList.add("hero-video-media--loaded");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay; encrypted-media");
  iframe.setAttribute("src", videoSrc);
  iframe.classList.add("hero-video-media__youtube");
  videoContainer.append(iframe);
  this.remove();
  videoButton.remove();
});
