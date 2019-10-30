import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom";
import fetch from "./__mocks__/fetch";

Enzyme.configure({ adapter: new Adapter() });

const jsdom = new JSDOM(
  `<!doctype html><html><body><div id="app"></div></body></html>`,
  { url: "http://localhost/" }
);
const { window } = jsdom;

function copyProps(src: any, target: any) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target)
  });
}

// Window setup

const globalAny: any = global;

globalAny.fetch = fetch;

globalAny.window = window;
globalAny.document = window.document;
globalAny.navigator = {
  userAgent: "node.js"
};
globalAny.requestAnimationFrame = function(callback: any) {
  return setTimeout(callback, 0);
};
globalAny.cancelAnimationFrame = function(id: any) {
  clearTimeout(id);
};
copyProps(window, globalAny);
