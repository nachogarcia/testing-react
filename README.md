```
npx create-react-app my-app

cd my-app

yarn install

yarn add -D enzyme enzyme-adapter-react-16 react-test-renderer

cd src

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
  > setupTests.js

mkdir __tests__

NODE_PATH="src/" > .env

git init
```
