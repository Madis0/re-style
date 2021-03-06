(function(global) { 'use strict'; define(({ // This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
	'node_modules/web-ext-utils/browser/version': { current: currentBrowser, version: browserVersion, },
	'node_modules/web-ext-utils/browser/': { manifest, },
	'node_modules/web-ext-utils/options/editor/about': about,
	'fetch!package.json:json': packageJson,
	'fetch!node_modules/web-ext-utils/options/editor/about.css:css': css,
}) => ({ document, }) => {

document.body.appendChild(document.createElement('style')).textContent = css;
document.body.style.margin = 'auto'; document.body.style.padding = '10px 30px';

about({
	manifest, package: packageJson,
	host: Object.assign(document.body.appendChild(document.createElement('div')), { id: 'about', }),
	browser: { name: currentBrowser.replace(/^./, c => c.toUpperCase()), version: browserVersion, },
});

}); })(this);
