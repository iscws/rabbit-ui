import { createRoot } from 'react-dom/client';

// 在页面里添加一个createRoot
export default function toCreateRoot(id: string, pos = document.body) {
  let container = document.getElementById(id);
  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', id);
    pos.appendChild(container);
  }
  return createRoot(container as HTMLDivElement);
}
