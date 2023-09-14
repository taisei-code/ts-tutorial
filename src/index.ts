import saySomething from "./saySomething";

const root: HTMLElement | null = document.getElementById("root");

// インスタンス化
const saySomething: string = new saySomething("Hello TS")
saySomething.sayText(root);