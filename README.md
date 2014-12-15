Page preloader
==============

This script preloading the page

### 1. Getting started
bower
```
bower install https://github.com/bumbella/page-preloader.git
```

### 2. Use

CSS
```
<link href="path/to/install/dir/css/page-preloader.css" rel="stylesheet">
```

Javascript
```
<script src="path/to/install/dir/js/page-preloader.js"></script>
```

```
Insert this html after <body> tag

<section class="page-loader">
    <div class="loading">
        <div class="loading-spin"></div>
        <span>Loading...</span>
    </div>
</section>
```

### 3 Extended dependencies

Bootstrap
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
```

Jquery
```
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
```

### 4 Run

Javascript
```
pagePreloader.run();
```