import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let root;
function render(props) {
  root = createRoot(document.getElementById('root'));
  root.render(<App />);
}

function storeTest(props) {
  props.onGlobalStateChange((value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true);
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react18] react app bootstraped');
}

export async function mount(props) {
  console.log('[react18] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount(props) {
  console.log('[react18] react app will unmount');
  root.unmount();
}
