# TodoList
A TodoList using Node.js, Express.js, MongoDB, jQuery and Bootstrap styling.

To get started with this app, you will need Node.js and NPM. After doing a git clone or downloading the repo,type the following npm commands in your terminal to install the dependencies:

<code>
npm install --save
</code>

If you do not already have Bower installed, you can install with:

<code> npm install -g bower </code>
Bower is used to download Bootstrap CSS and jQuery.

The NPM dependencies included in <code>package.json</code> are:
<ul>
<li>Express 4.15</li>
<li>Body-Parser</li>
<li>ejs</li>
<li>mongodb</li>
</ul>
<p>And if you hate restarting the server after every change, like I do, then you can also use nodemon:</p>
<code>npm install -g nodemon && npm install --save-dev nodemon</code>
Nodemon will restart your express server each time you save changes, as well as restart after you've made changes to from a console error log.

You may notice I set the port that the node server listens on to <em>4040</em>. This is just an attempt to be a little different from the crowd, as well as so I can host other apps on my server. 

Any additional styling or features you are welcome to add on your own.

Enjoy!!!
