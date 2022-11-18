#!/bin/bash
npm install;
google-chrome index.html;
lcp --proxyUrl http://localhost:8080 &
npm start