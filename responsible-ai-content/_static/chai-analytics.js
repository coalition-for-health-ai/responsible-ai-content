/*
 * Cookie consent + Microsoft Clarity for rai-content.chai.org (ENG17).
 *
 * Nothing is loaded or sent before the visitor clicks Accept: no Clarity tag,
 * no cookies, no events. Decline stores the choice and nothing else.
 *
 * Events (Clarity only, after Accept):
 *   rai_cookie_consent   rai_choice
 *   rai_contribute_click rai_page, rai_target
 *   rai_download         rai_page, rai_file
 * Page views and heatmaps come from Clarity itself.
 *
 * Privacy: tags are page paths, file names and enums only. Query strings,
 * fragments and anything that looks like free text are never sent.
 *
 * Configured from conf.py through data attributes on this script tag:
 *   data-clarity-project  Clarity project id (empty = analytics off)
 *   data-clarity-hosts    comma-separated hostnames Clarity may load on
 *   data-privacy-url      Privacy Policy link in the banner
 */
(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;

  var STORAGE_KEY = 'chai-rai-cookie-consent';
  var TAG_MAX_LENGTH = 80;
  var UNSAFE_TAG = /[@?=&#<>\r\n\t]|:\/\//;
  var REPO_PATH = '/coalition-for-health-ai/responsible-ai-content/';
  var DOWNLOAD_EXTENSIONS = /\.(pdf|ipynb|csv|xlsx?|docx?|pptx?|zip|json)$/i;

  var projectId = (script.getAttribute('data-clarity-project') || '').trim();
  var privacyUrl = script.getAttribute('data-privacy-url') || '';
  var allowedHosts = (script.getAttribute('data-clarity-hosts') || '')
    .split(',')
    .map(function (host) { return host.trim().toLowerCase(); })
    .filter(Boolean);

  var analyticsAvailable =
    Boolean(projectId) &&
    allowedHosts.indexOf(window.location.hostname.toLowerCase()) !== -1;

  // -- Consent storage -------------------------------------------------------

  function getConsent() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === 'accepted' || value === 'declined' ? value : null;
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* storage disabled: the banner shows again next visit */
    }
  }

  // -- Clarity ---------------------------------------------------------------

  var clarityLoaded = false;

  function loadClarity() {
    if (clarityLoaded || !analyticsAvailable) return;
    clarityLoaded = true;
    // Clarity's own snippet: queue calls until the tag has loaded.
    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(projectId);
    document.head.appendChild(tag);
    window.clarity('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: 'granted'
    });
  }

  function trackingEnabled() {
    return analyticsAvailable && clarityLoaded && getConsent() === 'accepted';
  }

  function isSafeTagValue(value) {
    if (typeof value !== 'string') return false;
    var trimmed = value.trim();
    return Boolean(trimmed) && trimmed.length <= TAG_MAX_LENGTH && !UNSAFE_TAG.test(trimmed);
  }

  function sendEvent(name, tags) {
    if (!trackingEnabled()) return;
    try {
      Object.keys(tags).forEach(function (key) {
        if (isSafeTagValue(tags[key])) window.clarity('set', 'rai_' + key, tags[key].trim());
      });
      window.clarity('event', name);
    } catch (e) {
      /* analytics must never break the page */
    }
  }

  // -- Tag values ------------------------------------------------------------

  /** Keep letters, digits and `/ . _ -`; everything else becomes `-`. */
  function slug(value) {
    return value
      .replace(/[^A-Za-z0-9/._-]+/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, TAG_MAX_LENGTH);
  }

  /** `/en/latest/mental-health/index.html` -> `mental-health/index`. */
  function pagePath(pathname) {
    var path = pathname.replace(/^\/[a-z]{2}(-[a-z]{2})?\/[^/]+\//i, '/');
    path = path.replace(/\.html$/, '').replace(/^\/+|\/+$/g, '');
    return slug(path || 'index');
  }

  /** Last path segment, decoded and lowercased, without query or fragment. */
  function fileName(url) {
    var last = url.pathname.split('/').pop() || '';
    try {
      last = decodeURIComponent(last);
    } catch (e) {
      /* keep the raw segment */
    }
    return slug(last.toLowerCase());
  }

  function contributeTarget(link, url) {
    var host = url.hostname.toLowerCase();
    if (host === 'forms.office.com') return 'feedback_form';
    if (host === 'github.com' && url.pathname.indexOf(REPO_PATH) === 0) {
      if (/\/issues\/new/.test(url.pathname)) return 'github_issue';
      if (/\/(blob|edit)\//.test(url.pathname)) return 'edit_on_github';
      return null;
    }
    if (host === window.location.hostname.toLowerCase() &&
        /\/community\/contributing\.html$/.test(url.pathname) &&
        url.pathname !== window.location.pathname) {
      return 'contributing_guide';
    }
    return null;
  }

  function isDownload(link, url) {
    if (link.classList.contains('download') || link.hasAttribute('download')) return true;
    return DOWNLOAD_EXTENSIONS.test(url.pathname) &&
      (url.hostname === window.location.hostname || url.hostname === 'assets.ctfassets.net');
  }

  function onLinkClick(event) {
    if (!trackingEnabled()) return;
    var link = event.target.closest ? event.target.closest('a[href]') : null;
    if (!link) return;
    var url;
    try {
      url = new URL(link.getAttribute('href'), window.location.href);
    } catch (e) {
      return;
    }
    var page = pagePath(window.location.pathname);
    if (isDownload(link, url)) {
      sendEvent('rai_download', { page: page, file: fileName(url) });
      return;
    }
    var target = contributeTarget(link, url);
    if (target) sendEvent('rai_contribute_click', { page: page, target: target });
  }

  // -- Banner ----------------------------------------------------------------

  var banner = null;

  function closeBanner() {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
    banner = null;
  }

  function accept() {
    setConsent('accepted');
    closeBanner();
    loadClarity();
    sendEvent('rai_cookie_consent', { choice: 'accepted' });
  }

  function decline() {
    var wasAccepted = getConsent() === 'accepted';
    setConsent('declined');
    closeBanner();
    if (wasAccepted && clarityLoaded) {
      // Withdrawing consent: Clarity stops tracking and erases its cookies.
      try {
        window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' });
      } catch (e) {
        /* tag not loaded */
      }
    }
  }

  function button(label, className, onClick) {
    var el = document.createElement('button');
    el.type = 'button';
    el.className = className;
    el.textContent = label;
    el.addEventListener('click', onClick);
    return el;
  }

  function showBanner() {
    if (banner) return;
    banner = document.createElement('div');
    banner.className = 'chai-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');

    var inner = document.createElement('div');
    inner.className = 'chai-cookie-banner__inner';

    var copy = document.createElement('p');
    copy.className = 'chai-cookie-banner__copy';
    copy.appendChild(document.createTextNode(
      'We use cookies and similar technologies to understand how this site is used and ' +
      'improve it. Nothing is tracked unless you accept.'
    ));
    if (privacyUrl) {
      copy.appendChild(document.createTextNode(' See our '));
      var privacy = document.createElement('a');
      privacy.href = privacyUrl;
      privacy.target = '_blank';
      privacy.rel = 'noopener noreferrer';
      privacy.textContent = 'Privacy Policy';
      copy.appendChild(privacy);
      copy.appendChild(document.createTextNode('.'));
    }

    var actions = document.createElement('div');
    actions.className = 'chai-cookie-banner__actions';
    actions.appendChild(button('Decline', 'chai-cookie-banner__button', decline));
    actions.appendChild(button(
      'Accept',
      'chai-cookie-banner__button chai-cookie-banner__button--primary',
      accept
    ));

    inner.appendChild(copy);
    inner.appendChild(actions);
    banner.appendChild(inner);
    document.body.appendChild(banner);
  }

  /** "Cookie preferences" in the footer, so a choice can be changed later. */
  function addPreferencesLink() {
    var footer = document.querySelector('footer');
    if (!footer) return;
    var p = document.createElement('p');
    p.className = 'chai-cookie-preferences';
    var link = button('Cookie preferences', 'chai-cookie-preferences__button', showBanner);
    p.appendChild(link);
    footer.appendChild(p);
  }

  function init() {
    if (!analyticsAvailable) return;
    document.addEventListener('click', onLinkClick, true);
    addPreferencesLink();
    var consent = getConsent();
    if (consent === 'accepted') loadClarity();
    else if (consent === null) showBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
