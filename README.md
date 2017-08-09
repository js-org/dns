[![JS.ORG Logo](http://logo.js.org/png/github_header.png)](http://js.org)

[![JS.ORG](https://img.shields.io/badge/js.org-dns-ffb400.svg?style=flat-square)](http://js.org)

[![International JavaScript Conference; October 23-27 2017, Munich](https://js.org/img/IJS_2017_Banner_970x90_41212_infinite.gif)](https://javascript-conference.com/?utm_source=jsnews&amp;utm_medium=banner&amp;utm_campaign=mediapartner)

**To get a short and sleek subdomain for your own GitHub Page follow these 4 Steps:**

### Step 1
If you haven't already, now it's time to log in to your GitHub account and set up your GitHub Page following the instructions [here](https://pages.github.com/). To get a head start you can simply use the generator with one of the provided themes and **add some reasonable content to your new page**.

### Step 2
Now determine your js.org subdomain: either choose your username or the name of your repo according to the existing GitHub Pages URL (for ```http://foo.github.io/bar```, either ```foo.js.org``` or ```bar.js.org``` would be possible). More details in the [wiki](https://github.com/js-org/dns/wiki).

### Step 3
Add a file named ```CNAME``` to your repo (in the ```gh-pages``` branch for project pages) with a single line matching the domain you have chosen (e.g. ```foo.js.org```). If you prefer a webinterface form, have a look at [GitHub Pages Help](https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/).

### Step 4
To finish the procedure, make a pull request in this GitHub repository that adds your subdomain to the [list](https://github.com/js-org/dns/blob/master/cnames_active.json) of existing JS.ORG domains. Your new URL should go live within 24 hours (keep an eye on your pull request in case of a naming conflict).

### CloudFlare
JS.ORG uses CloudFlare as its DNS. If enabled, CloudFlare proxies all requests to your subdomain to get SSL support (https://foo.js.org) and make use of browser caching with a TTL of 30 min. But you can opt out from this and make CloudFlare forward all requests directly to GitHub. Just add `"cf": false` to the domain record.

### File format
```
{
	"subdomain": {"cname": "foo.github.io", "cf": true}
}
```
