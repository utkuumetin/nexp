# 🧙 Nexp

Express style API routing for Next.js

## Installation

```bash
  npm i nexp --save
``` 
## Usage

You can use nexp in Next.js api files like this:

```javascript
import nexp from "nexp"

const router = nexp.Router();

router.set("GET", (req, res) => res.send(200));
router.set("POST", (req, res) => res.send(200));

export default router.handler();

```
or
```javascript
import nexp from "nexp"

const router = new nexp();

router.set("GET", (req, res) => res.send(200));
router.set("POST", (req, res) => res.send(200));

export default router.handler();

```
## Build using

- Typescript
  
## Licence

[MIT](https://choosealicense.com/licenses/mit/)

  
