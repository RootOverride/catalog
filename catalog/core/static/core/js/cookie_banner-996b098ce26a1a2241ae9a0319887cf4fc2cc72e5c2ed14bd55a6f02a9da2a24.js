!function(e){function n(e,n,t){var o=document,i="script",a=o.getElementsByTagName(i)[0];a||(a=o.head);var r=o.createElement(i);r.async=t,r.id=e,r.src=n,r.charset="utf-8",a.parentNode.insertBefore(r,a)}function t(e){var n=["uk","us","fr","es","de","at","au","ae","be","br","ca","ch","cn","co","cz","dk","eg","eu","fi","gb","gr","hk","hr","hu","ie","in","jp","mx","nl","no","nz","pl","ro","ru","se"];return-1!==["co","com","info","web","info","gov","edu","biz","net","org"].indexOf(e)||-1!==n.indexOf(e)}function o(){var e=window.location.hostname.split(".");if(2===e.length)a=e[0];else if(2<e.length){var n=e[e.length-2];a=t(n)?e[e.length-3]:n}return a}window.evidon={},window.evidon.id=e,window.evidon.test=!1;var i="//c.evidon.com/",a=o(),r=i+"sitenotice/";n("evidon-notice",r+"evidon-sitenotice-tag.js",!1),n("evidon-location",i+"geo/country.js",!0),n("evidon-themes",r+e+"/snthemes.js",!0),a&&n("evidon-settings",r+e+"/"+a+"/settings.js",!0),window.evidon.priorConsentCallback=function(){Sentry.init({dsn:"https://e3f9948d92c84ba5a47fcc8bb47b96b4:1b8f35c967a24d9c82bbe2eaead9d9b4@sentry.io/1377054",environment:"production"}),Sentry.configureScope(function(e){e.setTag("source","frontend")}),function(e,n,t,o,i){e[o]=e[o]||[],e[o].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var a=n.getElementsByTagName(t)[0],r=n.createElement(t),c="dataLayer"!=o?"&l="+o:"";r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id="+i+c,a.parentNode.insertBefore(r,a)}(window,document,"script","dataLayer","GTM-W2X9W2W");var e=e||[];e.push(["init",{api_key:"6b05a0160d3124bb9b50b8f8397d8424d033531e"}]),e.push(["trackPageview"]),veroUserData!==undefined&&e.push(["user",veroUserData]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//d3qxef4rp70elm.cloudfront.net/m.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}()},window.evidon.closeCallback=function(){},window.evidon.consentWithdrawnCallback=function(){},window.evidon.consentDeclinedCallback=function(){}}(4478);