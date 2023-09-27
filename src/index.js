import { StrictMode } from 'react';
import { ceateRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/CSS/bootstrap.min.CSS';
const container = document.getElementById("root");

const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
