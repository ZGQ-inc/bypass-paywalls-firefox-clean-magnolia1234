window.localStorage.clear();
if (window.location.href.indexOf("bizjournals.com") !== -1) {
  const hiddenStory = document.getElementsByClassName(
    "js-pre-chunks__story-body"
  );
  if (hiddenStory && hiddenStory.length>0) {
    hiddenStory[0].style.display = "block";
  }

  const payWallMessage = document.getElementsByClassName(
    "chunk chunk--flex@lg chunk--paywall"
  );
  if (payWallMessage && payWallMessage.length>0 ) {
    payWallMessage[0].style.display = "none";
  }
} else if (window.location.href.indexOf("businessinsider.com") !== -1) {
  const paywall = document.getElementsByClassName(
    "tp-modal"
  );
  while (paywall.length > 0) {
    paywall[0].parentNode.removeChild(paywall[0]);
  }
} else if (location.hostname.endsWith('haaretz.co.il')) {
  const html = document.getElementsByTagName('html');
  if (html && html.length > 0) {
    html[0].style['overflow-y'] = 'auto';
  }
   const msg = document.getElementById('article-wrapper');
  if (msg) {
    msg.style['display'] = 'none';
  }
} else if (location.hostname.endsWith('rep.repubblica.it')) {
  if (location.href.includes("/pwa/")) {
    location.href = location.href.replace("/pwa/", "/ws/detail/");
  }

  if (location.href.includes("/ws/detail/")) {
    const paywall = document.getElementsByClassName('paywall');
    if (paywall && paywall.length > 0) {
      paywall[0].toggleAttribute('amp-access-hide');
    }
  }
}
