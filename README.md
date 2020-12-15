# vue-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Usage
Modify main.js
```javascript

import vueUI from "@g1100100/vue-ui"
Vue.use(vueUI);
import "@g1100100/vue-ui/lib/vue-ui.css"

```
```html
<vue-ui-loading v-if="showLoading" :msg="msg"></vue-ui-loading>
<vue-ui-alert :options="dialog"></vue-ui-alert>
```